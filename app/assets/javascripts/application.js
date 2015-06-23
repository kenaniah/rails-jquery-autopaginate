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

function update_timestamps(){
	$("TIME").timeago();
}

$(document).on('ready page:load', function(){

	//Keep track of the current page number
	current_page = $("MAIN").data('current-page');
	console.log("Current page is: ", current_page)

	//Update the timestamps with the timeago plugin
	update_timestamps();

	//Keep track of if we're loading a page
	loading = false

	//Loads the next page when called
	function load_next_page(){

		if(loading) return;

		loading = true;

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

				//Update timestamps
				update_timestamps();

				//Remove the loading state from the UI
				$("#more-button").show()
				$("#loading-text").addClass("hidden")

				loading = false;

			}
		})

		//Prevent the default action
		return false;

	}

	//Bind it to the button
	$("#more-button").click(load_next_page)

	//Perform autopaging on scroll
	$(window).scroll(function(){

		var window_top = $(window).scrollTop();
		var window_height = $(window).height();
		var document_height = $(document).height();

		//console.log(window_top, window_height, document_height)

		// Load a new page at 400% of window height
		var load_at = window_height * 4.00

		if(document_height - window_height - window_top < load_at){
			load_next_page()
		}


	})

})
