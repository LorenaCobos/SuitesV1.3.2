//------------------------------------------------------------------------------
/**
 * Funcion de inicio general
 * @returns {undefined}
 */
function inicioGeneral() {
   window.location.hash="no-back-button";	
   window.location.hash="Again-No-back-button"; //chrome
   window.onhashchange=function(){window.location.hash="no-back-button";};
  if(history.forward(1))
  {
     history.replace('/Suites/login.do'); 
    location.replace(history.forward(1));
  }
    login.validaciones();
    login.listeners();
    
    os = getMobileOperatingSystem();

    if (os.match("celular")) {
        $('#divModal12').removeClass('col-md-12');
       
    }
}
//------------------------------------------------------------------------------
/**
 * Funciones de pantalla
 * @param {type} event
 * @returns {undefined}
 */

var login = {
    listeners: function() {

        $("#button").click(function(event) {
            event.preventDefault();
            login.ingresar();
        });
        $("#usuarioLnk").click(function(event) {
            event.preventDefault();
            login.recuperarUsuario(0);
        });
        $("#pwdLnk").click(function(event) {
            event.preventDefault();
            login.recuperarUsuario(1);
        });

        $("#password").keypress(function(event) {
            if (event.keyCode === 13) {
                login.ingresar();
            }
        });
        $("#amSuite").click(function(event) {
            event.preventDefault();
            login.seleccionSuite(2);
        });
        $("#acmxSuite").click(function(event) {
            event.preventDefault();
            login.seleccionSuite(1);
        });
         $("#buttonRecinto").click(function(event) {
            event.preventDefault();
            var recinto = $("#selectRecinto" ).val();
            if (recinto === "1" || recinto === "2") {
                 login.seleccionSuite(recinto);
            }
           
        });
        
        $("#buttonRecuperarUsuario").click(function(event) {
            event.preventDefault();
            var correo = $("#correoRecuperacion" ).val();
            if (correo.length > 0) {
                login.reenviarInfo(correo, 0);
            }
           
        });
        
         $("#buttonRecuperarContrasena").click(function(event) {
            event.preventDefault();
            var correo = $("#correoRecuperacion" ).val();
            if (correo.length > 0) {
                login.reenviarInfo(correo, 1);
            }
           
        });
        $('#usuarioModal').on('hidden.bs.modal', function () {
            $("#divAlertaRecuperacion").empty();
            $("#correoRecuperacion").val(null);
        });
        
        $('#usuarioModal').on('show.bs.modal', function(e) {

            var idLlamada = e.relatedTarget.id;
            
            if (idLlamada === "recuperaUsuario") {
                $(".selectorUsuario").show();
                $(".selectorPassword").hide();
            } else {
                $(".selectorPassword").show();
                $(".selectorUsuario").hide();
            }

        });


    },
    validaciones: function() {

        $("#formLogin").validate({
            rules: {
                textfield: {
                    required: true,
                    minlength: 4,
                    xss: true
                },
                password: {
                    required: true,
                    minlength: 4,
                    xss: true
                }
            }
        });
    },
    validarUsuario_key: function(event) {

        var a;
        if (event.charCode) {
            a = event.charCode;
        }
        else {
            a = event.keyCode;
        }

        if (event.keyCode === 13) {
            login.ingresar();
        }
    },
    seleccionSuite: function(valor) {
        setCookie('opcion', valor, 365);
        dwrLogin.seleccionSuite(valor,
                {
                    callback: function(data) {
                        switch (data) {
                           case 0:
                              location.href = "/Suites/logout.do";   
                            break;
                            break;
                            case null:
                            case -1:
                            case -2:
                                alertaErrorGenerico();
                                break;
                            default:
                                bloquear();
                                //navaegacion("login");
                                login.operacionInicial(data);
                                break;
                        }
                    },
                    preHook: function() {
                        bloquear();
                    },
                    postHook: function() {
                    }
                });
    },
    ingresar: function() {
        if ($("#formLogin").valid()) {
            dwrLogin.validaUsuario(Aes.Ctr.encrypt($("#textfield").val(), "x", 0), Aes.Ctr.encrypt(hex_sha1($("#password").val()), "y", 0),
                    {
                        callback: function(data) {
                            switch (data) {
                                case null:
                                    mostrarNotificaErrorAutenticacion(usuarioInexistente);
                                    break;
                                case -1:
                                    mostrarNotificaErrorAutenticacion(errorInternoRecuperar);
                                    break;
                                case -2:
                                    mostrarNotificaErrorAutenticacion(usuarioSinPermisos);
                                    break;
                                default:
                                    bloquear();
                                    //login.operacionInicial(data);
                                    navaegacion("seleccionSuite");
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
        }

    },
    recuperarUsuario: function(tipo) {
        recuperarUsuario(tipo);
    },
    reenviarInfo: function(dato, tipo) {
        dwrLogin.recuperarUsuario(Aes.Ctr.encrypt(dato, "x", 0), Aes.Ctr.encrypt(tipo + "", "x", 0),
                {
                    callback: function(data) {
                        switch (data) {
                            case null:
                            case -2:   
                                mostrarAlertaRecuperacion(2, no_existe_usuario);
                                break;
                            case -1:
                                mostrarAlertaRecuperacion(2, errorInternoRecuperar);
                                break;
                            case -3:
                                mostrarAlertaRecuperacion(2, correoRepetido);
                                break;
                            case -4:
                                mostrarAlertaRecuperacion(2, usuarioSinPermisos);
                                break;
                            default:
                                mostrarAlertaRecuperacion(1, mensajeEnvio);
                                break;
                        }
                    },
                    preHook: function() {
                        bloquear();
                        $("#buttonRecuperarUsuario").attr("disabled", true);
                        $("#buttonRecuperarContrasena").attr("disabled", true);
                    },
                    postHook: function() {
                        desbloquear();
                        $("#buttonRecuperarUsuario").attr("disabled", false);
                        $("#buttonRecuperarContrasena").attr("disabled", false);
                    }

                });
    },
    operacionInicial: function(data) {
        dwrLogin.getModuloOperInicial({
            callback: function(data) {
                if (data === null || data.urlMenuLateral === '') {
                    alertaErrorGenerico();
                } else {
                    var form = $("<form/>", {
                        action: baseNormal + data.urlMenuLateral,
                        id: 'formInicio',
                        method: 'GET'
                    });
                    $("#contForm").html("");
                    $("#contForm").append(form);
                    $("#formInicio").submit();
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
    validacionOpcion:function(){
        $("#contenido").attr("style","max-width:1100px;");
        if(getCookie("opcion")!==null&&getCookie("opcion")!==""){
            login.seleccionSuite(getCookie("opcion"));
        }
    }
};

function mostrarAlertaRecuperacion(tipoAlerta, mensaje) {
    
    var cadena ="";
    if (tipoAlerta === 1) {
        cadena += '<div class="alert alert-success alert-dismissible text-center">';
    } else {
        cadena += '<div class="alert alert-error alert-dismissible text-center">';
    }
    
    cadena += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>'
    + mensaje       
    + '</div>';
    
    $("#divAlertaRecuperacion").html(cadena);
}

function mostrarNotificaErrorAutenticacion(mensaje) {
    var cadena ="";

    cadena += '<div class="alert alert-error alert-dismissible text-center">'   
    + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>'
    + mensaje       
    + '</div>';
    
    $("#notificaErrorLogin").html(cadena);
}