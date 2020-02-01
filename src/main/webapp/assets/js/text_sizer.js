/*	Text Sizer script for GOV CMF site 		*/
/*	Uses js/jquery/jquerycookie.js plugin 	*/

var sizecookie = "govFontSize";				
var storedsize = $.cookie(sizecookie);

$(document).ready(function() {
	
	// check if cookie has been set and resize as needed
	if(storedsize == 'smaller')
		smallerSize();
	else if(storedsize == 'normal')
		normalSize();
	else if(storedsize == 'bigger')
		biggerSize();

	// handler for when user clicks resize icons
	$('#sizer a').click(function() {
								 
		if($(this).hasClass('smaller'))
			smallerSize();						
		else if($(this).hasClass('normal'))
			normalSize();						
		else if($(this).hasClass('bigger'))
			biggerSize();										
	});
});

function smallerSize() {
	$('#sizer a').removeClass('current');
	$('#sizer a.smaller').addClass('current');

	// resize Theme Content/Topic Content
	$('h1.sizable').css('font-size', '21px');
	$('p.sizable').css('font-size', '11px');

	$('div.sizable').css('font-size', '11px');
	$('div.sizable h1').css('font-size', '21px');
	$('div.sizable h2').css('font-size', '16px');
	$('div.sizable h3').css('font-size', '13px');

	// resize Right Column boxes
	$('.right_column .box h3').css('font-size', '14px');
	$('.right_column .box div').css('font-size', '9px');			

	// added so new text sizer works with existing DataBC and OpenInfo sites
	$('.main-content').css('font-size', '0.9em');	

	// set cookie so change in text size is persistent
	$.cookie(sizecookie, 'smaller', { path: '/' });					
}

function normalSize() {
	$('#sizer a').removeClass('current');
	$('#sizer a.normal').addClass('current');					

	// resize Theme Content/Topic Content
	$('h1.sizable').css('font-size', '');
	$('p.sizable').css('font-size', '');

	$('div.sizable').css('font-size', '');
	$('div.sizable h1').css('font-size', '');
	$('div.sizable h2').css('font-size', '');
	$('div.sizable h3').css('font-size', '');

	// resize Right Column boxes
	$('.right_column .box h3').css('font-size', '');
	$('.right_column .box div').css('font-size', '');						

	// added so new text sizer works with existing DataBC and OpenInfo sites
	$('.main-content').css('font-size', '1em');	

	// set cookie so change in text size is persistent
	$.cookie(sizecookie, 'normal', { path: '/' });						
}

function biggerSize() {					
	$('#sizer a').removeClass('current');
	$('#sizer a.bigger').addClass('current');										

	// resize Theme Content/Topic Content
	$('h1.sizable').css('font-size', '27px');
	$('p.sizable').css('font-size', '15px');

	$('div.sizable').css('font-size', '15px');
	$('div.sizable h1').css('font-size', '27px');
	$('div.sizable h2').css('font-size', '20px');
	$('div.sizable h3').css('font-size', '17px');

	// resize Right Column boxes
	$('.right_column .box h3').css('font-size', '18px');
	$('.right_column .box div').css('font-size', '13px');

	// added so new text sizer works with existing DataBC and OpenInfo sites
	$('.main-content').css('font-size', '1.2em');	

	// set cookie so change in text size is persistent
	$.cookie(sizecookie, 'bigger', { path: '/' });						
}
		
