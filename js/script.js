$(document).ready(function(){
	
	var menu = $('.menu');
	var menuBlock = $('.menuBlock');
	var hamburger = $('.hamburger');
	
	menu.on('click', function(){
		menuBlock.toggleClass('activMenu');
		hamburger.toggleClass('toggleHamburger');
	
	});
	
});