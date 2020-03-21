<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <!-- <link rel="import" href="..src/test/doc.html"> -->
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">   
   <link href="https://fonts.googleapis.com/css?family=Yeseva+One&display=swap&subset=cyrillic" rel="stylesheet">
   <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">
   <link rel="stylesheet" href="css/animate.css">
   <link rel="stylesheet" href="css/style.css">
   <script src="https://api-maps.yandex.ru/2.1/?apikey=64e6a3ae-c178-4c98-98d5-63da6dbca6c5&lang=ru_RU" type="text/javascript">
   </script>
   <title>Document</title>
</head>

<body>
<div class="header">
   <div class="header__menu">
      <div class="container">
         <div class="menu">
            <div class="logo animate heartBeat">Repair&nbsp;Design&nbsp;Project</div>
            <nav class="nav animated bounceInDown delay-3s">
               <a href="#" class="nav__item">Главная </a>
               <a href="#" class="nav__item">Проекты </a>
               <a href="#" class="nav__item">Замер </a>
               <a href="#" class="nav__item">Команда</a>
               <a href="#" class="nav__item">Отзывы</a>
               <a href="#" class="nav__item">Контакты</a>
            </nav>
            <div class="contacts menu__contacts">
               <!-- <div class="contacts__phone--hide"> -->
                  <a href="tel:+7(999)7683299" class="phone contacts__phone"><span class="phone--text">+7 (999) 768-32-99</span></a>
               <!-- </div> -->   
               <!-- <div class="contacts__button--hide">  -->
                  <button class="button contacts__button button--primary  animated bounceInDown delay-1s" data-toggle='modal'>Заказать звонок</button>
               <!-- </div>  -->
               <!-- <a href="tel:+7(999)7683299" class="phone contacts__phone--570">+7 (999) 768-32-99<br>Заказать звонок</a> -->
            </div>
         </div>
         <!-- header__menu -->
      </div>
      <!-- /.menu -->
   </div>
   <!-- /.container -->
</div>
<!-- /.header -->
<main>
   <section class="hero">
    <!-- data-vide-bg="video/ocean"> -->
      <div class="instagram hero__instagram">
         <a href="#" class="instagram__link wow flip">Instagram</a>
      </div>      
      <!-- <div class="container"> -->
         <div class="hero__content">
            <h1 class="title hero__title wow bounceInDown delay-1s">
                турецкий ремонт в&nbsp;<span class="title--primary">Ростове-на-дону</span>
            </h1>
            <p class="hero__text wow bounceInRight delay-1s">
               Получите готовый ремонт под ключ в срок с экономией рабочего времени до 45 дней и 20% от стоимости материалов за счет организации работы
            </p>
            <div class="hero__buttons">
               <button class="button hero__button button--primary animated fadeInLeft delay-2s"><span class="button__text--primary" data-toggle='modal'>Рассчитать&nbsp;стоимость</span></button>
               <button class="button hero__button button--outline animated fadeInRight delay-2s"><span class="button__text--outline" data-toggle='modal'>Отправить&nbsp;заявку</span></button>
            </div>
         </div>
         <!-- .hero__content -->
      </!-->
      <!-- container -->
      <a href="#" class="hero__scroll-down  animated bounce delay-5s">Листайте вниз</a>
   </section>
   <!-- /.hero -->
   <div class="box">
      <p class="import">
         вставляем импорт
      </p>
         <!-- _________________ИМПОРТ__________________ -->
   <!-- <script>
      var doc = document.querySelector('link[rel="import"]').import;
      // Grab DOM from doc.html's document.
      var text = doc.querySelector('.intro-dm');
      document.body.appendChild(text.cloneNode(true));
      </script> -->
   <!-- _________________ИМПОРТ__________________ -->
      <!-- <div class="box__kar"></div>
         <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         </div>
      </div> -->
   </div>


<!-- ___________________________________________Слайд Секция -->
   <section class="section section--dark projects">
      <div class="container">
         <div class="row">
            <div class="col-50 wow fadeInRight delay-1s">
               <div class="section-title section-title--left">
                  <h2 class="section-title__heading section-title__heading--primary">
                     Завершенные <span class="section-title__word">проекты</span>
                  </h2>
                  <p class="section-title__text "> На сайте представлена
                      ​​лишь небольшая часть работ, выполняемых нашей
                       компанией. За 14 лет работы на строительном
                        рынке мы осчастливили более 1000 семей</p>
               </div>
               <!-- /.section-title -->
               
