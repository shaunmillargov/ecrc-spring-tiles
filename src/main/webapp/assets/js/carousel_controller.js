/*=============================================================================
wbc_carousel_controller.js
	-purpose: to control the main carousel item on the Welcome BC homepage
	-imports: jQuery
	-assumptions: carousel structure must be adheared to
	
	created: 2011/11/22	-R.L.
=============================================================================*/

var mutex=0;

$(document).ready(function(){	
						   
function run_carousel(navigation_element, slide_area, left_content_tab){
	if($(navigation_element).hasClass('active')){
		return false;
	}
	else{
		//Remove Current Active Elements
		$('.left_content_tab.active').animate({ left: '-=380px'}, 750);
		$('.slide_area.active').fadeOut(500);
		$('.active').removeClass('active');
		
		//Tag this element as Active
		$(navigation_element).addClass('active');
		$(navigation_element).parent().addClass('active');
		$(left_content_tab).addClass('active');
		$(slide_area).addClass('active');
		
		//Run Animation
		$(slide_area).delay(600).fadeIn(500);
		$(left_content_tab).delay(850).animate({left: '+=380px'}, 850);	
		
	}
}
function resetMutex(){
	return setTimeout(function(){mutex=0;},1500);	
}
function startRotation() {
	var i = 2;
	return setInterval(function() {				
		run_carousel("#navigation_element_"+i+"", "#slide_area_"+i+"", "#left_content_tab_"+i+"");
		i++;
		if (i==5)
			i=1;
	}, 8000);	
}
			
function main(){
	//Initialize
	var timer = '';
	$('#navigation_element_1').addClass('active');
	$('#navigation_element_1').parent().addClass('active');
	$('#slide_area_1').addClass('active');
	$('#slide_area_1').fadeIn(600);
	$('#left_content_tab_1').addClass('active');
	$('#left_content_tab_1').animate({left: '+=380px'}, 850);
	//Rotating
	
	timer = startRotation();
	
	if(window.addEventListener) {
		window.addEventListener('blur', function() {
			clearInterval(timer);
		},false);			
	}
	
	//OnClick
	$('#navigation_element_1').click(function(){
		if (mutex==1)
			return false;
		mutex=1;
		clearInterval(timer);	
		run_carousel("#navigation_element_1", "#slide_area_1", "#left_content_tab_1");
		resetMutex();
	});
	$('#navigation_element_2').click(function(){	
		if (mutex==1)
			return false;
		mutex=1;
		clearInterval(timer);	
		run_carousel("#navigation_element_2", "#slide_area_2", "#left_content_tab_2");
		resetMutex();
	});
	$('#navigation_element_3').click(function(){
		if (mutex==1)
			return false;
		mutex=1;
		clearInterval(timer);										  
		run_carousel("#navigation_element_3", "#slide_area_3", "#left_content_tab_3");
		resetMutex();
	});
	$('#navigation_element_4').click(function(){
		if (mutex==1)
			return false;
		mutex=1;
		clearInterval(timer);										  
		run_carousel("#navigation_element_4", "#slide_area_4", "#left_content_tab_4");
		resetMutex();
	});	
}


main();
});