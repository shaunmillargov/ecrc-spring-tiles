$(document).ready( function() {
	initIEAreaWidths();
});

// Because the CSS command of "width: auto" is not supported by IE7, we need to hide livesite areas which have no content in them
function initIEAreaWidths() {
	if ( $.browser.msie ) {
		// List of CSS selectors which need to have their width set to "auto"
		var collapsibleAreaIDs = ["#area-contentleft", 
		                        "#area-contentright"//, 
		                        /*"#col-contentmain",
		                        "#col-contentmain .ls-col-body",
		                        "#col-contentmain .ls-fxr",
		                        "#area-contentmain",
		                        "#area-contentfoot",
		                        "#area-contentmain .ls-area-body",
		                        "#area-contentfoot .ls-area-body"*/
		]

		// Go through the list, and if the area has no content, set it's width to zero
		for (index in collapsibleAreaIDs) {
			var strAreaID = collapsibleAreaIDs[index];
			var area = $(strAreaID);
	        var contents = $(area).text();
	        if (contents == null || contents == "")
	        	$(area).attr("style", "width: 0px !important;");
		}
        
	}
}

/* Generic search behaviour */
$(document).ready(function() {
	/* add placeholder text to search field on page load */
	if($("#searchBox").val() == '')						  
		$("#searchBox").addClass("placeholder");
			
	/* focusout - remove placeholder */
	$("#searchBox").focusin(function() {
		$(this).removeClass("placeholder");
	});

	/* focusout - add placeholder only if field is empty */	
	$("#searchBox").focusout(function() {
		if($(this).val() == '')						  
			$(this).addClass("placeholder");
	});

	/* search button click handler */
	$(".SubmitLinkButton").click(function() {
		/* check for empty search */
		if($("#searchBox").val() == '')
			alert("Please enter one or more search terms and click the 'Search' button to view the results.");
		else
			$("#suggestion_form").submit();	
	}); 
	
	/* search box, typeahead */
	
	window.displayBoxIndex = -1;
	
	$("input#searchBox").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		var keyVal = document.getElementById('searchBox');
		keyVal.value = this.value;
		var str = keyVal.value;
		
	$(".SubmitLinkButton").click(function() {
		
		var path = 'http://www2.gov.bc.ca/gov/search/results.page?';
		var url = path + "config=gov&keywords=" + str;
		window.open(url,'_self',false);	
		
	});
	
		switch (code){
			case 40: 
				Navigate(1); 
				break;
			case 38:
				Navigate(-1);
				break;
			case 13:  // "enter".
				var path = 'http://www2.gov.bc.ca/gov/search/results.page?';
				if($('.kl_item_selected').length == 0){
					//$('form#search').submit();
					var url = path + "config=gov&keywords=" + str;
					window.open(url,'_self',false);						
				}else{
					var str = $('.kl_item_selected').find('a.a_item').attr('title');
					var url = path + "config=gov&keywords=" + str;
					window.open(url,'_self',false);		
				}
				
				break;
			case 27:  // "escape".
				$('ul#keyword_list').html('');
				$('#typeAhead').css('border', 'none').css('background-color','#394559');
				break;
			case 37:  // "key left".
			case 39:  // "key right".
			case 9:  // "tab".
			case 16:  // "shift-tab".
			    break;
			default:				
				$('#typeAhead').css('border', 'none').css('border-top','none').css('background-color','#394559');
				$('.kl_item').hide();

				if(str != ''){
					delay(function(){
						callJsonSS(str);
					}, 500);
				}
			    break;
		}				
	  
	});
				   
	var Navigate = function(diff) {
		displayBoxIndex += diff;
		var oBoxCollection = $(".kl_item")
		if (displayBoxIndex >= oBoxCollection.length)
			 displayBoxIndex = 0;
		if (displayBoxIndex < 0)
			 displayBoxIndex = oBoxCollection.length - 1;
		var cssClass = "kl_item_selected";
		oBoxCollection.removeClass(cssClass).eq(displayBoxIndex).addClass(cssClass);
	}	
	
	var delay = (function(){
	  var timer = 0;
	  return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	  };
	})();
});