<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
<!-- __________________________________________СЕКЦИЯ СЛАЙДЕР_1 -->
                              <!-- Slider main container -->
               <div class="swiper-container">
                  <!-- Additional required wrapper -->
                  <div class="swiper-wrapper swiper-no-swiping">
                     <!-- Slides -->
                     <div class="swiper-slide">
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Город:</h3>
                           <span class="swiper-slide__value">Ростов-на-Дону<br>
                              ЖК Адмирал</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Площадь:</h3>
                           <span class="swiper-slide__value">81м2</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Срок ремонт:</h3>
                           <span class="swiper-slide__value">3.5 месяца</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Стоимость:</h3>
                           <span class="swiper-slide__value">По запросу</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                     </div>
                     <!-- /.swiper-slide -->
                                          <!-- Slides -->
                     <div class="swiper-slide">
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Город:</h3>
                           <span class="swiper-slide__value">Ростов-на-Дону</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Площадь:</h3>
                           <span class="swiper-slide__value">Ростов-на-Дону</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Срок ремонт:</h3>
                           <span class="swiper-slide__value">Ростов-на-Дону</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Стоимость:</h3>
                           <span class="swiper-slide__value">Ростов-на-Дону</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                     </div>
                     <!-- /.swiper-slide -->
                                          <!-- Slides -->
                     <div class="swiper-slide">
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Город:</h3>
                           <span class="swiper-slide__value">Ростов-на-Дону</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Площадь:</h3>
                           <span class="swiper-slide__value">Ростов-на-Дону</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Срок ремонт:</h3>
                           <span class="swiper-slide__value">Ростов-на-Дону</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Стоимость:</h3>
                           <span class="swiper-slide__value">Ростов-на-Дону</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                     </div>
                     <!-- /.swiper-slide -->

                  </div>
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-pagination"></div>
                  <div class="swiper-button-next"></div>
               </div>
               <!-- swiper-container -->
            </div>
            <!-- /.col-50 -->
            <div class="col-50">
               <div class="swiper-container">
                  <!-- Additional required wrapper -->
                  <div class="swiper-wrapper swiper-no-swiping">
                      <!-- Slides -->
                      <div class="swiper-slide"><img src="./img/projects/project1.jpg" alt="image"></div>
                      <div class="swiper-slide"><img src="./img/projects/project2.jpg" alt="image"></div>
                      <div class="swiper-slide"><img src="./img/projects/project3.jpg" alt="image"></div>
                  </div>

              </div>  
            </div>
            <!-- /.col-50 -->
         </div>
         <!-- /.row -->
      </div>
      <!-- /.container -->
   </section>   
  <!-- !!!!!!!!!!!!________________________СЕКЦИЯ ОНЛАЙН КОНТРОЛЬ__________________!!!!!!!!!!!!!!! -->
   <section class="section control">
      <div class="container">
         <div class="section-title control__section-title section-title--light">
            <h2 class="section-title__heading wow fadeInLeft delay-2s">Онлайн контроль</h2>
            <!-- /.section-title__heading -->
            <div class="section-title__image wow fadeInRight delay-2s">
               <img src="img/video.svg" alt="video">
            </div>
            <!-- /.section-title_image -->
         </div>
         <!-- /.section-title -->
         <div class="control__video video">
            <img src="img/play-icon.svg" alt="" class="video__play">
         </div>
         <!-- control__video video -->
         <p class="control__text wow swing delay-1s">
            На каждом объекте установлена ​​камера, которая транслирует 
            ход работы на часах. В любой момент вы можете зайти на наш сайт
            и следить за ходом работы в вашей квартире. Посмотрите прямую
            трансляцию с одного из наших объектов! Оставьте заявку ниже
            чтобы получить ссылку на трансляцию.
         </p>
         <form action="#" class="form control__form">
            <div class="control__input-group">
               <label for="user-name" class="label form__label control__label">Имя</label>
               <input type="text" class="input form__input control__input" id="user-name" placeholder="Как вас зовут:">
            </div>
            <div class="control__input-group">
               <label for="user-phone" class="label form__label control__label">Телефон</label>
               <input type="tel" class="input form__input control__input" id="user-phone" placeholder="Ваш номер телефона:">
            </div>

            <button class="button button--primary control__button wow bounceInRight delay-1s">Отправить</button>
            <div class="policy control__policy">
               <input type="checkbox" name="policy-checkbox" id="policy-checkbox" class="policy__checkbox" checked>
               <label for="policy-checkbox" class="policy__label">Я соглашаюсь с обработкой данных</label>
            </div>
            <!-- policy -->
         </form>
         <!-- /.form control__form -->
      </div>
      <!-- /.container -->
   </section>
   <!-- /.section control -->
   <!-- __________________________________________________ -->
   <!-- !!!!!!!!!!!!!! СЕКЦИЯ ВИДЫ РЕМОНТА !!!!!!!!!!!!!!!!!!!!! -->
   <section class="section types">
      <div class="container">
         <div class="section-title types__section-title">
            <h2 class="section-title__heading wow fadeInLeft delay-2s">Виды ремонта</h2>
            <!-- /.section-title__heading -->
            <div class="section-title__image wow fadeInRight delay-2s">
               <img src="img/repair.svg" alt="repair">
            </div>
            <!-- /.section-title_image -->
         </div>
         <!-- /.section-title -->
         <div class="row">
            <div class="col-30">
               <div class="card">
                  <img src="img/types/type-1.jpg" alt="Косметический ремонт" class="card__image wow bounceInLeft delay-1s">
                  <div class="card__text">
                     <div class="text_in_card wow bounceInRight delay-1s">
                        <div class="card__title--fonts">
                           <h3 class="card_title">Косметический ремонт</h3>
                        </div>
                        <!-- /.card_title -->
                        <ul class="card__list">
                           <li class="card__item">• Демонтаж старых покрытий</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Поклейка обоев</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Роспись стен и потолков</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Укладка полов</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Замена сантехники</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Замена розеток и выключателей</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Замена дверей</li>
                           <!-- /.card__item -->
                        </ul>
                        <!-- /.card__list -->
                        <strong class="card__pricetag">
                           от 900 руб / м<sup>2</sup>
                        </strong>
                         <!-- /.card__pricetag -->
                     </div>
                  </div>
                  <!-- /.card__text -->
               </div>
               <!-- /.card -->
            </div>
            <!-- /.col-30 -->
            <div class="col-30">
               <div class="card">
                  <img src="img/types/type-2.jpg" alt="Капитальный ремонт p1" class="card__image wow bounceInLeft delay-1s">
                  <div class="card__text">
                     <div class="text_in_card wow bounceInRight delay-1s">
                        <div class="card__title--fonts">
                           <h3 class="card_title">Капитальный ремонт</h3>
                        </div>
                        <!-- /.card_title -->
                        <ul class="card__list">
                           <li class="card__item">• Демонтаж старых покрытий</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Поклейка обоев</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Роспись стен и потолков</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Укладка полов</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Замена сантехники</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Замена розеток и выключателей</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Замена дверей</li>
                           <!-- /.card__item -->
                        </ul>
                        <!-- /.card__list -->
                        <strong class="card__pricetag">
                           от 1800 руб / м<sup>2</sup>
                        </strong>
                     </div>
                  </div>
                  <!-- /.card__text -->
               </div>
               <!-- /.card -->
            </div>
            <!-- /.col-30 -->
            <div class="col-30">
               <div class="card">
                  <img src="img/types/type-3.jpg" alt="Дизайнерский ремонт" class="card__image wow bounceInLeft delay-1s">
                  <div class="card__text">
                     <div class="text_in_card  wow bounceInRight delay-1s">
                        <div class="card__title--fonts">
                           <h3 class="card_title">Дизайнерский ремонт</h3>
                        </div>
                        <!-- /.card_title -->
                        <ul class="card__list">
                           <li class="card__item">• Демонтаж старых покрытий</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Поклейка обоев</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Роспись стен и потолков</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Укладка полов</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Замена сантехники</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Замена розеток и выключателей</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Замена дверей</li>
                           <!-- /.card__item -->
                        </ul>
                        <!-- /.card__list -->
                        <strong class="card__pricetag">
                           от 1800 руб / м<sup>2</sup>
                        </strong>
                     </div>
                  </div>
                  <!-- /.card__text -->
               </div>
               <!-- /.card -->
            </div>
            <!-- /.col-30 -->
         </div>
         <!-- /.row -->
      </div>
      <!-- /.container -->
   </section>
   <!-- /.section types -->
   <!-- ______________________________________________ -->
