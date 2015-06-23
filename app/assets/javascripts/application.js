// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery2
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).on('ready page:load', function(){

	//Keep track of the current page number
	current_page = $("MAIN").data('current-page');
	console.log("Current page is: ", current_page)

	//Handle the click of the more button
	$("#more-button").click(function(){

		//Increment the page number to be requested
		current_page++
		console.log("Requesting page: ", current_page)

		//Put the UI into the loading state
		$("#more-button").hide()
		$("#loading-text").removeClass("hidden")

		//Ajax request to the same page, but updating the page number
		$.ajax("", {
		 	data: {
				//Anything in data ends up in the URL for GET requests
				page: current_page
			},
			success: function(response){

				//Display the new stories
				$(".stories").append(response);

				//Remove the loading state from the UI
				$("#more-button").show()
				$("#loading-text").addClass("hidden")

			}
		})

		//Prevent the default action
		return false;

	})

})
