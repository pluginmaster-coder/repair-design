<<<<<<< HEAD
=======
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
// function getScrollTop(){
//   if(typeof pageYOffset!= 'undefined'){
//     return pageYOffset;
//   }
//   else{
//     var b = document.body;
//     var d = document.documentElement;
//     d = (d.clientHeight)? d : b;
//     return d.scrollTop;
//   }
// }     
// $(window).on("scroll", function(){
//   if(getScrollTop() >= 100){
//     $(window).off("scroll");
//     $('.control__section-title').transition({ opacity: 1 });
//   };
// });
// ________АНИМАЦИЯ JQUERY____
// var block_show = false;

// function scrollTracking(){
// 	if (block_show) {
// 		return false;
// 	}

// 	var wt = $(window).scrollTop();
// 	var wh = $(window).height();
// 	var et = $('.active').offset().top;
// 	var eh = $('.active').outerHeight();
// 	var dh = $(document).height();   
 
// 	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
// 		block_show = true;
		
// 		// Код анимации
// 		$('.active div:eq(0)').show('fast', function(){
// 			$(this).next().show('fast', arguments.callee);
// 		});
// 	}
// }

// $(window).scroll(function(){
// 	scrollTracking();
// });
	
// $(document).ready(function(){ 
// 	scrollTracking();
// });
// _______________________!!!___________________анимация jquery
     // МОДАЛЬНОЕ ОКНО НА JQUERY 
                // СПАСИБО ЗА ЗАЯВКУ 
                // $(document).ready(function () {
                //   var modalths = $('.modalths'),
                //       modalBtnThs = $('[data-toggle="modalths"]'),
                //       closeBtnThs = $('.modalths__close');
                
                //   modalBtnThs.on('click', function(){
                //     modalths.toggleClass('modalths--visible');
                //   });
                //   closeBtnThs.on('click', function(){
                //     modalths.toggleClass('modalths--visible');
                //   });        
                    // Закрытие по клавише Esc.
                  // $(document).keydown(function(e) {
                  //   if (e.keyCode === 27) {
                  //     e.stopPropagation();
                  //     $('.modalths').toggleClass('modalths--visible');
                  //   }
                  // });             
                  // Клик по фону, но не по окну.
                //   $('.modalths').click(function(e) {
                //     if ($(e.target).closest('.modalths__dialog').length == 0) {
                //       $(this).toggleClass('modalths--visible');			
                //     }
                //   });
                // });
                // _______________________!!!___________________
// МОДАЛЬНОЕ ОКНО НА JQUERY 

>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
// ОСТАВЬТЕ ЗАЯВКУ 
$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
<<<<<<< HEAD
  var modalths = $('.modalths'),
      modalBtnThs = $('[data-toggle="modalths"]'),
      closeBtnThs = $('.modalths__close');
=======
  // var modalths = $('.modalths'),
  //     modalBtnThs = $('[data-toggle="modalths"]'),
  //     closeBtnThs = $('.modalths__close');

>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
  modalBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });
<<<<<<< HEAD
  modalBtnThs.on('click', function(){
    modalths.toggleClass('modalths--visible');
  });
  closeBtnThs.on('click', function(){
    modalths.toggleClass('modalths--visible');
  });        
  	// Закрытие по клавише Esc.
	// $(document).keydown(function(e) {
	// 	if (e.keyCode === 27) {
	// 		e.stopPropagation();
	// 		$('.modal').toggleClass('modal--visible');
	// 	}
  // });
=======
  // modalBtnThs.on('click', function(){
  //   modalths.toggleClass('modalths--visible');
  // });
  // closeBtnThs.on('click', function(){
  //   modalths.toggleClass('modalths--visible');
  // });        

  	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal').toggleClass('modal--visible');
		}
  });
>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
    	// Закрытие по клавише Esc.
	// $(document).keydown(function(e) {
	// 	if (e.keyCode === 27) {
	// 		e.stopPropagation();
	// 		$('.modalths').toggleClass('modalths--visible');
	// 	}
	// });
<<<<<<< HEAD
=======
	
>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
	// Клик по фону, но не по окну.
	$('.modal').click(function(e) {
		if ($(e.target).closest('.modal__dialog').length == 0) {
			$(this).toggleClass('modal--visible');			
		}
  });
  	// Клик по фону, но не по окну.
<<<<<<< HEAD
	$('.modalths').click(function(e) {
		if ($(e.target).closest('.modalths__dialog').length == 0) {
			$(this).toggleClass('modalths--visible');			
		}
  });
=======
	// $('.modalths').click(function(e) {
	// 	if ($(e.target).closest('.modalths__dialog').length == 0) {
	// 		$(this).toggleClass('modalths--visible');			
	// 	}
  // });
  
  // _______________________!!!___________________

>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
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
<<<<<<< HEAD
=======
    
>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
  });
  var prev = $('.swiper-button-prev');
  var next = $('.swiper-button-next');
  var bullets = $('.swiper-pagination');
  next.css('left', prev.width() + 10 + bullets.width() +10);
  bullets.css('left', prev.width() + 10);