<!-- !!!!!!!!!!!!!! СЕКЦИЯ ДИЗАЙН ПРОЕКТ !!!!!!!!!!!!!!!!!!!!! -->
   <section class="section types">
      <div class="container">
       <div class="back__design">
         <div class="section-title types__section-title types__section-title--design">
            <h2 class="section-title__heading--design wow fadeInLeft delay-2s">Дизайн проект</h2>
            <!-- /.section-title__heading -->
            <div class="section-title__image wow fadeInRight delay-2s">
               <img src="img/design.svg" alt="repair">
            </div>
            <!-- /.section-title_image -->
            <div class="types__section-title--text">
               <p class="types__section-title__text--text">Дизайн-проект не только помогает
                   сделать ремонт вашей квартиры более современным,<br>
                   но и значительно удешевляет материалы и сокращает
                    время ремонтных работ</p>
            </div>
            <!-- /.section-title__text -->
         </div>
         <!-- /.section-title -->
         <div class="row">
            <div class="col-30">
               <div class="car label--lightd">
                  <img src="img/types/type-1.jpg" alt="Косметический ремонт" class="card__image wow bounceInLeft delay-1s">
                  <div class="card__text">
                     <div class="text-in card wow bounceInRight delay-1s">
                        <div class="card__title--fonts">
                           <h3 class="card_title">Минимальный</h3>
                        </div>
                        <!-- /.card_title -->
                         <!-- // • Измерительные чертежи • Перепланировка 
                           • Планировка мебели • Сантехнический план -->
                        <ul class="card__list">
                           <li class="card__item">• Измерительные чертежи</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Перепланировка</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Планировка мебели</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Сантехнический план</li>
                           <!-- /.card__item -->
                        </ul>
                        <!-- /.card__list -->
                        <strong class="card__pricetag card__pricetag--design">
                            150 руб / м<sup>2</sup>
                        </strong>
                         <!-- /.card__pricetag -->
                     </div>
                  </div>
                  <!-- /.card__text -->
               </div>
               <!-- /.card -->
            </div>
            <!-- /.col-30 -->
            <div class="col-30">
               <div class="card">
                  <img src="img/types/type-3.jpg" alt="Капитальный ремонт" class="card__image wow bounceInLeft delay-1s">
                  <div class="card__text">
                     <div class="text-in-card wow bounceInRight delay-1s">
                        <div class="card__title--fonts">
                           <h3 class="card_title">Стандартный</h3>
                        </div>
                        <!-- /.card_title -->
                        <!-- • Измерительные чертежи • Перепланировка 
                           • Планировка мебели • План потолков • План этажей 
                           • План электрики • План света  -->
                        <ul class="card__list">
                           <li class="card__item">• Измерительные чертежи</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Перепланировка</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Планировка мебели</li>
                           <!-- /.card__item -->
                           <li class="card__item">• План потолков</li>
                           <!-- /.card__item -->
                           <li class="card__item">• План этажей</li>
                           <!-- /.card__item -->
                           <li class="card__item">• План электрики</li>
                           <!-- /.card__item -->
                           <li class="card__item">• План света</li>
                           <!-- /.card__item -->
                        </ul>
                        <!-- /.card__list -->
                        <strong class="card__pricetag card__pricetag--design">
                            400 руб / м<sup>2</sup>
                        </strong>
                     </div>
                  </div>
                  <!-- /.card__text -->
               </div>
               <!-- /.card -->
            </div>
            <!-- /.col-30 -->
            <div class="col-30">
               <div class="card">
                  <img src="img/types/type-2.jpg" alt="Дизайнерский ремонт" class="card__image wow bounceInLeft delay-1s">
                  <div class="card__text">
                     <div class="text-in-card wow bounceInRight delay-1s">
                        <div class="card__title--fonts">
                           <h3 class="card_title">Полный</h3>
                        </div>
                        <!-- /.card_title Измерительные чертежи • Перепланировка • Планировка мебели
                            • План потолков • План этажей • План электрики • План света • Стенные развертки
                             • 3D визуализация • Смета на материалы • Выезд на подбор материалов • Выбор мебели -->
                        <ul class="card__list">
                           <li class="card__item">• Измерительные чертежи</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Перепланировка</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Планировка мебели</li>
                           <!-- /.card__item -->
                           <li class="card__item">• План потолков</li>
                           <!-- /.card__item -->
                           <li class="card__item">• План этажей</li>
                           <!-- /.card__item -->
                           <li class="card__item">• План электрики</li>
                           <!-- /.card__item -->
                           <li class="card__item">• План света</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Стенные развертки</li>
                           <!-- /.card__item -->
                           <li class="card__item">• 3D визуализация</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Смета на материалы</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Выезд на подбор материалов</li>
                           <!-- /.card__item -->
                           <li class="card__item">• Выбор мебели</li>
                           <!-- /.card__item -->
                        </ul>
                        <!-- /.card__list -->
                        <strong class="card__pricetag card__pricetag--design">
                            900 руб / м<sup>2</sup>
                        </strong>
                     </div>
                  </div>
                  <!-- /.card__text -->
               </div>
               <!-- /.card -->
            </div>
            <!-- /.col-30 -->
         </div>
         <!-- /.row -->
       </div>
       <!-- back__design -->
      </div>
      <!-- /.container -->
   </section>
   <!-- /.section types -->
   <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
   <!-- _______________________________________СЛАЙДЕР_2 -->
   <section class="section section--dark projects">
      <div class="container">
         <div class="row">
            <div class="col-50">
               <div class="section-title section-title--left">
                  <h5 class="section-title__heading--work">
                     <span class="section-title__work">как мы работаем</span>
                  </h5>
                  <h2 class="section-title__heading section-title__heading--primary">
                     6 шагов<span class="section-title__word">до цели</span>
                  </h2>
                  <div class="section-title__text-slide">
                           <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!____Начало СЛАЙДЕРА3______ -->
                     <div class="swiper-object">
                        <!-- Slider main container -->
                        <div class="swiper-container">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                           <!-- Slides -->
                           <div class="swiper-slide"><h3 class="section-title-slide_counter">1/6</h3></div>
                           <div class="swiper-slide"><h3 class="section-title-slide_counter">2/6</h3></div>
                           <div class="swiper-slide"><h3 class="section-title-slide_counter">3/6</h3></div>
                           <div class="swiper-slide"><h3 class="section-title-slide_counter">4/6</h3></div>
                           <div class="swiper-slide"><h3 class="section-title-slide_counter">5/6</h3></div>
                           <div class="swiper-slide"><h3 class="section-title-slide_counter">6/6</h3></div>
                        </div> 
                        </div>
                        <!-- <div class="swiper-button-one"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div> -->
   
         </div>
                            <!-- Конец слайдера 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
                        <!-- /.section-title-slide_counter -->
                     <p class="section-title__text"></p>
                  </div>
               </div>
               <!-- /.section-title -->
                              <!-- Slider main container -->
               <div class="swiper-container">
                  <!-- Additional required wrapper -->
                  <div class="swiper-wrapper swiper-no-swiping">                        
                     <!-- Slides -->
                     <div class="swiper-slide">
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Выезд на замеры помещения</h3>
                           <span class="swiper-slide__value swiper-slide__value--six">После вашего
                               звонка мы идем к вам1,
                              чтобы проконсультироваться и измерить помещения вашей квартиры.
                              Во время нашей встречи вы можете задать абсолютно любые вопросы,
                              касаемо ремонта. Оценщик приходит, чтобы измерить комнату.
                              Он проконсультирует вас по вопросам техники ремонта,
                              дизайна квартиры, сроков ремонта квартиры в целом 
                              и отдельных ее этапов.</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                     </div>
                     <!-- /.swiper-slide -->                     
                     <!-- Slides -->
                     <div class="swiper-slide">
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Выезд на замеры помещения</h3>
                           <span class="swiper-slide__value swiper-slide__value--six">После вашего
                               звонка мы идем к вам,2.<br>дизайна квартиры, сроков ремонта
                               <br>дизайна квартиры, сроков ремонта
                               <br>дизайна квартиры, сроков ремонта
                               <br>дизайна квартиры, сроков ремонта
                              </span>
                        </div>
                        <!-- /.swiper-slide__text -->
                     </div>
                     <!-- /.swiper-slide -->                     
                     <!-- Slides -->
                     <div class="swiper-slide">
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Выезд на замеры помещения</h3>
                           <span class="swiper-slide__value swiper-slide__value--six">После вашего
                               звонка мы идем к вам,3.<br>дизайна квартиры, сроков ремонта
                               <br>дизайна квартиры, сроков ремонта</span>
                               <br>дизайна квартиры, сроков ремонта
                               <br>дизайна квартиры, сроков ремонта
                               <br>дизайна квартиры, сроков ремонта
                               <br>дизайна квартиры, сроков ремонта
                        </div>
                        <!-- /.swiper-slide__text -->
                     </div>
                     <!-- /.swiper-slide -->
                     <!-- Slides -->
                     <div class="swiper-slide">
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Выезд на замеры помещения</h3>
                           <span class="swiper-slide__value swiper-slide__value--six">После вашего
                               звонка мы идем к вам,4.</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                     </div>
                     <!-- /.swiper-slide -->
                                          <!-- Slides -->
                     <div class="swiper-slide">
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Выезд на замеры помещения</h3>
                           <span class="swiper-slide__value swiper-slide__value--six">После вашего
                               звонка мы идем к вам,5.</span>
                        </div>
                        <!-- /.swiper-slide__text -->
                     </div>
                     <!-- /.swiper-slide -->
                                          <!-- Slides -->
                     <div class="swiper-slide">
                        <div class="swiper-slide__text">
                           <h3 class="swiper-slide__heading">Выезд на замеры помещения</h3>
                           <span class="swiper-slide__value swiper-slide__value--six">После вашего
                               звонка мы идем к вам,6.</span>
                        </div>
                        <!-- /.swiper-slide__text -->              
                     </div>
                     <!-- /.swiper-slide -->
                  </div>
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-pagination"></div>
                  <div class="swiper-button-next"></div>
               </div>
               <!-- swiper-container -->
            </div>
            <!-- /.col-50 -->
            <div class="col-50">
               <div class="swiper-container">
                  <!-- Additional required wrapper -->
                  <div class="swiper-slide__text--counter swiper-no-swiping">
                     <div class="swiper-slide__text--counter-1">
                     <div class="swiper-slide__text--links swiper-button-1">
                        <a  href="#p1" class="swiper-slide__link">
                           <h4><span class="swiper-slide__link--numberinfo">01</span><br><span class="swiper-slide__link--textinfo">Выезд на замер<br>помещения</span></h4>
                        </a>
                     </div>
                     <div class="swiper-slide__text--links swiper-button-2">
                        <a class="swiper-slide__link">
                           <h4><span class="swiper-slide__link--numberinfo">02</span><br><span class="swiper-slide__link--textinfo">Составление<br>сметы</span></h4>
                        </a>
                     </div>
                     <div class="swiper-slide__text--links swiper-button-3">
                        <a class="swiper-slide__link">
                           <h4><span class="swiper-slide__link--numberinfo">03</span><br><span class="swiper-slide__link--textinfo">Разработка<br>дизайн проекта</span></h4>
                        </a>
                     </div>
                  </div>
                     <div class="swiper-slide__text--counter-2 swiper-no-swiping">
                     <div class="swiper-slide__text--links swiper-button-4">
                        <a class="swiper-slide__link">
                           <h4><span class="swiper-slide__link--numberinfo">04</span><br><span class="swiper-slide__link--textinfo">Закупка расходных<br>материалов</span></h4>
                        </a>
                     </div>
                        <div class="swiper-slide__text--links swiper-button-5">
                        <a class="swiper-slide__link">
                           <h4><span class="swiper-slide__link--numberinfo">05</span><br><span class="swiper-slide__link--textinfo">Ремонтно-отделочные<br>работы</span></h4>
                        </a>
                     </div>
                     <div class="swiper-slide__text--links swiper-button-6">
                        <a class="swiper-slide__link">
                           <h4><span class="swiper-slide__link--numberinfo">06</span><br><span class="swiper-slide__link--textinfo">Приемка-сдача<br>работ</span></h4>
                        </a>
                     </div>
                  </div>
                  </div>
                  <!-- /.swiper-slide__text-counter -->
                  <div class="swiper-wrapper swiper-no-swiping">
                      <!-- Slides -->
                      <div class="swiper-slide"><img src="./img/projects/project2.jpg" alt="image"></div>
                      <div class="swiper-slide"><img src="./img/projects/project3.jpg" alt="image"></div>
                      <div class="swiper-slide"><img src="./img/projects/project4.jpg" alt="image"></div>
                      <div class="swiper-slide"><img src="./img/projects/project1.jpg" alt="image"></div>
                      <div class="swiper-slide"><img src="./img/projects/project5.jpg" alt="image"></div>
                      <div class="swiper-slide"><img src="./img/projects/project6.jpg" alt="image"></div>
                  </div>
              </div>  
            </div>
            <!-- /.col-50 -->
         </div>
         <!-- /.row -->
      </div>
      <!-- /.container -->
   </section> 
     <!-- __________________________КОНЕЦ СЛАЙДЕРА2 -->
