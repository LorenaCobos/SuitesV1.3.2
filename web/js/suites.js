function inicioGeneral() {
    suites.cargaInicial();
}

var suites = {
    cargaInicial: function() {
        var dateinicio=$("#txtFechaInicio").val();
        var datefin;
        $("#txtFechaInicio").datepicker({changeMonth: true, dateFormat: 'dd/mm/yy',
            showButtonPanel: true,
            closeText: 'Limpiar',
            changeYear: true, onSelect: function(textoFecha, objDatepicker)
            {
                datefin=$("#txtFechaFin").val();
                dateinicio=textoFecha;
                var z= new Date();
                var w= new Date();
                var fechainicio = dateinicio.split('/');
                var fechafin = datefin.split('/');
                z.setFullYear(fechainicio[2],fechainicio[1]-1,fechainicio[0]);
                w.setFullYear(fechafin[2],fechafin[1]-1,fechafin[0]);
                if(w<=z){alertaError(error, horario);$("#txtFechaFin").val("")};
            },
            onClose: function(dateText, inst) {
                if ($(window.event.srcElement).hasClass('ui-datepicker-close'))
                {
                    document.getElementById(this.id).value = '';
                }
            }
        });
        $("#txtFechaFin").datepicker({changeMonth: true, dateFormat: 'dd/mm/yy',
            showButtonPanel: true,
            closeText: 'Limpiar',
             changeYear: true,onSelect: function(textoFecha, objDatepicker)
            {
                dateinicio=$("#txtFechaInicio").val();
                datefin=textoFecha;
                var x= new Date();
                var y= new Date();
                var fechainicio = dateinicio.split('/');
                var fechafin = datefin.split('/');
                x.setFullYear(fechainicio[2],fechainicio[1]-1,fechainicio[0]);
                y.setFullYear(fechafin[2],fechafin[1]-1,fechafin[0]);
                if(y<=x){alertaError(error, horario);$("#txtFechaFin").val("")};
            },
            onClose: function(dateText, inst) {
                if ($(window.event.srcElement).hasClass('ui-datepicker-close'))
                {
                    document.getElementById(this.id).value = '';
                }
            }});
        
        $('<style type="text/css"> .ui-datepicker-current { display: none; } </style>').appendTo("head");
        $("#buttonBuscar").click(function(event) {
            event.preventDefault();
            suites.obtenerSuites();
        });
        $("#buttonNueva").click(function(event) {
            event.preventDefault();
            suites.irDetalleForm(0);
        });


        $("#buttonLimpiar").click(function(event) {
            $("#selectRecinto").val(0);
            $("#textfieldSuite").val("");
            $("#txtFechaInicio").val("");
            $("#txtFechaFin").val("");
            $("#textfieldDueno").val("");
            $("#selectEstatus").val(0);
            $("#contSuites").val("");
            var Table = document.getElementById("contSuites");
            Table.innerHTML = "";
        });


    },
    obtenerSuites: function() {
        dwrSuite.obtenerSuites(Aes.Ctr.encrypt($("#selectRecinto").val(), "", 1), Aes.Ctr.encrypt($("#textfieldSuite").val(), "", 1),
                Aes.Ctr.encrypt($("#txtFechaInicio").val(), "", 1), Aes.Ctr.encrypt($("#txtFechaFin").val(), "", 1), Aes.Ctr.encrypt($("#textfieldDueno").val(), "", 1),
                Aes.Ctr.encrypt($("#selectEstatus").val(), "", 1),
                {
                    callback: function(data) {
                        switch (data) {
                            case null:
                                 alertaError(error, sesion_);
                                break;
                            default:
                                bloquear();
                                suites.construirTabla(data);
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
                    + '<td style="text-align:center" aling="center"">'
                    + data[i].nombre
                    + '</td>'
                    + '<td style="text-align:center" aling="center">'
                    + (data[i].suiteHabiente === null ? sinInformacion : data[i].suiteHabiente)
                    + '</td>'
                    + '<td style="text-align:center" aling="center">'
                    + data[i].vigencia
                    + '</td>'
                    + '<td style="text-align:center" aling="center">'
                    + (data[i].estatusId === 5 ? "<a href='#' id='" + data[i].seccionUbicacionId 
                    + "'  onClick='suites.cambiarEstatus(" + data[i].seccionUbicacionId 
                    + "," + data[i].estatusId + "," + "\""+data[i].nombre+"\"" + ")'>"
                    + "<img src='../assets/img/user_status.png'/></a>" 
                    :
                            
                    
                     "<a href='#' id='" + data[i].seccionUbicacionId 
                    + "'  onClick='suites.cambiarEstatus(" + data[i].seccionUbicacionId 
                    + "," + data[i].estatusId + "," + "\""+data[i].nombre+"\"" + ")'>"
                    + "<img src='../assets/img/user_delete.png'/></a>") 
                    
                    + '<a href="#"'  
                    + ' onClick="suites.irDetalle(' + data[i].seccionUbicacionId + ')"'
                    + ' id="' + data[i].seccionUbicacionId + '"'
                    + '>'
                    + '<img src="../assets/img/user_edit.png"' 
                    + ' class="styleima"></img></a>'           
                    + '</td>'
                    + '</tr>';

            /*cadena += '<tr>'
                    + '<td style="text-align:center;cursor: pointer;" aling="center" onClick="suites.irDetalle(' + data[i].seccionUbicacionId + ')">'
                    + data[i].nombre
                    + '</td>'
                    + '<td style="text-align:center" aling="center">'
                    + (data[i].suiteHabiente === null ? sinInformacion : data[i].suiteHabiente)
                    + '</td>'
                    + '<td style="text-align:center" aling="center">'
                    + data[i].vigencia
                    + '</td>'
                    + '<td style="text-align:center" aling="center">'
                    + (data[i].estatusId === 5 ? "<input type='checkbox' id='" + data[i].seccionUbicacionId + "' checked onClick='suites.cambiarEstatus(" + data[i].seccionUbicacionId + "," + data[i].estatusId + "," + "\""+data[i].nombre+"\"" + ")'>" :
                            "<input type='checkbox' id='" + data[i].seccionUbicacionId + "' onClick='suites.cambiarEstatus(" + data[i].seccionUbicacionId + "," + data[i].estatusId + "," + "\""+data[i].nombre+"\"" + ")'>")
                    + '</td>'
                    + '</tr>';
                */    
        }
        $("#contSuites").html(cadena);
        desbloquear();
    },
    irDetalle: function(suite) {
//        dwrSuite.getSuite(Aes.Ctr.encrypt(suite.toString(), "", 1),
//                {
//                    callback: function (data) {
//                        switch (data) {
//                            case null:
//                            case -1:
//                                alertaError(error, errorInterno);
//                                break;
//                            default:
//                                bloquear();
//                                suites.irDetalleForm(suite);
//                                break;
//                        }
//                    },
//                    preHook: function () {
//                        bloquear();
//                    },
//                    postHook: function () {
//                        desbloquear();
//                    }
//
//                }
//        );
        bloquear();
        suites.irDetalleForm(suite);
    },
    cambiarEstatus: function(suite, estatus, nombre) {
        alertaConfirmacion(confirmacion, cambiarEstatusSuite.replace("XX", nombre).replace("YY", (estatus === 5 ? inactivo : activo)), suites.confirmacionEstatus, [suite, estatus]);
    },
    confirmacionEstatus: function(confirmacion, params) {
        var param1 = params[0];
        var param2 = params[1];
        if (confirmacion === true) {
            dwrSuite.cambiarEstatusSuite(Aes.Ctr.encrypt(param1.toString(), "", 1), Aes.Ctr.encrypt(param2.toString(), "", 1),
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
        /*} else {
            if (param2 === 5) {
                $("#" + param).prop('checked', true);
            } else {
                $("#" + param).prop('checked', false);
            }
        }*/

    },
    irDetalleForm: function(suite) {
        $("#formulario").attr("action", baseNormal + "/s/detalleSuite.do");
        var form = $("#formulario");

        form.append(
                $("<input/>",
                        {
                            type: 'hidden',
                            name: 'suiteId',
                            id: 'suiteId',
                            value: $.trim(suite)
                        }
                )
                );
        form.append(
                $("<input/>",
                        {
                            type: 'hidden',
                            name: 'recintoId',
                            id: 'recintoId',
                            value: $("#selectRecinto").val()
                        }
                )
                );
        form.append(
                $("<input/>",
                        {
                            type: 'hidden',
                            name: 'recinto',
                            id: 'recinto',
                            value: $("#selectRecinto").find(":selected").text()
                        }
                )
                );
        $("#formulario").submit();
    }

};


