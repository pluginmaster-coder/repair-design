// document.addEventListener("DOMContentLoaded", function ev(event) { 
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector ('.modal__close');
//  
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//     console.log('Клик по кнопке!');
//   };
//   document.addEventListener('click', e=> {
//     if (e.target == modal)
//     modal.classList.remove('modal--visible');   
//   });
//    document.onkeydown = function(evt) {
//     evt = evt || window.event;
//     if (evt.keyCode == 27) {
//       modal.classList.remove('modal--visible');
//     }
// };
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });
  
//   closeBtn.addEventListener('click', switchModal);

// }); 

// МОДАЛЬНОЕ ОКНО НА JQUERY
$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });

  	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal').toggleClass('modal--visible');
		}
	});
	
	// Клик по фону, но не по окну.
	$('.modal').click(function(e) {
		if ($(e.target).closest('.modal__dialog').length == 0) {
			$(this).toggleClass('modal--visible');			
		}
	});
// СЛАЙДЕР НА JQUERY
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      // oneEl: '.swiper-button-1',
      // twoEl: '.swiper-button-2',
      // threeEl: '.swiper-button-3',
      // fourEl: '.swiper-button-4',
      // fiveEl: '.swiper-button-5',
      // sixEl: '.swiper-button-6',
    },
    

  });
  var prev = $('.swiper-button-prev');
  var next = $('.swiper-button-next');
  var bullets = $('.swiper-pagination');
  // var one = $('.swiper-button-1');
  // var two = $('.swiper-button-2');
  // var three = $('.swiper-button-3');
  // var four = $('.swiper-button-4');
  // var five = $('.swiper-button-5');
  // var six = $('.swiper-button-6');
  // var fraction = $('.swiper-pagination_fraction');

  next.css('left', prev.width() + 10 + bullets.width() +10);
  bullets.css('left', prev.width() + 10);



});

// jQuery(function($) {
 
//   $('.swiper-object .swiper-container').each(function(index, value) {
 
//     var mySwiper = new Swiper(value, {
//       autoplay: {
//         delay: 5000,
//       },
      
//       navigation: {
//         // nextEl: value.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling,
//         // nextEl: value.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling,
//         // nextEl: value.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling,
//         // twoEl: value.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling,
//         threeEl: value.nextElementSibling.nextElementSibling.nextElementSibling,
//         twoEl: value.nextElementSibling.nextElementSibling,
//         oneEl: value.nextElementSibling,
//       },
//       pagination: {
//         el: value.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling,
//         clickable: true,
//         renderBullet: function (index, className) {
//           return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//       },
//       slidesPerView: 'auto',
//     });
 
//   });
// });



// КНОПКА 
// НАВЕРХ
(function(jq) {
  jq.autoScroll = function(ops) {
    ops = ops || {};
    ops.styleClass = ops.styleClass || 'buttonup';
    var t = jq('<div class="'+ops.styleClass+'"></div>'),
   d = jq(ops.target || document);
   jq(ops.container || 'body').append(t);
 
  t.css({
    opacity: 0,
    position: 'absolute',
    top: 0,
    right: 0
 }).on('click', function() {
	 jq('html,body').animate({
	    scrollTop: 0
   }, ops.scrollDuration || 1000);
 });
 
  d.scroll(function() {
    var sv = d.scrollTop();
    if (sv < 300) {
      t.clearQueue().fadeOut(ops.hideDuration || 200);
	 return;
  }
 
  t.css('display', '').clearQueue().animate({
   top: sv,
   opacity: 0.8
   }, ops.showDuration || 500);
  });
  };
})(jQuery);
 
$(document).ready(function(){
 $.autoScroll({
 scrollDuration: 600, 
 showDuration: 600, 
 hideDuration: 300
 });
});