</main>
<!-- !!!!!!!!!!!!!! СЕКЦИЯ НАШИ КЛИЕНТЫ !!!!!!!!!!!!!!!!!!!!! -->
<section class="section types">
   <div class="container design design__section-title">
      <div class="section-title types__section-title">
         <h2 class="section-title__heading wow fadeInLeft delay-2s">Виды ремонта</h2>
         <!-- /.section-title__heading -->
         <div class="section-title__image wow fadeInRight delay-2s">
            <img src="img/repair.svg" alt="repair">
         </div>
         <!-- /.section-title_image -->
      </div>
      <!-- /.section-title -->
      <div class="row">
         <div class="col-30">
            <div class="card">
               <img src="img/types/type-1.jpg" alt="Косметический ремонт" class="card__image wow bounceInLeft delay-1s">
               <div class="card__text">
                  <div class="text_in_card wow bounceInRight delay-1s">
                     <div class="card__title--fonts">
                        <h3 class="card_title">Косметический ремонт</h3>
                     </div>
                     <!-- /.card_title -->
                     <ul class="card__list">
                        <li class="card__item">• Демонтаж старых покрытий</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Поклейка обоев</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Роспись стен и потолков</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Укладка полов</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Замена сантехники</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Замена розеток и выключателей</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Замена дверей</li>
                        <!-- /.card__item -->
                     </ul>
                     <!-- /.card__list -->
                     <strong class="card__pricetag">
                        от 900 руб / м<sup>2</sup>
                     </strong>
                      <!-- /.card__pricetag -->
                  </div>
               </div>
               <!-- /.card__text -->
            </div>
            <!-- /.card -->
         </div>
         <!-- /.col-30 -->
         <div class="col-30">
            <div class="card">
               <img src="img/types/type-2.jpg" alt="Капитальный ремонт p1" class="card__image wow bounceInLeft delay-1s">
               <div class="card__text">
                  <div class="text_in_card wow bounceInRight delay-1s">
                     <div class="card__title--fonts">
                        <h3 class="card_title">Капитальный ремонт</h3>
                     </div>
                     <!-- /.card_title -->
                     <ul class="card__list">
                        <li class="card__item">• Демонтаж старых покрытий</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Поклейка обоев</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Роспись стен и потолков</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Укладка полов</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Замена сантехники</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Замена розеток и выключателей</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Замена дверей</li>
                        <!-- /.card__item -->
                     </ul>
                     <!-- /.card__list -->
                     <strong class="card__pricetag">
                        от 1800 руб / м<sup>2</sup>
                     </strong>
                  </div>
               </div>
               <!-- /.card__text -->
            </div>
            <!-- /.card -->
         </div>
         <!-- /.col-30 -->
         <div class="col-30">
            <div class="card">
               <img src="img/types/type-3.jpg" alt="Дизайнерский ремонт" class="card__image wow bounceInLeft delay-1s">
               <div class="card__text">
                  <div class="text_in_card  wow bounceInRight delay-1s">
                     <div class="card__title--fonts">
                        <h3 class="card_title">Дизайнерский ремонт</h3>
                     </div>
                     <!-- /.card_title -->
                     <ul class="card__list">
                        <li class="card__item">• Демонтаж старых покрытий</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Поклейка обоев</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Роспись стен и потолков</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Укладка полов</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Замена сантехники</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Замена розеток и выключателей</li>
                        <!-- /.card__item -->
                        <li class="card__item">• Замена дверей</li>
                        <!-- /.card__item -->
                     </ul>
                     <!-- /.card__list -->
                     <strong class="card__pricetag">
                        от 1800 руб / м<sup>2</sup>
                     </strong>
                  </div>
               </div>
               <!-- /.card__text -->
            </div>
            <!-- /.card -->
         </div>
         <!-- /.col-30 -->
      </div>
      <!-- /.row -->
   </div>
   <!-- /.container -->
