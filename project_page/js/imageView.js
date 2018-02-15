$(function() {
	$(".photo").click(function() {
		// Get image link
		var link = $(this).attr("src");

		// Create image viewer
		var imageViewer = $("<div></div>");
		imageViewer.addClass("imageViewer");

		var photo = $("<img>");
		photo.addClass("photo");
		photo.attr('src', link);
		imageViewer.append(photo);

		// Add image view to DOM
		$(".container").append(imageViewer);
		imageViewer.fadeTo(500, 1);

		// Set event to close image viewer
		imageViewer.click(function() 
		{
			$(this).fadeTo(500, 0, function() 
			{
				$(this).remove();
			});
		});
	});
})
