<%--    
    Author     : Fabian molar
--%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="s"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<div style="text-align: center"> 

    <div class="login-box">

        <div class="login-header-box">
            <div class="login-header-image col-sm-7"> </div>
           
            <div class="col-sm-4" > 
                <s:message code="key_login_box"/>
            </div>
        </div>

      <!-- /.login-logo -->
        <div class="login-box-body">
            
            <div id="notificaErrorLogin"></div>
            
            <form id="formLogin" >
                <div class="row">
                    <div class="col-sm-2 text-left">
                        <label for="textfield2" class="control-label" ><s:message code="key_placeholder_usuario"/>:</label>
                    </div>
                    <div class="col-sm-12">
                        <input type="text" name="textfield" value="" id="textfield" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-2 text-left">
                        <label for="textfield2"  class="control-label"><s:message code="key_placeholder_password"/>:</label>
                    </div>
                    <div class="col-sm-12">
                        <input type="password" name="password" value=""  id="password" class="form-control">
                    </div>
                </div>
                <div class="row col-sm-12">

                    <div class="col-sm-4 text-center ">
                        <a data-target="#usuarioModal" data-toggle="modal" id ="recuperaUsuario" href="#">
                            <small><s:message code="key_login_olvide_usuario"/></small></a>
                    </div>

                    <div class="col-sm-4 text-center">
                        <a data-target="#usuarioModal" data-toggle="modal" id="recuperaPassword" href="#">
                            <small><s:message code="key_login_olvide_parword"/></small></a>
                    </div>
                    
                    <div class="col-sm-4 text-right">
                        <button type="button" name="button" id="button" value="<s:message code="key_generico_aceptar"/>" 
                            class="button btn-default "><s:message code="key_generico_aceptar"/></button>
                    </div>
                </div>

                
            </form>
            <div id="contForm"/>
            </div>

        </div>
      <!-- /.login-box-body -->
    </div>
</div>
<!-- /.login-box -->



<!--modal-->
<div id="usuarioModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
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

<%--<div class="container-fluid">


    <div class="row">
        <form id="formLogin" >
            <div class="col-sm-1 text-left">
                <label for="textfield2" class="control-label" ><s:message code="key_placeholder_usuario"/>:</label>
            </div>
            <div class="col-sm-4">
                <input type="text" name="textfield" value="" id="textfield" class="form-control">
            </div>
            <div class="col-sm-2 text-left">
                <label for="textfield2"  class="control-label"><s:message code="key_placeholder_password"/>:</label>
            </div>
            <div class="col-sm-3">
                <input type="password" name="password" value=""  id="password" class="form-control">
            </div>
            <div class="col-sm-2 text-center">
                <button type="button" name="button" id="button" value="<s:message code="key_generico_aceptar"/>" class="button btn-default "><s:message code="key_generico_aceptar"/></button>
            </div>
        </form>
    </div>

    <hr>
    <div class="row">

        <div class="col-sm-3 text-center ">
            <a id="usuarioLnk" ><small><s:message code="key_login_olvide_usuario"/></small></a>
        </div>

        <div class="col-sm-3 text-center">
            <a id="pwdLnk"><small><s:message code="key_login_olvide_parword"/></small></a>
        </div>

        <div class="col-sm-3">

        </div>

    </div>
    <div id="contForm"/>
    </div>
    
</div>--%>