</section>
<!-- /.section types -->
<!-- _____________________________конец секции___________________________ -->


<footer class="footer section--dark">
   <div class="container">
      <div class="footer__wrap">
         <h3 class="footer__title">Остались вопросы?</h3>
         <!-- /.footer__title -->
         <form action="#" method="POST" class="form footer__form">
            <div class="input-group footer__input-group">
               <label for="user-name" class="label form__label label--light">Имя</label>
               <input type="text" class="input form__input footer__input input--light" id="user-name" placeholder="Как вас зовут:">
            </div>
            <!-- /.input-group footer__input-group -->
            <div class="input-group footer__input-group">
               <label for="user-phone" class="label form__label label--light">Телефон</label>
               <input type="tel" class="input form__input footer__input input--light" id="user-phone" placeholder="Ваш номер телефона:">
            </div>
            <!-- /.input-group footer__input-group -->
            <div class="input-group footer__input-group footer__input-group--full-width">
               <label for="user-question" class="label form__label label--light">Вопрос</label>
               <input type="text" class="input form__input footer__input input--light" id="user-question" placeholder="Я хочу спросить:">
            </div>
            <!-- /.input-group footer__input-group -->
            <div class="policy footer__policy">
               <input type="checkbox" name="policy-checkbox" id="policy-checkbox" class="policy__checkbox" checked>
               <label for="policy-checkbox" class="policy__label policy__label--center">Я соглашаюсь с обработкой данных</label>
            </div>
            <!-- policy -->
            <button class="button button--primary footer__button">Отправить</button>
         </form>
         <!-- /.form footer__form -->

  <!-- /.map footer__map -->
      </div>
      <!-- /.footer-wrap -->
   <div class="adress">
      <div class="footer__adress">
         <h3 class="adress__text">Ростов на дону, Торговый центр Plaza<br>Прямой телефон +7 (999) 768 32 99</h3>
         <div class="footer__icons">
            <div class="footer__icons__link">
               <img src="img/mail-icon.svg" alt="" class="footer__icons__link--mail">
            </div>
            <div class="footer__icons__link">
               <img src="img/insta-icon.svg" alt="" class="footer__icons__link--instagram">
            </div>
         </div>
         <!-- /.footer__icons -->
      </div>
      <!-- /.footer__adress -->
            <div class="map footer__map ymaps-layers-pane" id="map">
               <!-- <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8f667c8cce1d91ba9188ba1e31cde48baf35d377d41a46375f6c3315473a8107&amp;width=66rem&amp;height=33.2rem&amp;lang=ru_RU&amp;scroll=true"></script> -->
            </div>
   </div>
