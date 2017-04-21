<%String contexto = request.getContextPath();%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
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
                <img src="../Suitesv2/assets/img/zignialogo_top.png" style="max-width: 120px"/>
            </span>
        </div>    
                  
           <nav class="navbar navbar-static-top">
            <a href="#" class="" data-toggle="offcanvas" role="button">
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
                        
                        <ul class="dropdown-menu">
                        </ul>   
                    </li>                     
                </ul>
                
            </div>                            
        </nav>

        
    </header>
  
                               
</div>
                           
<!-- Ω Header -->
