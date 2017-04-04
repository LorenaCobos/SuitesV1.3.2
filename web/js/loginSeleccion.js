//------------------------------------------------------------------------------
/**
 * Funcion de inicio general
 * @returns {undefined}
 */
function inicioGeneral() {
    login.validaciones();
    login.listeners();
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
        
        $( "#password" ).keypress(function(event) {
            if (event.keyCode === 13){
                login.ingresar();
            }
        });
        
        /*
       $( "#password" ).keypress(function(event) {
           event.preventDefault();
           login.validarUsuario_key(event);
        });*/

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
    ingresar: function() {
        if ($("#formLogin").valid()) {
            dwrLogin.validaUsuario(Aes.Ctr.encrypt($("#textfield").val(), "x", 0), Aes.Ctr.encrypt(hex_sha1($("#password").val()), "y", 0),
                    {
                        callback: function(data) {
                            switch (data) {
                                case null:
                                    alertaError(error, no_existe_usuario);
                                    break;
                                case -1:
                                    alertaError(error, errorInternoRecuperar);
                                    break;
                                case -2:
                                    alertaError(error, usuarioSinPermisos);
                                    break;
                                default:
                                    bloquear();
                                    login.operacionInicial(data);
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
                            case 0:
                            case -2:
                                alertaError(error, no_existe_usuario);
                                break;
                            case -1:
                                alertaError(error, errorInternoRecuperar);
                                break;
                            case -3:
                                alertaError(error, correoRepetido);
                                break;
                            case -4:
                                alertaError(error, usuarioSinPermisos);
                                break;
                            default:
                                alertaInformacion(informacion, mensajeEnvio);
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
    operacionInicial: function(data) {
        dwrLogin.getModuloOperInicial({
            callback: function(data) {
                if (data === null||data.urlMenuLateral==='') {
                    alertaErrorGenerico();
                } else {
                    var form = $("<form/>", {
                        action: baseNormal+ data.urlMenuLateral,
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

    }

};

