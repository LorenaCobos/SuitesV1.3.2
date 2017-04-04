<%-- 
    Document   : alertas
    Created on : 24/03/2017, 05:55:50 PM
    Author     : Tixer
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!--modal-->
<div id="notificacionModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h2 class="text-center">
                  <div class="selectorUsuario">
                     <s:message code="key_login_olvida_usuario_titulo"/>
                  </div>
                  <div class="selectorPassword">
                      <s:message code="key_login_olvida_contra_titulo"/>
                  </div>
            </h2>
        </div>
        <div class="modal-body">
            <div id="divAlertaRecuperacion"></div>
            <div class="col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="text-center">
                                <div class="selectorUsuario text-center">
                                    <p><s:message code="key_login_olvida_usuario_desc"/></p>
                                </div>
                                <div class="selectorPassword text-center">
                                    <p><s:message code="key_login_olvida_contra_desc"/></p>
                                </div>
                                <div class="panel-body">
                                    <fieldset>
                                        <div class="input-group form-group">
                                             <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                            <input class="form-control" placeholder="<s:message code="key_placeholder_correo"/>"  
                                                   name="correoRecuperacion" id="correoRecuperacion" type="email">
                                        </div>   
                                         <div class="form-group">
                                            <div class="selectorUsuario">
                                                <input id="buttonRecuperarUsuario" name="buttonRecuperarUsuario"
                                                   class="btn btn-lg  btn-block btn-warning" 
                                                   value="<s:message code="key_login_enviar"/>" type="submit">  
                                            </div>
                                            <div class="selectorPassword">
                                                <input id="buttonRecuperarContrasena" name="buttonRecuperarContrasena"
                                                   class="btn btn-lg  btn-block btn-warning" 
                                                   value="<s:message code="key_login_enviar"/>" type="submit">  
                                            </div>
                                         </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="modal-footer" style="border-top: 0px; padding-top: 0px;">
            <div class="col-md-12">
                <button class="btn" data-dismiss="modal" aria-hidden="true">
                    <s:message code="key_login_cancelar"/></button>
            </div>	
        </div>
    </div>
    </div>
</div>