/* call json */
function callJsonSS(query){	
	var path = 'http://www2.gov.bc.ca/gov/search/results.page?';
	$('#keyword_list').html('');
	
	query = query.toLowerCase();
	query = query.replace(/ /g, "%20").replace(/-/g, "%2d"); //replace white space to '%20', replace '-' to '%2d'
	
	query = "http://search.gov.bc.ca/suggest?q=" + query + "&client=default_frontend&site=default_collection&keymatch=yes&access=p&format=rich";	
	query = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="' + query + '"') + '&format=json&callback=?';
	
	$.getJSON(query,function (json) {

		//var path = window.location.pathname.split( '?' );
		var list = ""; 
		
		if(json.query.results.json.results.name != null){
			var nameVal = json.query.results.json.results.name; 
			list += "<li class='kl_item'><a class='a_item' href='" + path + "config=gov&keywords=" + nameVal + "'>" + nameVal + "</a></li>"
			$('#keyword_list').append(list);
			$('#typeAhead').css('border', '1px solid #aaa').css('background-color','white');
		}else{

			$.each(json.query.results.json.results, function() {
				var nameVal = this.name;
				var altTag = this.name;
				var len = nameVal.length;											 
				if(len >= 35){
					nameVal = nameVal.substring(0, 35) + "...";
				}
				list += "<li class='kl_item'><a class='a_item' href='" + path + "config=gov&keywords=" + altTag + "' alt='" + altTag + "' title='" + altTag+ "'>" + nameVal + "</a></li>";
			
			});
		
			$('#keyword_list').append(list);
			$('#typeAhead').css('border', '1px solid #aaa').css('background-color','white');
		}
		
	});
}

/* Replace rel="external" with target="_blank" for for external links 
$(document).ready(function () {
	$('a[rel="external"]').each(function(i) {
	    $(this).attr('target', '_blank');
    });
});
*/

/* Temporary workaround to attach stylesheet dynamically */
$(document).ready(function() {
	$("<link>")
	  .appendTo($('head'))
	  .attr({type : 'text/css', rel : 'stylesheet'})
	  .attr('href', ctx + '/assets/css/theme1/print.css');
});

/* CS - custom style workarounds for specific pages */
$(document).ready(function() {
	
	/* hide Families & Residents > Seniors page heading http://www2.gov.bc.ca/gov/theme.page?id=E2F17E8BD56D50D8D4BAA2892C68960F */	
	if(window.location.href.indexOf("id=E2F17E8BD56D50D8D4BAA2892C68960F") != -1)					   
		$("#theme_body h1.heading").remove();		
	
	/* hide Government > Open Government > UX Toolbox page heading http://www2.gov.bc.ca/gov/topic.page?id=157D6555F8744850A439544F41727402 */
	if(window.location.href.indexOf("id=157D6555F8744850A439544F41727402") != -1)					   
		$(".topic_body h1.heading").remove();

	// Hide topics from navigation in PROD only
	if(window.location.href.indexOf("www2.gov.bc.ca/gov/") != -1) {

		if($('.subtheme_navigation .subthemes menu li.current a').length) {
			// 2012-10-01
			// hide Families & Residents > Taxes & Rebates > Audits nav item
			// hide Families & Residents > Taxes & Rebates > Appeals nav item
			if($('.subtheme_navigation .subthemes menu li.current a').attr('href').indexOf('4DE87E7EE0859251309F8142B9BD4824') != -1) {
				$(".subtheme_navigation .topics menu li").eq(3).hide();	
				$(".subtheme_navigation .topics menu li").eq(4).hide();	
			}	
			// 2013-04-04 - CS
			// hide Education > Administration > Legislation & Policy nav item
			//if($('.subtheme_navigation .subthemes menu li.current a').attr('href').indexOf('80B26AE3A0ED92412A3341AD77C50C9F') != -1) {
			//	$(".subtheme_navigation .topics menu li").eq(3).hide();	
			//}	
			// 2013-04-04 - CS
			// hide Government > Open Government > Strategic Partnerships nav item
			if($('.subtheme_navigation .subthemes menu li.current a').attr('href').indexOf('12784E4B87551818643212879D592866') != -1) {
				$(".subtheme_navigation .topics menu li").eq(3).hide();	
			}
		}
	}
});


