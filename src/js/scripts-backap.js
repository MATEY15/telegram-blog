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


// var mobilePosts2 = function(){
// 	var links = document.querySelectorAll('.category-items'),
// 			wrapperList = document.querySelector('.sidebar-category .nano-content'),
// 			linksClose = document.querySelectorAll('.close-content');
// };

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

var scrollContent = function(){
	var heightWindow = document.querySelector('.sidebar-category').scrollHeight,
			heightOffsetElem = document.querySelectorAll('.category-items');
	console.log(heightWindow)
};
// scrollContent();

// $(".category-items").each(function(){
// 	$(this).click(function() {
// 		$('.left-sidebar .sidebar-scroll.nano').animate({
// 			scrollTop: $(".stopss").offset().top},
// 			'slow');
// 	});
// });


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


// var menuHorozontall = function(){
//   var countList = 0
//   $('.mobile-header--bottom').css({'overflow-x':'auto', 'overflow-y':'hidden'});
//   $('.list-folder li').each(function(index){
//     countList += ($(this).outerWidth()*1+24);
//   });
//   $('.list-folder').css({'width':countList+"px"});
// };
// $(window).on('resize', function(){
//   var win = $(this);
//   if (win.width() <= 1023) {
//     menuHorozontall();
//   }
// });
// setTimeout(function() { 
//   menuHorozontall();
// }, 1000);