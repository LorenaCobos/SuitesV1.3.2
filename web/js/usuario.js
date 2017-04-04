function inicioGeneral() {
    usuarios.cargaInicial();
}

var usuarios = {
    
     cargaInicial: function() {

        $("#buttonBuscar").click(function(event) {
            event.preventDefault();
            usuarios.obtenerUsuarios();
        });
        
        $("#buttonNuevo").click(function(event) {
           usuarios.irDetalleForm(0);
        });
        
        $("#buttonLimpiar").click(function(event) {
            $("#textfieldNombre").val("");
            $("#textfieldCorreo").val("");
            $("#selectTipo").val(0);
            $("#selectEstatus").val(0);
            $("#selectRecinto").val(0);
            $("#selectRecinto").change();
        });
        
         $("#selectRecinto").change(function (event) {
            event.preventDefault();
             bloquear();
            dwrUsuario.getSuitesUsuario($("#selectRecinto").val(),0,usuarios.getSuitesUsuarioCall);
        });
        
    }, getSuitesUsuarioCall : function(data){
        desbloquear()
        if(data!==null||data!==''){
            var obj =document.getElementById("selectSuite");
                dwr.util.removeAllOptions(obj);
                dwr.util.addOptions("selectSuite", data, 'id', 'nombreCompleto');
        }
    },
    
     obtenerUsuarios: function() {
        dwrUsuario.getUsuarios(
                                    Aes.Ctr.encrypt($("#textfieldNombre").val(), "", 1),  
                                    Aes.Ctr.encrypt($("#textfieldCorreo").val(), "", 1),
                                    Aes.Ctr.encrypt($("#selectTipo").val(), "", 1),
                                    Aes.Ctr.encrypt($("#selectEstatus").val(), "", 1),
                                    Aes.Ctr.encrypt($("#selectRecinto").val(), "", 1),
                                    Aes.Ctr.encrypt($("#selectSuite").val(), "", 1),
                {
                    callback: function(data) {
                        switch (data) {
                            case null:
                               alertaError(error, sesion_);
                                break;
                            default:
                                bloquear();
                                usuarios.construirTabla(data);
                                break;
                        }
                    },
                    preHook: function() {
                        bloquear();
                    },
                    postHook: function() {
                        desbloquear();
                    }
                });
    },
    construirTabla: function(data) {
        var cadena = "";
        for (var i = 0; i < data.length; i++) {

            cadena += '<tr>'
                    //+ '<td style="text-align:center;cursor: pointer;" aling="center" onClick="usuarios.irDetalleForm(' + data[i].usuarioId + ')">'
                    + '<td style="text-align:center" aling="center">'
                    + data[i].nombres
                    + '</td>'
                    + '<td style="text-align:center" aling="center">'
                    + (data[i].email)
                    + '</td>'
                    + '<td style="text-align:center" aling="center">'
                    + data[i].perfilNombre
                    + '</td>'
                    + '<td style="text-align:center" aling="center">'
                         + '<a href="#"'  
                        + ' onClick="usuarios.irDetalleForm(' + data[i].usuarioId + ')">'
                        + '<img src="../assets/img/user_edit.png"></img></a>'  
                
                  + (data[i].estatusId === 5 ? "<a href='#' id='" + data[i].usuarioId 
                    + "'  onClick='usuarios.cambiarEstatus(" + data[i].usuarioId + "," + data[i].estatusId + ",\"" + data[i].nombres + "\")'>"
                    + "<img src='../assets/img/user_status.png'/ ></a>" 
                    :
                            
                    
                     "<a href='#' id='" + data[i].usuarioId 
                    + "'  onClick='usuarios.cambiarEstatus(" + data[i].usuarioId + "," + data[i].estatusId + ",\"" + data[i].nombres + "\")'>"
                    + "<img src='../assets/img/user_delete.png' class='styleima'/></a>") 
                
                
                    
                    
                    +'</td>'
                    + '</tr>';

        }
        $("#contUsuarios").html(cadena);
        desbloquear();
    },
     irDetalleForm: function(usuario) {
         bloquear();
         
        var form = $("<form/>", {
            action: baseNormal+  "/s/detalleUsuario.do",
            id: 'formInicio',
            method: 'POST'
        });

        form.append(
                $("<input/>",
                        {
                            type: 'hidden',
                            name: 'usuario',
                            value: $.trim(Aes.Ctr.encrypt(usuario.toString(), "", 1))
                        }
                )
                );
        $("#contForm").html("");
        $("#contForm").append(form);
        $("#formInicio").submit();
        
    },
    cambiarEstatus: function(usuario, estatus, nombre) {
        alertaConfirmacion(confirmacion, cambiarEstatusUsuario.replace("XX", nombre).replace("YY", (estatus === 5 ? inactivo : activo)), usuarios.confirmacionEstatus, [usuario, estatus]);
    },
    confirmacionEstatus: function(confirmacion, params) {
        var param1 = params[0];
        var param2 = params[1];
        if (confirmacion === true) {
            dwrUsuario.cambiarEstatusUsuario(Aes.Ctr.encrypt(param1.toString(), "", 1), Aes.Ctr.encrypt(param2.toString(), "", 1),
                {
                    callback: function(data) {
                        switch (data) {
                            case null:		                                
                              alertaError(error, sesion_);		
                            break;		
                            case 0:		
                                alertaError(error, sesion_);		
                            break;
                            case -1:
                                alertaErrorGenerico();
                                break;
                            default:
                                $("#buttonBuscar").click();
                                break;
                        }
                    },
                    preHook: function() {
                        bloquear();
                    },
                    postHook: function() {
                        desbloquear();
                    }

                }
            );
        }
        /* else {
            if (param2 === 5) {
                $("#" + param).prop('checked', true);
            } else {
                $("#" + param).prop('checked', false);
            }
        }*/

    }
    
    
    
};

