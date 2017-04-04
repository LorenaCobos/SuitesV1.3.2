<%-- 
    Document   : detalleUsuario
    Created on : 05-jun-2015, 15:16:12
    Author     : Fabian Molar
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="s"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<style>

    @media (max-width: 768px) {
        div.col-sm-4.text-right{
            text-align: left! important;
        }
    }

</style>

<script> 
    validacion_();
</script>
<section style="width: 90%;  margin-bottom: 50px;">
    <span class="label-titulo-seccion col-md-10 col-sm-9 col-xs-12" ><s:message code="key_generico_usuario_abc"/></span>
    <span style="float: right" class="col-md-2 col-sm-3 col-xs-12 text-xs-right">
        <a href="#" name="buttonRegresar" onclick="bloquear();" id="buttonRegresar">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;<s:message code="key_button_regresar"/>
        </a>
    </span>
    
</section>


<input type="hidden" id="hdnUsuarioId" value="${usuario.usuarioId}">
<br>




 <form id="formUsuario" >
    <div style="width: 90%">
   
        <div class="row">
            <div class="col-md-2 col-sm-4 col-xs-12 text-left">
                <label for="textfield2" class="control-label" ><s:message code="key_placeholder_nombre"/>:</label>

            </div>
            <div class="col-md-4 col-sm-8 col-xs-12">
                <input type="text" name="textfieldNombre" id="textfieldNombre" class="form-control" value="${usuario.nombres}">
            </div>
            
             <div class="col-md-2 col-sm-4 col-xs-12 text-left">
                *<label for="textfield2" class="control-label" ><s:message code="key_placeholder_appaterno"/>:</label>
            </div>
            <div class="col-md-4 col-sm-8 col-xs-12">
                <input type="text" name="textfieldApPaterno" id="textfieldApPaterno" class="form-control" value="${usuario.apellidoPaterno}">
            </div>
           
        </div>

        <div class="row">
            
            <div class="col-md-2 col-sm-4 col-xs-12 text-left">
                *<label for="textfield2" class="control-label" ><s:message code="key_placeholder_apmaterno"/>:</label>
            </div>
            <div class="col-md-4 col-sm-8 col-xs-12">
                <input type="text" name="textfieldApMaterno" id="textfieldApMaterno" class="form-control" value="${usuario.apellidoMaterno}">
            </div>
            
            <div class="col-md-2 col-sm-4 col-xs-12 text-left">
                  *<label for="textfield2" class="control-label" ><s:message code="key_placeholder_usuario"/>:</label>
            </div>
            <div class="col-md-4 col-sm-8 col-xs-12">
                <input type="text" name="textfieldLogin" id="textfieldLogin" class="form-control" value="${usuario.login}">
            </div>
        </div>
            
        <c:if test="${usuario.usuarioId==0}">    
            <div class="row">

                <div class="col-md-2 col-sm-4 col-xs-12 text-left">
                    *<label for="textfield2" class="control-label" ><s:message code="key_placeholder_password"/>:</label>
                </div>
                <div class="col-md-4 col-sm-8 col-xs-12">
                    <input name="textfieldContrasena" type="password" id="textfieldContrasena" class="form-control" value="${usuario.contrasena}">
                </div>               
                
                <div class="col-md-2 col-sm-4 col-xs-12 text-left" style="padding-right: 0px;">
                    *<label for="textfield2" class="control-label" ><s:message code="key_placeholder_passwordconfirm"/>:</label>
                </div>
                <div class="col-md-4 col-sm-8 col-xs-12">
                    <input name="textfieldContrasena2" type="password" id="textfieldContrasena2" class="form-control" value="${usuario.contrasena}">
                </div>
            </div>
        </c:if>
            
        <div class="row">
            <div class="col-md-2 col-sm-4 col-xs-12 text-left">
                *<label for="textfield2" class="control-label" ><s:message code="key_placeholder_correo"/>:</label>
            </div>
            <div class="col-md-4 col-sm-8 col-xs-12">
                <input type="text" name="textfieldCorreo" id="textfieldCorreo" class="form-control" value="${usuario.email}">
            </div>

            <div class="col-md-2 col-sm-4 col-xs-12 text-left">
                <label for="textfield2" class="control-label" ><s:message code="key_placeholder_correoalterno"/>:</label>
            </div>
            <div class="col-md-4 col-sm-8 col-xs-12">
                <input type="text" name="textfieldCorreoAlterno" id="textfieldCorreoAlterno" class="form-control" value="${usuario.emailAlterno}">
            </div>
        </div>
            
            
        <div class="row" >
                
            <div class="col-md-2 col-sm-4 col-xs-12 text-left">
                <label for="textfield2" class="control-label" ><s:message code="key_suite_telefono"/>:</label>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <input type="text" name="textfieldTelefono" id="textfieldTelefono" class="form-control" value="${usuario.telefono}">
            </div>
            <div class="col-md-1  "></div>
             <div class="col-md-2 col-sm-4 col-xs-12 text-left">
                    <label for="textfield2" class="control-label" ><s:message code="key_placeholder_extension"/>:</label>
                </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <input type="text" name="textfieldExtension" id="textfieldExtension" class="form-control" value="${usuario.extencion}">
            </div>
            
        </div>

            

        <div class="row">
            
            <div class="col-md-2 col-sm-4 col-xs-12 text-left">
                    <label for="textfield2" class="control-label" ><s:message code="key_placeholder_celular"/>:</label>
                </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <input type="text" name="textfieldCelular" id="textfieldCelular" class="form-control" value="${usuario.celular}">
            </div>
            <div class="col-md-1 "></div>
            <div class="col-md-2 col-sm-4 col-xs-12 text-left">
                <label for="textfield2" class="control-label" ><s:message code="key_placeholder_activo"/>:</label>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <select name="selectEstatus" id="selectEstatus" class="form-control">
                    <c:forEach var="estatus" items="${estatus}">
                        <c:choose>
                            <c:when test="${suite.estatusId==5&&estatus.clave=='ACTIVO'}">
                                <option value="${estatus.clave}" selected="selected">${estatus.nombre}</option>
                            </c:when>
                            <c:when test="${suite.estatusId==6&&estatus.clave=='INACTIVO'}">
                                <option value="${estatus.clave}" selected="selected">${estatus.nombre}</option>
                            </c:when>
                            <c:otherwise>
                                <option value="${estatus.clave}" >${estatus.nombre}</option>
                            </c:otherwise>
                        </c:choose>
                    </c:forEach>
                </select>
            </div>

        </div>

        <div class="row">
            
            
            <div class="col-md-2 col-sm-4 col-xs-12 text-left">
                <label for="textfield2" class="control-label" ><s:message code="key_placeholder_tipo"/>:</label>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <select name="selectTipo" id="selectTipo" class="form-control">
                    <c:forEach var="tipos" items="${tipos}">
                        <option <c:if test="${usuario.perfilId==tipos.id}">selected="selected"</c:if> value="${tipos.id}">${tipos.nombre}</option>
                    </c:forEach>
                </select>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-2 col-sm-4 col-xs-12 text-left">
                *<label for="textfield2" class="control-label" ><s:message code="key_placeholder_suite"/>:</label>
            </div>
            <div id="select1"  class="col-md-4 col-sm-6 col-xs-12">
                <select name="selectSuite" id="selectSuite" class="form-control chosen-select" multiple>
                    <c:set var="nivelId" value="0" scope="page"/>
                    <c:forEach var="suite" items="${suites}">
                        <c:choose>
                            <c:when test="${nivelId != suite.nivel_id}">
                                <c:if test="${nivelId!=0}"></optgroup></c:if>
                                <optgroup label="${suite.nivel}">
                                    <option suite value="${suite.id}" <c:if test="${suite.valor!=6}">selected</c:if>>
                                        ${suite.nombre} ${suite.clave}
                                    </option>
                                    <c:set var="nivelId" value="${suite.nivel_id}" scope="page"/>
                                </c:when>
                                <c:when test="${nivelId == suite.nivel_id}">
                                    <option suite value="${suite.id}" <c:if test="${suite.valor!=6}">selected</c:if>>
                                        ${suite.nombre} ${suite.clave}
                                    </option>
                                </c:when>
                                <c:otherwise>
                                </c:otherwise>
                            </c:choose>
                        </c:forEach>
                    </optgroup>
                </select>

            </div>
            <div id="select2" class="col-md-4 col-sm-6 col-xs-12">    
                     <select name="selectSuite_" id="selectSuite_" class="form-control chosen-select" multiple>
                        <c:set var="nivelId" value="0" scope="page"/>
                        <c:forEach var="suite" items="${suites}">
                            <c:choose>
                                <c:when test="${nivelId != suite.nivel_id}">
                                    <c:if test="${nivelId!=0}"></optgroup></c:if>
                                    <optgroup label="${suite.nivel}">
                                        <option suite value="${suite.id}" <c:if test="${suite.valor<=6}">selected</c:if>>
                                            ${suite.nombre} ${suite.clave}
                                        </option>
                                        <c:set var="nivelId" value="${suite.nivel_id}" scope="page"/>
                                    </c:when>
                                    <c:when test="${nivelId == suite.nivel_id}">
                                        <option suite value="${suite.id}" <c:if test="${suite.valor<=6}">selected</c:if>>
                                            ${suite.nombre} ${suite.clave}
                                        </option>
                                    </c:when>
                                    <c:otherwise>
                                    </c:otherwise>
                                </c:choose>
                            </c:forEach>
                        </optgroup>
                    </select>       
                </div>

        </div>
           <div class="row">
                 <div class="col-sm-2 text-left"></div>
                  <div class="col-sm-3">    
                    </div> 
                 <div class="col-sm-1"></div>
                  <div class="col-sm-2 text-left">
                 <label for="textfield2" style="display:none" class="control-label" ><s:message code="key_placeholder_suite"/>:</label>
                  </div> 
                 <div class="col-sm-3">    
                    <input onclick="validarsuites();" type="checkbox"id="checktodos" name="checktodos"> <label>Agregar a Todos</label>   
                </div> 
            </div>
                  
    <div class="row" style="padding-top: 30px">

        <div class="col-md-6 col-sm-4 "></div>
        <div class="col-md-6 col-sm-8 col-xs-12">
            <div class="col-md-3 col-sm-3 col-xs-4  text-center">
                <button type="button" name="button" id="buttonGuardar" 
                        value="<s:message code="key_generico_guardar"/>" class="button">
                        <s:message code="key_generico_guardar"/></button>
            </div>

            <div class="col-md-3 col-sm-3 col-xs-4 text-center">
                <button type="button" name="button" id="buttonNuevo" 
                    value="<s:message code="key_generico_nuevo"/>" class="button">
                    <s:message code="key_generico_nuevo"/></button>
            </div>

            
            <div class="row" style="<c:if test="${usuario.usuarioId==0}">display: none;</c:if>">
                <div class="col-md-6 col-sm-6 col-xs-4 text-center">
                    <button type="button" name="button" id="cambiarPassword" 
                        data-target="#passwordModal" data-toggle="modal"
                        value="<s:message code="key_generico_cambiarPass"/>" class="button">
                        <s:message code="key_generico_cambiarPass"/>
                    </button>      
                </div>
            </div>  

        </div>
    </div>
    </div>
