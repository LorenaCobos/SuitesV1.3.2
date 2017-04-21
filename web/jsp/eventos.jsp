<%-- 
    Document   : eventos
    Created on : 26/05/2015, 10:36:42 PM
    Author     : Fabian Molar
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="s"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<script> 		
    validacion_();		
</script>


<div>
    <p class="label-titulo-seccion"><s:message code="key_placeholder_eventos"/></p>
</div>

<form id="formSuite" >

<input type="hidden" id="hdnsuiteBusquedaId" value="${evento.suiteBusquedaId}">
    <div class="panel-group" id="accordion">
        <div class="panel panel-default">


            <div class="panel-heading">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                    <h4 class="panel-title">
                        <span class="fa fa-filter "></span>&nbsp;
                        <s:message code="key_placeholder_filtrosbusqueda"/>
                        <i class="indicator glyphicon glyphicon-chevron-down  pull-right"></i>
                    </h4>
                </a>
            </div>

            <div id="collapse1" class="panel-collapse">
                <div class="panel-body">

                    <div class="row">
                        <div class="col-md-1 col-sm-2 col-xs-12 text-left">
                            <label for="textfield2" class="control-label" ><s:message code="key_suite_recinto"/>:</label>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <select name="selectRecinto" id="selectRecinto" class="form-control" onchange="cambiarHeader()"  >
                                <c:if test="${fn:length(recintos)>1}">
                                    <option value="0">Seleccione</option>
                                </c:if>
                                <c:forEach var="recinto" items="${recintos}">
                                    <option value="${recinto.id}" ${recinto.id == evento.recintoBusquedaId ? 'selected="selected"' : ''}>
                                        ${recinto.nombre}</option>
                                </c:forEach>
                            </select>
                        </div>
                        
                        <div class="col-md-1 col-sm-2 col-xs-12 text-left">
                            <label for="textfield2"  class="control-label"><s:message code="key_placeholder_suite"/>:</label>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <select name="selectSuite" id="selectSuite" class="form-control">
                                <c:if test="${fn:length(suites)==0}">
                                    <option value="0">Seleccione</option>
                                </c:if>
                                <c:forEach var="suite" items="${suites}">
                                    <option value="${suite.id}" ${suite.id == evento.suiteBusquedaId ? 'selected="selected"' : ''}>
                                        ${suite.nombre}&nbsp;${suite.clave}</option>
                                </c:forEach>
                            </select>
                        </div> 
                       

                    </div>
                    <div class="row">
                        <div class="col-md-1 col-sm-2 col-xs-12 text-left">
                            <label for="textfield2" class="control-label" ><s:message code="key_placeholder_evento"/>:</label>
                        </div>
                        <div class="col-md-4 col-sm-10 col-xs-12">
                            <input type="text" name="eventoBusqueda" id="eventoBusqueda" 
                                   value="${evento.eventoBusqueda}" class="form-control">
                        </div>                        

                        <div class="col-md-1 col-sm-2 col-xs-12 text-left">
                            <label for="textfield2"  class="control-label"><s:message code="key_placeholder_fecha"/>:</label>
                        </div>
                        <div class="col-md-3 col-sm-10 col-xs-12">

                            <div class="row">

                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <input type="text" readonly="true" placeholder="<s:message code="key_placeholder_inicio"/>"
                                           name="fechaIniBusqueda" id="fechaIniBusqueda" class="form-control" 
                                           style="background-color:white;" value="${evento.fechaIniBusqueda}">
                                </div>

                                <div class="col-xs-6 col-sm-6 col-md-6">
                                    <input type="text" readonly="true" placeholder="<s:message code="key_placeholder_fin"/>" 
                                           name="fechaFinBusqueda" id="fechaFinBusqueda" class="form-control" 
                                           style="background-color:white;" value="${evento.fechaFinBusqueda}">
                                </div>
                            </div>
                        </div>
                                
                        <div class="col-sm-3 col-xs-2"></div>
                        <div class="col-md-3 col-sm-6 col-xs-8 text-center">                           
                            
                            <div class="col-md-6 col-sm-6 col-xs-6 text-center " style="padding-left: 0px;" >
                                <button type="button" name="button" id="buttonBuscar" value="<s:message code="key_generico_buscar"/>" 
                                        class="button" ><s:message code="key_generico_buscar"/></button>
                            </div>  

                            <div class="col-md-6 col-sm-6 col-xs-6 text-center" style="padding-left: 10px;">
                                <button type="button" name="button" id="buttonLimpiar" value="<s:message code="key_generico_limpiar"/>" 
                                        class="button"> <s:message code="key_generico_limpiar"/></button>
                            </div>
                        </div>
                        <div class="col-sm-3 col-xs-2"></div>    
                    </div>        

                </div>
            </div>
        </div>
    </div> 
    <div id="divEventos" class="row">

    </div>
                        
    
    <div id="eventosWidget">
    </div>
        
                   
                        
    <div class="CSSTableResults" style="display:none">
        <table class="table-condensed table-responsive table-hover">
            <thead>
                <tr>
                    <th class="hidden-xs" >
                        <s:message code="key_eventos_imagen" />
                    </th>
                    <th>
                        <s:message code="key_eventos_evento" />
                    </th>
                    <th>
                        <s:message code="key_eventos_fechas" />
                    </th>
                    <th>
                        <s:message code="key_placeholder_boletos" />
                    </th>
                    <th>
                        <s:message code="key_eventos_invitaciones" />
                    </th>

                </tr>
            </thead>
            <tbody id="contTabla">

            </tbody>
        </table>
    </div>


</form>
<div id="contForm">


    <form:form id="formulario" name="formulario"  method="post" action="">

    </form:form>
</div>  

<script type="text/javascript" src="<%= request.getContextPath()%>/js/bootstrap-toolkit.min.js"></script>


<script>
    (function($, document, window, viewport) {
        var colapsa = function() {

            os = getMobileOperatingSystem();

            if (os.match("celular"))
                $('#collapse1').removeClass('in');
            else
                $('#collapse1').collapse('show');
        };

        $(document).ready(function() {
            colapsa();
        });

    }(jQuery, document, window, ResponsiveBootstrapToolkit));
</script>
