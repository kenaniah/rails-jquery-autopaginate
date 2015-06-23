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
	page = $("MAIN").data('current-page');
	console.log("Current page is: " + page)

	//Handle the click of the more button
	$("#more-button").click(function(){

		$(this).hide()
		$("#loading-text").removeClass("hidden")

	})

})
