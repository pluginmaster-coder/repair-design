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
    // renderBullet: function (index, className) {
    //   return '<span class="' + '.swiper-slide__value--six' + '">' + (index + 1) + '</span>';
    // }
  });
  var prev = $('.swiper-button-prev');
  var next = $('.swiper-button-next');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() +10);
  bullets.css('left', prev.width() + 10);
});





























    // $('body').keypress(function(e){
    //   alert(e.which);
    //   if(e.which == 27){
    //       // Close my modal window
    //   }

 
  //initialize swiper when document ready, СЛАЙДЕР


// $(document).on("click", function(e){
//     if (e.target == modal) {
//         modal.remove('modal--visible');
//     }
  // });

  // jQuery(function($){
  //   $(document).mouseup(function (e){ // событие клика по веб-документу
  //     var div = $("modalid"); // тут указываем ID элемента
  //     if (!div.is(e.target) // если клик был не по нашему блоку
  //         && div.has(e.target).length === 0) { // и не по его дочерним элементам
  //       div.hide(); // скрываем его
  //     }
  //   });
  // });
  //   //    document.onkeydown = function(evt) {
//     evt = evt || window.event;
//     if (evt.keyCode == 27) {
//       modal.classList.remove('modal--visible');
// });
// $(function(){
// 	function showModal(id){
// 		$(document.body).addClass('is-open-modal');
// 		$(id).addClass('is-open');
// 		console.log(id);
// 	}
// 	function hideModals(){
// 		$(document.body).removeClass('is-open-modal');
// 		$('.modal').removeClass('is-open');
// 	}

// 	$(".modal-open").on('click', function(e){
// 		console.log(e);
// 		showModal('#modal1');
//  });
	
// 	$(document).on('click', function(e){
// 		if (!(
// 		($(e.target).parents('.dialog').length)
// 		||	($(e.target).hasClass('dialog'))
// 		||	($(e.target).hasClass('modal-open')))
// 		) {
// 			hideModals();
// 		}
// 	});
	

// конец модального окна на jquery

// КНОПКА 
// НАВЕРХ
jQuery(document).ready(function() {
  
  var btn = $('.buttonup');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});

// конец кнопки наверх