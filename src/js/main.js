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
    },

  });
  var prev = $('.swiper-button-prev');
  var next = $('.swiper-button-next');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() +10);
  bullets.css('left', prev.width() + 10);
});

// КНОПКА 
// НАВЕРХ
// jQuery(document).ready(function() {
  
//   var btn = $('.buttonup');

//   $(window).scroll(function() {
//     if ($(window).scrollTop() > 300) {
//       btn.addClass('show');
//     } else {
//       btn.removeClass('show');
//     }
//   });

//   btn.on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({scrollTop:0}, '300');
//   });

// });

// конец кнопки наверх

// реализация НАВЕРХ, с исчезновением на главном экране
// $(function() {
 
//   $(window).scroll(function() {
   
//   if($(this).scrollTop() != 0) {
   
//   $('#toTop').fadeIn();
   
//   } else {
   
//   $('#toTop').fadeOut();
   
//   }
   
//   });
   
//   $('#toTop').click(function() {
   
//   $('body,html').animate({scrollTop:0},800);
//   //  return false;
//   });
   
//   });

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