//	CS - 2012-10-10  
//	jQuery Script to work in conjunction with the CMSLite Embed YouTube widget. When a CMSLite-authored page has loaded, this code iterates through each placeholder image on the current page,
//	replacing them with a div element containing the following:
//		-title (optional)
//		-iframe containing the specified YouTube video
//		-description (optional)

$(document).ready(function() {

	// Load stylesheet dynamically
	$(document).ready(function() {
		$("<link>")
		.appendTo($('head'))
		.attr({type : 'text/css', rel : 'stylesheet'})
		.attr('href', ctx + '/assets/css/theme1/embedYouTube.css');
	}); 

	$('img.djvideo_youtube').each(function(index) {

		// Create container div 
		var vcontainer = $('<div class="vcontainer"></div>');
		var style = 'width:' + $(this).attr("width") + 'px;';
		vcontainer.attr("style", style);
		
		// Add float style to container
		if($(this).attr("vfloat")) {
			var floatClass = 'vfloat' + $(this).attr("vfloat");
			vcontainer.addClass(floatClass);
		}

		// Add video title (if provided)
		if($(this).attr("vtitle")) {
			var vtitle = $('<h2>' + $(this).attr("vtitle") + '</h2>');
			vcontainer.append(vtitle);
		}		
		
		// Add iframe for video
		var video = $('<iframe></iframe>');				
		video.attr('src', constructEmbedUrl($(this).attr("vsrc")));
	  	video.attr('width', $(this).attr("width"));
	  	video.attr('height', $(this).attr("height"));
	  	video.attr('frameborder', "0");
	  	video.attr('scrolling', "no");
		vcontainer.append(video);	  	
		
		// Add video description (if provided)
		if($(this).attr("vdesc")) {
			var vdesc = ('<p class="vdesc">' + $(this).attr("vdesc") + '</p>');
			vcontainer.append(vdesc);
		}		
		
		// Replace placeholder image with new div containing title/video/description
		$(this).replaceWith(vcontainer);
	});
	
	function constructEmbedUrl(vsrc) {
		var ytId = "";

		// These are the 3 YouTube video formats we will handle
		var ytWatchUrl = "http://www.youtube.com/watch?v=";
		var ytEmbedUrl = "http://www.youtube.com/embed/";
		var ytTinyUrl = "http://youtu.be/";
		
		// Disregard any URL parameters
		var splitArray = vsrc.split("&");		
		vsrc = splitArray[0];

		// Parse out the video id
		if(vsrc.indexOf(ytWatchUrl) >= 0) {
			ytId = vsrc.substring(ytWatchUrl.length);
		}
		else if(vsrc.indexOf(ytEmbedUrl) >= 0) {
			ytId = vsrc.substring(ytEmbedUrl.length);
		}
		else if(vsrc.indexOf(ytTinyUrl) >= 0) {
			ytId = vsrc.substring(ytTinyUrl.length);
		}
		
		// Return a valid YouTube embed URL
		return "http://www.youtube.com/embed/" + ytId;
	}	
});