<!-- /.adress -->

</div>
<!-- /.container -->

<div class="footer__menu">
   <div class="container">
      <div class="menu">
         <div class="logo animate heartBeat">Repair&nbsp;Design&nbsp;Project</div>
         <nav class="nav animated bounceInDown delay-3s">
            <a href="#" class="nav__item">Главная </a>
            <a href="#" class="nav__item">Проекты </a>
            <a href="#" class="nav__item">Замер </a>
            <a href="#" class="nav__item">Команда</a>
            <a href="#" class="nav__item">Отзывы</a>
            <a href="#" class="nav__item">Контакты</a>
         </nav>
         <div class="contacts menu__contacts">
            <!-- <div class="contacts__phone--hide"> -->
               <a href="tel:+7(999)7683299" class="phone contacts__phone"><span class="phone--text">+7 (999) 768-32-99</span></a>
            <!-- </div>    -->
            <!-- <div class="contacts__button--hide">  -->
               <button class="button contacts__button button--primary  animated bounceInDown delay-1s" data-toggle='modal'>Заказать звонок</button>
            <!-- </div>  -->
         </div>
      </div>
      <!-- _menu -->
   </div>
   <!-- /.container -->
</div>
<!-- /.footer__menu -->
</footer>
<!-- /.footer section--dark -->



