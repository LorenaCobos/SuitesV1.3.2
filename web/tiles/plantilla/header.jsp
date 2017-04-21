<%String contexto = request.getContextPath();%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="s"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!-- α Header -->
<%@ page session="true" %>
<div> 
    <!-- principio de header -->      
    <header class="main-header">
        <div class="logo-suite">
            <span class="logo-lg">
                <img src="../assets/img/zignialogo_top.png" style="max-width: 120px"/>
            </span>
        </div>    
                  
                      <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <a href="#" class="sidebar-toggle white_text" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
            
             <c:choose>
                <c:when test="${sessionScope.opcion ==1}">
                    <label id="suitetitle" class="simple-text" style="width: 220px;">Ciudad de México | Suites</label>
                </c:when>
                <c:when test="${sessionScope.opcion ==2}">
                    <label id="suitetitle" class="simple-text">Monterrey | Suites</label>
                </c:when>
                <c:otherwise>
                    <label id="suitetitle" class="simple-text">Suites</label>
                </c:otherwise>
            </c:choose>
            
                            
            <label class="label-version hidden-xs"><s:message code="key_version" /></label>
        
 
            <div class="navbar-custom-menu" >      
                <ul class="nav navbar-nav">
                    <li class="dropdown" >                
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
                            <img src="../assets/img/user.png" style="max-width: 25px"/>
                            &nbsp; ${user.nombres} <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="/Suitesv2/logout.do" name="operacion_menu"  id="lnkSalir" ><s:message code="key_label_cerrar_sesion"/></a></li>

                        </ul>   
                    </li>                     
                </ul>
                
            </div>                            
        </nav>

        
    </header>
  
                               
</div>
                           
<!-- Ω Header -->