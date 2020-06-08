//= jquery.min.js
//= jquery.magnific-popup.min.js
//= jquery.nanoscroller.min.js
//= resize-element.js

// window.onload = function(){
//   $("#overlayer").delay(1000).fadeOut("slow");
//   setTimeout(function() {
//   }, 800);
// }

$(".nano").nanoScroller();

var sidebarScroll = document.querySelector('.left-sidebar .sidebar-scroll');
var scrollAddClass = document.querySelector('.left-sidebar .nano .nano-pane');
var timeOutEvent;
sidebarScroll.addEventListener("mouseover", function() {
	scrollAddClass.classList.add('is-hover');
	timeOutEvent = setTimeout(
		function(){
			scrollAddClass.classList.remove('is-hover')
		}
		, 1000)
});
sidebarScroll.addEventListener("mouseout", function() {
	scrollAddClass.classList.remove('is-hover');
	clearTimeout(timeOutEvent);
});

/* AutoHeightFooter */

function heightFooter(){
  var heightFoot = $('.footer').outerHeight();
  $('body').css({ 'padding-bottom': heightFoot});
}
heightFooter()
$( window ).resize(function() {
  heightFooter()
});

/* AutoHeightFooter End */

/* Popup Window */

$(".popup").magnificPopup({
  type: 'inline',
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});

/* Popup Window End */


var openMobileSidebar = function(){
	var burger = document.querySelector('#mobile-burger'),
			sidebar = document.querySelector('.left-sidebar'),
			overlayMain = document.querySelector('.overlay-main');
	overlayMain.addEventListener('click', function(e){
		sidebar.classList.remove('is-open');
		this.classList.remove('is-active');
		overlayMain.classList.remove('is-active');
	});
	burger.addEventListener('click', function(e){
		e.preventDefault();
		if(sidebar.classList.contains('is-open')) {
			sidebar.classList.remove('is-open');
			this.classList.remove('is-active');
			overlayMain.classList.remove('is-active');
		} else {
			sidebar.classList.add('is-open');
			this.classList.add('is-active');
			overlayMain.classList.add('is-active');
		}
	});
};
// openMobileSidebar();

var mobilePosts = function(){

	var links = document.querySelectorAll('.category-items');
	var linksClose = document.querySelectorAll('.close-content');

	linksClose.forEach( function(element, index) {
		element.addEventListener('click', function(e){
			this.parentElement.parentElement.classList.remove('open');
			this.parentElement.parentElement.previousElementSibling.remove('is-active');
		});
	});

	for(var i = 0; i<links.length; i++){

			links[i].addEventListener('click', function(e){
				e.preventDefault();

				if(!this.classList.contains('is-active')) {
					// links.forEach( function(element, index) {
					// 	element.classList.remove('is-active');
					// 	element.nextElementSibling.classList.remove('open');
					// });
					this.classList.add('is-active');
					this.nextElementSibling.classList.add('open');
				} else {
					this.classList.remove('is-active');
					this.nextElementSibling.classList.remove('open');
				}

			});
	}
	
};
mobilePosts();

var mobileCloneContent = function(){

	window.addEventListener('resize', function(e) {
		var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if(viewportWidth < 992) {
			console.log('< 992')
		} else {
			console.log('> 992')
		}
	});
	
};
// mobileCloneContent();


var menuHorozontall = function(){
  var countList = 0
  $('.mobile-header--bottom').css({'overflow-x':'auto', 'overflow-y':'hidden'});
  $('.list-folder li').each(function(index){
    countList += ($(this).outerWidth()*1+24);
  });
  $('.list-folder').css({'width':countList+"px"});
};
$(window).on('resize', function(){
  var win = $(this);
  if (win.width() <= 1023) {
    menuHorozontall();
  }
});
setTimeout(function() { 
  menuHorozontall();
}, 1000);