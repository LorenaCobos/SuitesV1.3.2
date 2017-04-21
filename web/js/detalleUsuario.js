var verificar_=0;
function inicioGeneral() {
    detalleUsuario.cargaInicial();

    $("#selectSuite").chosen({
        disable_search_threshold: 10,
        no_results_text: "Oops, sin datos!"
    });
     
}

function validarsuites()
{ 
    if($('#checktodos:checked').val()=='on')
    {
         $('#select1').hide();
        $('#select2').show();
        $("#selectSuite_").chosen({
              disable_search_threshold: 10,
              no_results_text: "Oops, sin datos!"
          });
        verificar_=1;
    }else
    {
        $('#select2').hide();
        $('#select1').show();   
        $("#selectSuite").chosen({
         disable_search_threshold: 10,
         no_results_text: "Oops, sin datos!"
        });
        verificar_=0;
    }
}

var detalleUsuario = {
    cargaInicial: function () {

        $('#select2').hide();

        $("#buttonGuardar").click(function (event) {
            event.preventDefault();
            detalleUsuario.guardarUsuario();
        });
        $("#buttonCancelar").click(function (event) {
            event.preventDefault();
            detalleUsuario.cancelar();
        });
        $("#buttonRegresar").click(function (event) {
            event.preventDefault();
            detalleUsuario.regresarEventos();
           // navaegacion('usuarios');
        });
        $("#buttonNuevo").click(function (event) {
            event.preventDefault();
            detalleUsuario.limpiar();
        });

        if ($("#hdnUsuarioId").val() !== "0") {
            detalleUsuario.validacionesSinPass();
        }
        else {
            detalleUsuario.validaciones();
        }
        detalleUsuario.validacionesPass();

        $("#buttonGuardarPassCambio").click(function (event) {
            event.preventDefault();
            detalleUsuario.cambiaConstrasena();
        });
        $("#buttonNuevoPass").click(function (event) {
            event.preventDefault();
            $("#divPassCambiar").show();
        });

        $("#buttonCancelarPassCambio").click(function (event) {
            event.preventDefault();
            $("#textfieldContrasenaChange").val("");
            $("#textfieldContrasena2Change").val("");
            $("#divPassCambiar").hide();
        });
        
        
        $('#passwordModal').on('hidden.bs.modal', function () {
            $("#divAlertaCambioPassword").empty();
            $("#correoRecuperacion").val(null);
        });
        



    },
    validaciones: function () {

        $("#formUsuario").validate({
            rules: {
                textfieldNombre: {
                    required: true,
                    minlength: 3,
                    xss: true
                },
                textfieldApPaterno: {
                    required: true,
                    minlength: 2,
                    xss: true
                },
                textfieldApMaterno: {
                    required: true,
                    minlength: 2,
                    xss: true
                },
                textfieldLogin: {
                    required: true,
                    minlength: 3,
                    xss: true
                },
                textfieldCorreo: {
                    required: true,
                    minlength: 8,
                    email: true,
                    xss: true
                },
                textfieldCorreoAlterno: {
                    required: false,
                    minlength: 8,
                    email: true,
                    xss: true
                },
                textfieldContrasena: {
                    required: true,
                    minlength: 6,
                    xss: true,
                    ContainsAtLeastOneDigit: true
                },
                textfieldContrasena2: {
                    required: true,
                    minlength: 6,
                    xss: true,
                    ContainsAtLeastOneDigit: true,
                    equalTo: $("#textfieldContrasena")
                }
            }
        });

    },
    validacionesSinPass: function () {

        $("#formUsuario").validate({
            rules: {
                textfieldNombre: {
                    required: true,
                    minlength: 3,
                    xss: true
                },
                textfieldApPaterno: {
                    required: true,
                    minlength: 3,
                    xss: true
                },
                textfieldApMaterno: {
                    required: true,
                    minlength: 3,
                    xss: true
                },
                textfieldLogin: {
                    required: true,
                    minlength: 3,
                    xss: true
                },
                textfieldCorreo: {
                    required: true,
                    minlength: 8,
                    email: true,
                    xss: true

                }
            }
        });


    },
    validacionesPass: function () {

        $("#formCambio").validate({
            rules: {
                textfieldContrasenaChange: {
                    required: true,
                    minlength: 6,
                    xss: true,
                    ContainsAtLeastOneDigit: true
                },
                textfieldContrasena2Change: {
                    required: true,
                    minlength: 6,
                    xss: true,
                    equalTo: $("#textfieldContrasenaChange")
                }
            }
        });
    },
    cancelar: function () {
        dwrUsuario.getUsuario(Aes.Ctr.encrypt($("#usuarioId").val(), "", 1),
                {
                    callback: function (data) {
                        switch (data) {
                            case null:
                            case -1:
                                alertaErrorGenerico();
                                break;
                            default:
                                bloquear();
                                detalleUsuario.restaurarInformacion(data);
                                break;
                        }
                    },
                    preHook: function () {
                        bloquear();
                    },
                    postHook: function () {
                        desbloquear();
                    }

                }
        );
    },
    restaurarInformacion: function (data) {
        $("#hdnUsuarioId").val(data.usuarioId);
        $("#textfieldNombre").val(data.nombre);
        $("#textfieldApPaterno").val(data.apmaterno);
        $("#textfieldApMaterno").val(data.appaterno);

        $("#textfieldTelefono").val(data.telefono);
        $("#textfieldExtension").val(data.extension);
        $("#textfieldCelular").val(data.celular);

        $("#textfieldCorreo").val(data.correo);
        $("#textfieldCorreoAlterno").val(data.correoalterno);

        $("#textfieldLogin").val(data.login);

        $("#selectTipo").val(data.tipoId);
        $("#selectEstatus").val(data.estatusId);

        desbloquear();

    }, guardarUsuario: function () {

        if ($("#formUsuario").valid()) {

            var checked = [];
            /*    
             //$("input[name='suite']:checked").each(function ()
             $("option[suite][selected]").each(function ()
             {
             //checked.push(parseInt($(this).attr("value")));
             checked.push(parseInt($("#selectSuite").chosen().val()));
             //checked.push(parseInt($(this).attr("id")));
             });
             */
            
            if(verificar_ ==1)
            {checked = $("#selectSuite_").chosen().val();}
            else
            {checked = $("#selectSuite").chosen().val();}

            if ((checked == null)) {
                alertaInformacion(avisoTituloGenerico, seleccionSuiteUsuario);
                return;
            }


            userEntity = new usuarioEntidad();

            userEntity.usuarioId = parseInt($("#hdnUsuarioId").val());
            userEntity.nombres = $("#textfieldNombre").val();
            userEntity.apellidoPaterno = $("#textfieldApPaterno").val();
            userEntity.apellidoMaterno = $("#textfieldApMaterno").val();

            userEntity.telefono = $("#textfieldTelefono").val();
            userEntity.extencion = $("#textfieldExtension").val();
            userEntity.celular = $("#textfieldCelular").val();

            userEntity.email = $("#textfieldCorreo").val();
            userEntity.emailAlterno = $("#textfieldCorreoAlterno").val();

            userEntity.login = $("#textfieldLogin").val();
            userEntity.contrasena = ($("#hdnUsuarioId").val() === "0" ? Aes.Ctr.encrypt(hex_sha1($("#textfieldContrasena").val()), "y", 0) : "0");

            userEntity.tipoId = parseInt($("#selectTipo").val());
            userEntity.estatusId = $("#selectEstatus").val() === 'ACTIVO' ? 5 : 6;

            dwrUsuario.saveUsuario(userEntity, checked,
                    {
                        callback: function (data) {
                            switch (data) {
                                case 0:
                                     alertaError(error, sesion_);
                                break;
                                case -1:
                                    alertaErrorGenerico();
                                    break;
                                case -2:  
                                    alertaError(error, loginRepetido.replace("ZZZ",userEntity.login));
                                    break;
                                default:
                                    alertaGuardarGenerico();
                                    $("#hdnUsuarioId").val(data);
                                    $("#buttonCancelar").click();
                                    break;
                            }
                        },
                        preHook: function () {
                            bloquear();
                        },
                        postHook: function () {
                            desbloquear();
                        }

                    }
            );
        }
    },
    limpiar: function () {
        var form = $("<form/>", {
            action: baseNormal + "/s/detalleUsuario.do?",
            id: 'formInicio',
            method: 'POST'
        });

        form.append(
                $("<input/>",
                        {
                            type: 'hidden',
                            name: 'usuario',
                            value: $.trim(Aes.Ctr.encrypt("0", "", 1))
                        }
                )
                );
        $("#contForm").html("");
        $("#contForm").append(form);
        $("#formInicio").submit();
    },
    cambiaConstrasena: function () {
        
        if ($("#formCambio").valid()) {
       // if ($("#formCambio").valid() && ($("#hdnUsuarioId").val() !== 0 && $("#hdnUsuarioId").val() !== "0")) {
            dwrUsuario.saveContrasenaUsuario(Aes.Ctr.encrypt(hex_sha1($("#textfieldContrasenaChange").val()), "y", 0), Aes.Ctr.encrypt($("#hdnUsuarioId").val() + "", "", 1),
                    {
                        callback: function (data) {
                            switch (data) {
                                 case 0:
                                    alertaError(error, sesion_);
                                break;
                                case -1:
                                    mostrarAlertaCambioPassword(2, errorInterno);
                                    break;
                                default:
                                    $("#textfieldContrasenaChange").val("");
                                    $("#textfieldContrasena2Change").val("");
                                    mostrarAlertaCambioPassword(1, guardadoExito);
                                    break;
                            }
                        },
                        preHook: function () {
                            bloquear();
                        },
                        postHook: function () {
                            desbloquear();
                        }

                    }
            );
        }

    },
    cambiaEstatusSuite: function (suite, tipo) {
        dwrUsuario.cambiarEstatusSuite(Aes.Ctr.encrypt($("#hdnUsuarioId").val() + "", "", 1), Aes.Ctr.encrypt(suite + "", "", 1), Aes.Ctr.encrypt(tipo + "", "", 1),
                {
                    callback: function (data) {
                        switch (data) {
                            case null:
                            case -1:
                                alertaErrorGenerico();
                                break;
                            default:
                                $("#textfieldContrasenaChange").val("");
                                alertaGuardarGenerico();
                                break;
                        }
                    },
                    preHook: function () {
                        bloquear();
                    },
                    postHook: function () {
                        desbloquear();
                    }

                }
        );
    },
     regresarEventos: function() {
        
      
        
        var recintoBusquedaId = $("#hdnrecintoBusquedaId").val();
        var suitesBusquedaId = $("#hdnsuitesBusquedaId").val();
        var nombreBusquedaId = $("#hdnnombreBusquedaId").val();
        var correoBusquedaId = $("#hdncorreoBusquedaId").val();
        var estatusBusquedaId = $("#hdnestatusBusquedaId").val();
        var tipoBusquedaId = $("#hdntipoBusquedaId").val();
      
        $("#formulario").attr("action",baseNormal+"/s/usuarios.do");
        
        var formulario = $("#formulario");
        formulario.append(
                $("<input/>",
                           {
                               type: 'hidden',
                               name: 'recintoBusquedaId',
                               value: $.trim(recintoBusquedaId),
                               id: 'recintoBusquedaId'
                           }
                   ),
                   $("<input/>",
                           {
                               type: 'hidden',
                               name: 'suitesBusquedaId',
                               value: $.trim(suitesBusquedaId),
                               id: 'suitesBusquedaId'
                           }
                   ),
                    $("<input/>",
                           {
                               type: 'hidden',
                               name: 'nombreBusquedaId',
                               value: $.trim(nombreBusquedaId),
                               id: 'nombreBusquedaId'
                           }
                   ),

                   $("<input/>",
                           {
                               type: 'hidden',
                               name: 'correoBusquedaId',
                               value: $.trim(correoBusquedaId),
                               id: 'correoBusquedaId'
                           }
                   ),
                      $("<input/>",
                           {
                               type: 'hidden',
                               name: 'estatusBusquedaId',
                               value: $.trim(estatusBusquedaId),
                               id: 'estatusBusquedaId'
                           }
                   ),

                   $("<input/>",
                           {
                               type: 'hidden',
                               name: 'tipoBusquedaId',
                               value: $.trim(tipoBusquedaId),
                               id: 'tipoBusquedaId'
                           }
                   )
                );
        $("#formulario").submit();
    }

};

function mostrarAlertaCambioPassword(tipoAlerta, mensaje) {
    
    var cadena ="";
    if (tipoAlerta === 1) {
        cadena += '<div class="alert alert-success alert-dismissible text-center">';
    } else {
        cadena += '<div class="alert alert-error alert-dismissible text-center">';
    }
    
    cadena += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>'
    + mensaje       
    + '</div>';
    
    $("#divAlertaCambioPassword").html(cadena);
}

