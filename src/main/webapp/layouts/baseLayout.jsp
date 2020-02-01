<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  

<html>
    <head>
    	<meta http-equiv="x-ua-compatible" content="IE=edge" >
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
		<title><tiles:insertAttribute name="page_heading" ignore="true" /></title>
        
        <!--  provides page context for js if required -->
        <script>var ctx = "${pageContext.request.contextPath}"</script> 
       
        <!-- NAMESPACE DECLARATIONS -->
	    <link href="http://purl.org/dc/terms/" rel="schema.DCTERMS">
	    <link href="http://www.gov.bc.ca/metadata/mbc/terms/" rel="schema.MBCTERMS">
	    
	    <link href="${pageContext.request.contextPath}/assets/css/rebrand/styles.css?v=<%=System.currentTimeMillis()%>" rel="stylesheet">
	    <link href="${pageContext.request.contextPath}/assets/css/theme1/cmf-main.css" rel="stylesheet">
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/reset.css" rel="stylesheet">
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/layout.css" rel="stylesheet">
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/main.css" rel="stylesheet">
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/vcrc.css" rel="stylesheet">
	    
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/cmf_top_site_navigation.css" rel="stylesheet">
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/cmf_theme_navigation.css" rel="stylesheet">
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/cmf_topic_navigation.css" rel="stylesheet">
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/cmf_breadcrumbs.css" rel="stylesheet">
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/cmf_page_tools.css" rel="stylesheet">
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/cmf_right_column.css" rel="stylesheet">
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/cmf_theme_body.css" rel="stylesheet">
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/cmf_topic_body.css" rel="stylesheet">
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/cmf_static_content.css" rel="stylesheet">
	    
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/jquery-ui-1.10.3.custom.min.css" rel="stylesheet">
	    <link type="text/css" href="${pageContext.request.contextPath}/assets/css/theme1/print.css?v=<%=System.currentTimeMillis()%>" rel="stylesheet" media="print">
	    
	    <script type="text/javascript" src="${pageContext.request.contextPath}/assets/js/jquery-1.js"></script>
	    <script type="text/javascript" src="${pageContext.request.contextPath}/assets/js/misc.js"></script>
	    <script type="text/javascript" src="${pageContext.request.contextPath}/assets/js/jquery.js"></script>
            <script type="text/javascript" src="${pageContext.request.contextPath}/assets/js/jquery-ui-1.10.3.custom.min.js"></script>
	    <script type="text/javascript" src="${pageContext.request.contextPath}/assets/js/navigation_global.js"></script>
	    
	    <script type="text/javascript" src="${pageContext.request.contextPath}/assets/js/common.js"></script>
	    
	    
	    <!-- MANDATORY METADATA BEGINS  -->
	    <%-- web trends --%>
	    <meta name="WT.si_n" content="${ si_n }">
	    <meta name="WT.si_p" content="${ si_p }">
	    <meta name="DCSext.Scenario_result" content="${ scenario_result }">
	    <!-- MANDATORY METADATA ENDS  -->
	    
    </head>  
	
	<body class="gov_site topic_page" onload="<tiles:insertAttribute name="body_onload" />" >
		
        <div xmlns="" class="ls-canvas" id="ls-canvas">

         <!-- ***** Top Nav Theme Start ***** //-->
        <tiles:insertAttribute name="header" />
        
          <!-- ***** Main Content Area (including left menu) Start ***** //-->
         <!-- ***** OPTION 1 - with content ***** //-->

         <div class="ls-row" id="row-content">
            <div class="ls-fxr" id="ls-gen10-ls-fxr">
        
                    <tiles:insertAttribute name="menu" />
                    <tiles:insertAttribute name="right"/> 
                    
                    <%-- start cancel form div (used with cancel modal dialog below) --%>
					
					<div id="cancelFormDiv">
						<form:form name="cancelForm" action="${ currentPage }Cancel.htm" method="post">	
						</form:form>
					</div>
                    
                    <%-- end cancel form div --%>
                    
                   
                    <!-- ***** Main Content Start ***** //-->
	               <div class="ls-area" id="area-contentmain">
	                  <div class="ls-area-body" id="ls-gen13-ls-area-body">
	                     <div class="ls-cmp-wrap ls-1st" id="w1328897957819">
	                        <div class="iw_component" id="1328897957819">
	                           <div xmlns:page="ca.bc.gov.cmf.cmslite.pageContent-1.1" class="topic_body" id="wrapper">
	                           		<h1 class="heading sizable"><tiles:insertAttribute name="page_heading" ignore="true" /></h1>           
                    				<tiles:insertAttribute name="body" />      				
                    			</div>
                        	</div>
                     	</div>
                  	</div>
               	</div>
               <div class="ls-row-clr"></div>
            </div>
         </div>
         
         <div id="cancelDialog" title="Online Submission">
			<p>Select Continue to return to the online submission process.</p>
			<p>Select Cancel to end the current submission process. Any information entered will not be saved.</p>
		 </div>				
                    				
         <tiles:insertAttribute name="footer" />
         
	</div>
	
	<!-- Snowplow starts plowing - Standalone vA.2.10.2 -->
	<script type="text/javascript">
	;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
	 p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
	 };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
	 n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","https://sp-js.apps.gov.bc.ca/MDWay3UqFnIiGVLIo7aoMi4xMC4y.js","snowplow"));
	var collector = 'spt.apps.gov.bc.ca';
	 window.snowplow('newTracker','rt',collector, {
	  appId: "Snowplow_standalone",
	  platform: 'web',
	  post: true,
	  forceSecureTracker: true,
	  contexts: {
	   webPage: true,
	   performanceTiming: true
	  }
	 });
	 window.snowplow('enableActivityTracking', 30, 30); // Ping every 30 seconds after 30 seconds
	 window.snowplow('enableLinkClickTracking');
	 window.snowplow('trackPageView');
	 </script>
	 <!-- Snowplow stop plowing -->
		
    </body>
</html>
