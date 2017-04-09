<%-- 
    Document   : logout
    Created on : 16-jun-2015, 15:38:45
    Author     : Fabian molar
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="s"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div style="text-align: center"> 

    <div class="logout-box">
        <div class="login-box-body">
        <div class="panel panel-default">
                    <div class="panel-body">

                    <div class="col-xs-12 col-sm-12 col-md-12 text-center">

                        <i class="fa fa-cog fa-spin fa-3x fa-fw" style="color:#3383b1"></i>
                        <label for="textfield2" class="control-label" style="font-size: 25px" >
                            <s:message code="key_label_cerrando_sesion"/>...</label>
                    </div>
                    </div>

                </div>
        </div>
    </div>
 </div>


<!--modal-->
<div id="logoutModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="vertical-alignment-helper">
    <div class="modal-dialog vertical-align-center">
        <div class="modal-content">
    
            <div class="modal-body">
                <div class="panel panel-default">
                    <div class="panel-body">

                    <div class="col-xs-12 col-sm-12 col-md-12 text-center">

                         <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
                        <label for="textfield2" class="control-label" style="font-size: 30px" >
                            <s:message code="key_label_cerrando_sesion"/>...</label>
                    </div>
                    </div>

                </div>
            </div>
   
        </div>
    </div>
    </div>
</div>
                                    
<div id="contForm"/>