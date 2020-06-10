//= jquery.min.js
//= jquery.magnific-popup.min.js
//= jquery.nanoscroller.min.js


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

var mobilePosts = function(){

	var links = document.querySelectorAll('.category-items'),
			linksClose = document.querySelectorAll('.close-content'),
			stopScroll = document.querySelector('.stopss');

	linksClose.forEach( function(element, index) {
		element.addEventListener('click', function(e){
			this.parentElement.parentElement.classList.remove('open');
			this.parentElement.parentElement.previousElementSibling.classList.remove('is-active');
		});
	});
	for(var i = 0; i<links.length; i++){
			links[i].addEventListener('click', function(e){
				e.preventDefault();
				var slice = this;

				// function handleButtonClick() {
				// 	slice.scrollIntoView({block: "start", behavior: "smooth"});
				// }
				// setTimeout(handleButtonClick, 400);

				if(!this.classList.contains('is-active')) {
					links.forEach( function(element, index) {
						element.classList.remove('is-active');
						element.nextElementSibling.classList.remove('open');
					});
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

var searchShow = function(){
	var searchClick = document.querySelector('.search'),
			backSearch = document.querySelector('.back-search'),
			mobileSearch = document.querySelector('.mobile-search');

	backSearch.addEventListener('click', function(e){
		e.preventDefault();
		mobileSearch.classList.remove('is-active');
	});
	searchClick.addEventListener('click', function(e){
		e.preventDefault();
		mobileSearch.classList.add('is-active');
	});
};
searchShow();

var mobileMenu = function(){
	var mobileMenuWrapper = document.querySelector('.mobile-menu'),
			mobileMenuClick = document.querySelector('#mobile-burger'),
			mobileMenuOverlay = document.querySelector('.overlay--mobile-menu');

	mobileMenuOverlay.addEventListener('click', function(e){
		mobileMenuWrapper.classList.remove('is-active');
		mobileMenuOverlay.classList.remove('is-active');
	});
	mobileMenuClick.addEventListener('click', function(e){
		e.preventDefault();
		mobileMenuWrapper.classList.add('is-active');
		mobileMenuOverlay.classList.add('is-active');
	});
};
mobileMenu();