</form>                      
                    
                    
                    
                    

<!--modal-->
<div id="passwordModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h2 class="text-center">
                <s:message code="key_generico_cambiarPass"/>

            </h2>
      </div>
      <div class="modal-body">
          <div id="divAlertaCambioPassword"></div>
          <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-center">
                            <p><s:message code="key_usuario_cambia_password"/></p>

                            <div class="panel-body">
                                <fieldset>
                                    <form id="formCambio">
                                        <div class="form-group has-feedback">
                                            <label for="textfieldContrasenaChange" class="control-label" ><s:message code="key_placeholder_password"/>:</label>
                                            <input name="textfieldContrasenaChange" type="password" id="textfieldContrasenaChange" class="form-control" value="">
                                            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                                        </div> 
                                        <div class="form-group has-feedback">
                                            <label for="textfieldContrasena2Change" class="control-label" ><s:message code="key_placeholder_passwordconfirm"/>:</label>
                                            <input name="textfieldContrasena2Change" type="password" id="textfieldContrasena2Change" class="form-control" value="">     
                                            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                                        </div>
                                         <div class="form-group">
                                            <div class="selectorUsuario">
                                                <input id="buttonGuardarPassCambio" name="buttonGuardarPassCambio"
                                                   class="btn btn-lg  btn-block btn-warning" 
                                                   value="<s:message code="key_generico_guardar"/>" type="submit">  
                                            </div>
                                        </div>
                                    </form>
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
                    
<br>





<br>
<div id="contForm" >
                        <form:form id="formulario" name="formulario"  method="post" action="">
                            
                        </form:form>
                    </div> 


