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

var block_show = false;

function scrollTracking(){
	if (block_show) {
		return false;
	}

	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.active').offset().top;
	var eh = $('.active').outerHeight();
	var dh = $(document).height();   
 
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
		
		// Код анимации
		$('.active div:eq(0)').show('fast', function(){
			$(this).next().show('fast', arguments.callee);
		});
	}
}

$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});
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

//Валидация формы MODAL FORM___________________________________________________________________MODAL
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "label",
    rules: {
      // строчное правило. simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект.  compound rule
      userEmail: {
        required: true,
        email: true
      }
    }, //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух и не длиннее 15 букв",
        maxlength: "Имя не короче двух и не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите email в формате name@domain.com"
      }
    },
     submitHandler: function(form) {
      //  $(form).ajaxSubmit();
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        // dataType: "dataType",
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
          alert('Перезвоним через 10 минут');
          modal.toggleClass('modal--visible');
        }
      });
      }
  });
    //маска для номера телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
    // _________________________________!!!______________________________
    //Валидация формы В ФУТЕРЕ_________________________________________________________FOOTER
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "label",
    rules: {
      // строчное правило. simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект.  compound rule
      userEmail: {
        required: true,
        email: true
      }
    }, //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух и не длиннее 15 букв",
        maxlength: "Имя не короче двух и не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите email в формате name@domain.com"
      }
    } 
  });
    //маска для номера телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
 // _________________________________!!!______________________________
//Валидация формы "ЭКОНОМИЯ"_________________________________________________________ECONOMY
$('.economy__form').validate({
  errorClass: "invalid",
  errorElement: "label",
  rules: {
    // строчное правило. simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: "required",
    // правило-объект.  compound rule
    userEmail: {
      required: true,
      email: true
    }
  }, //сообщения
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух и не длиннее 15 букв",
      maxlength: "Имя не короче двух и не длиннее 15 букв"
    },
    userPhone: "Телефон обязателен",
    userEmail: {
      required: "Обязательно укажите email",
      email: "Введите email в формате name@domain.com"
    }
  } 
});
  //маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
//_____________________________________!!!____________________________
                  //  форма в секции CONTROL
                  $('.control__form').validate({
                    errorClass: "invalid",
                    errorElement: "label",
                    rules: {
                      // строчное правило. simple rule, converted to {required:true}
                      userName: {
                        required: true,
                        minlength: 2,
                        maxlength: 15
                      },
                      userPhone: "required",
                      // правило-объект.  compound rule
                      // userEmail: {
                      //   required: false,
                      //   email: false
                      // }
                    }, //сообщения
                    messages: {
                      userName: {
                        required: "Имя обязательно",
                        minlength: "Имя не короче двух и не длиннее 15 букв",
                        maxlength: "Имя не короче двух и не длиннее 15 букв"
                      },
                      userPhone: "Телефон обязателен",
                      // userEmail: {
                      //   // required: "Обязательно укажите email",
                      //   // email: "Введите email в формате name@domain.com"
                      // }
                    } 
                  });
                    //маска для номера телефона
                    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

                  // _______________________________________!!!____________________________________
    //КАРТЫ ЯНДЕКСА
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [55.751574, 37.573856],
              zoom: 9
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
  
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
          });
  
      myMap.geoObjects
          .add(myPlacemark)
          .add(myPlacemarkWithContent);
  });
});

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