<!-- <div class="background__design">
   <p></p> -->

   <!-- ___________________МОДАЛЬНОЕ ОКНО________________ -->
</div>
<div class="modal" id="modalid">
   <div class="modal__dialog">
      <button class="modal__close"></button>
      <h3 class="modal__title">
         Оставьте заявку и наш менеджер<br>свяжется с вами
      </h3>
      <form action="#" class="form modal__form">
         <div class="input-group modal__input-group">
            <label for="user-name" class="label form__label label--light">Имя</label>
         <input type="text" name="userName" class="input form__input modal__input input--light" id="user-name" placeholder="Как вас зовут:">
         </div>
         <div class="input-group modal__input-group">
            <label for="user-phone" class="label form__label label--light">Телефон</label>
         <input type="tel" name="userPhone" class="input form__input modal__input input--light" id="user-phone" placeholder="Ваш номер телефона:">
         </div>
         <div class="input-group modal__input-group">
            <label for="user-email" class="label form__label label--light">Email</label>
         <input type="email" name="userEmail" class="input form__input modal__input input--light" id="user-email" placeholder="Ваш email:">
         </div>
         <div class="policy modal__policy">
            <input type="checkbox" name="policy-checkbox" id="policy-checkbox" class="policy__checkbox" checked>
            <label for="policy-checkbox" class="policy__label">я соглашаюсь с обработкой данных</label>
         </div>
         <!-- policy -->
         <button class="button button--primary modal__button">Отправить заявку</button>
      </form>
      <!-- /.form modal__form -->
   </div>
   <!-- /.modal__dialog -->
</div>

<button style="position: absolute; top: 456px; right: 0px; display:none;" class="buttonup"></button>
<!-- /.modal -->
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<!-- <script src="https://code.jquery.com/jquery.vide.min.js"></script> -->
<script src="js/jquery.vide.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
<script src="js/wow.min.js"></script>
<script>
new WOW().init();
</script>
<script src="js/jquery.validate.min.js"></script>
<script src="js/jquery.mask.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>
