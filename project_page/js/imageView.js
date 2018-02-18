$(function() {
	$(".photo").click(function() {
		// Get image link
		var link = $(this).attr("src");

		// Create image viewer
		var imageViewer = $("<div></div>");
		imageViewer.addClass("imageViewer");

		var photo = $("<img>");
		photo.addClass("photo");
		// photo.addClass("rounded mx-auto d-block");
		photo.attr('src', link);
		imageViewer.append(photo);

		// Add image view to DOM
		// $(this).parents(".app-desc").append(imageViewer);
		// $(this).parents().eq(3).append(imageViewer);
		//$("#berk").append(imageViewer);
		// $(this).append(imageViewer);
		// $(".app-desc").eq(2).append(imageViewer);
		$(".main-content").append(imageViewer);
		// $(".container").append(imageViewer);
		// $("#overlay").append(imageViewer);
		// $("#overlay").css("display", "block");
		imageViewer.fadeTo(500, 1);

		// Set event to close image viewer
		imageViewer.click(function() 
		{
			$(this).fadeTo(500, 0, function() 
			{
				$(this).remove();
				// $("#overlay").css("display", "none");
			});
		});
	});
})

function scaleImg(imageToScale) {
	// Get body dimensions
	bodyWidth = $(document.body).width();
	bodyHeight = $(document.body).height();

	// Debug
	console.log("Body Width: " + bodyWidth);
	console.log("Body Height: " + bodyHeight);

	// Scale image relative to width & height of document
	$(imageToScale).css(
			{
				"width" : bodyWidth /2,
				"height" : bodyHeight
			});
}       