<<<<<<< HEAD
=======

>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
  //Валидация формы MODAL FORM___________________________________________________________________MODAL
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило. simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
      minlength: 10 + 7
      },
      // правило-объект.  compound rule
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: {
        required: true,
      }
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух и не длиннее 15 букв",
        maxlength: "Имя не короче двух и не длиннее 15 букв"
      },
      userPhone: { 
        required: "Заполните поле",
        minlength: "Полностью введите номер телефона"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите email в формате name@domain.com"
      },
      policyCheckbox: {
        required: "Примите соглашение об обработке персональных данных",    
      }
    },
     submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
<<<<<<< HEAD
          // alert('Перезвоним через 10 минут');
          modal.removeClass('modal--visible');
          modalths.toggleClass('modalths--visible');
        }
      });
      }  
=======
          alert('Перезвоним через 10 минут');
          modal.removeClass('modal--visible');
          // modalths.toggleClass('modalths--visible');
        }
      });
      }
      
>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
  });
    //маска для номера телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
    // _________________________________!!!______________________________
    //Валидация формы В ФУТЕРЕ_________________________________________________________FOOTER
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило. simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
      minlength: 10 + 7
    },
      // правило-объект.  compound rule
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: {
        required: true,
      }
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух и не длиннее 15 букв",
        maxlength: "Имя не короче двух и не длиннее 15 букв"
      },
      userPhone: { 
        required: "Заполните поле",
        minlength: "Полностью введите номер телефона",
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите email в формате name@domain.com"
      },
      policyCheckbox: {
        required: "Примите соглашение об обработке персональных данных",    
      }
    }
  });
    //маска для номера телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
 // _________________________________!!!______________________________
  //Валидация формы "ЭКОНОМИЯ"_________________________________________________________ECONOMY
  $('.action__form').validate({
  errorClass: "invalid",
  errorElement: "div",
  rules: {
    // строчное правило. simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: {
      required: true,
    minlength: 10 + 7
  },
    // правило-объект.  compound rule
    userEmail: {
      required: true,
      email: true
    },
    policyCheckbox: {
      required: true,
    }
  }, //сообщения
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче двух и не длиннее 15 букв",
      maxlength: "Имя не короче двух и не длиннее 15 букв"
    },
    userPhone: { 
      required: "Заполните поле",
      minlength: "Полностью введите номер телефона",
    },
    userEmail: {
      required: "Заполните поле",
      email: "Введите email в формате name@domain.com"
    },
    policyCheckbox: {
      required: "Примите соглашение об обработке персональных данных",    
    }
  } 
  });
  //маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
  //_____________________________________!!!____________________________
                  //  форма в секции CONTROL
                  $('.control__form').validate({
                    errorClass: "invalid",
                    errorElement: "div",
                    rules: {
                      // строчное правило. simple rule, converted to {required:true}
                      userName: {
                        required: true,
                        minlength: 2,
                        maxlength: 15
                      },
                      userPhone: {
                        required: true,
                      minlength: 10 + 7
                    },
                    policyCheckbox: {
                      required: true,
                    }
                    },
                    messages: {
                      userName: {
                        required: "Заполните поле",
                        minlength: "Имя не короче двух и не длиннее 15 букв",
                        maxlength: "Имя не короче двух и не длиннее 15 букв"
                      },
                      userPhone: { 
                        required: "Заполните поле",
                        minlength: "Полностью введите номер телефона",
                      },
                      policyCheckbox: {
                        required: "Примите соглашение об обработке персональных данных",    
                      }
                    }
                  });
                    //маска для номера телефона
                    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
<<<<<<< HEAD
=======

                  // _______________________________________!!!____________________________________
>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
    //КАРТЫ ЯНДЕКСА
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [55.751574, 37.573856],
              zoom: 9
          }, {
              searchControlProvider: 'yandex#search'
          }),
<<<<<<< HEAD
=======
  
>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
<<<<<<< HEAD
=======
  
>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Наш офис',
              balloonContent: 'Вход со двора'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/marker.png',
              // Размеры метки.
              iconImageSize: [32, 32],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          }),
<<<<<<< HEAD
=======
  
>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
          myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
              hintContent: 'Собственный значок метки с контентом',
              balloonContent: 'А эта — новогодняя',
              iconContent: '12'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              // Своё изображение иконки метки.
              iconImageHref: 'images/ball.png',
              // Размеры метки.
              iconImageSize: [48, 48],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-24, -24],
              // Смещение слоя с содержимым относительно слоя с картинкой.
              iconContentOffset: [15, 15],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
<<<<<<< HEAD
          });  
=======
          });
  
>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
      myMap.geoObjects
          .add(myPlacemark)
          .add(myPlacemarkWithContent);
  });
});
<<<<<<< HEAD
//КНОПКА  НАВЕРХ
=======

// КНОПКА 
// НАВЕРХ
>>>>>>> 26c3106933e630f45bc4a120f87cdd6716614535
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

new WOW().init();