
$(function() {
	$( "#cancelDialog" ).dialog({
		autoOpen: false,
		modal: true,
		resizable: false,
		width: 550,
		buttons: {
			Continue: function() {
				$( this ).dialog( "close" );
			},
			Cancel: function() {
				$( this ).dialog( "close" );
				document.cancelForm.submit();
			}
		}
	});
	$( "#cancelButton" ).click(function() {
		$( "#cancelDialog" ).dialog( "open" );
	});
});

$(function() {
	$( "#simpleDialog" ).dialog({
		autoOpen: true,
		modal: true,
		resizable: false,
		width: 550,
		buttons: {
			Ok: function() {
				$( this ).dialog( "close" );
			}
		}
	});
});

$( document ).ready(function() {
    highlightFields(); 
});
 
function replacewebanalysisMataname(si_n_Value, si_p_Value) {
	
	//alert('calling update meta');
	
 	// First, get the array of meta-tag elements	
    var metatags = document.getElementsByTagName("meta");

    // Iterate through the array, updating just the relevant WT tags. 
    for (cnt = 0; cnt < metatags.length; cnt++)
    {
        if (metatags[cnt].getAttribute("name") == "WT.si_n") {
           	 metatags[cnt].setAttribute("content",si_n_Value );        	 
		}
		if (metatags[cnt].getAttribute("name") == "WT.si_p") {
           	 metatags[cnt].setAttribute("content",si_p_Value );        	 
		}
     }
}


function pageScripts() {
	//alert('onload scripts called'); 
	$( "#simpleDialog" ).dialog( "open" );
}

var highlightArray = new Array();
function highlightFields() {
	if (highlightArray.length > 0) {
		for (var i=0; i<highlightArray.length; i++) { 
			$('#' + highlightArray[i]).addClass('bgYellow'); 
		}
	}
}