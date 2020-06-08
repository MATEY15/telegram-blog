//= jquery.min.js
//= jquery.magnific-popup.min.js
//= jquery.nanoscroller.min.js

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
openMobileSidebar();