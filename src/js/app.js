// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as functions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
//functions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
// functions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
functions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
// functions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// functions.fullVHfix();

/*
Модуль работы со спойлерами
Документация: https://template.fls.guru/template-docs/modul-spojlery.html
Сниппет (HTML): spollers
*/
// functions.spollers();

/*
Модуль работы с табами
Документация: https://template.fls.guru/template-docs/modul-taby.html
Сниппет (HTML): tabs
*/
// functions.tabs();

/*
Модуль "показать еще"
Документация: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сниппет (HTML): showmore
*/
// functions.showMore();

/*
Попапы
Документация: https://template.fls.guru/template-docs/funkcional-popup.html
Сниппет (HTML): pl
*/
// import './libs/popup.js'

/*
Модуль параллакса мышью
Документация: 
Сниппет (HTML): 
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Работа с формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
//import * as forms from "./files/forms/forms.js";

/* Работа с полями формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */
// forms.formFieldsInit({ viewPass: false });

/* Oтправка формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */
// forms.formSubmit();

/* Модуль формы "колличество" */
// forms.formQuantity();

/* Модуль звездного рейтинга */
// forms.formRating();

/* Модуль работы с select. */
// import './libs/select.js'

/* Модуль работы с календарем */
// import './files/forms/datepicker.js'


/* (В работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
Документация по работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль работы с ползунком */
/*
Подключение и настройка выполняется в файле js/files/forms/range.js
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
// import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем к блоку атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок
// Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
// import './files/scroll/lazyload.js';

// Наблюдатель за объектами c атрибутом data-watch
// Документация: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сниппет(HTML):
// import './libs/watcher.js'

// Функции работы скроллом
//import * as scroll from "./files/scroll/scroll.js";

// Плавная навигация по странице
// Документация: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// scroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
// Документация: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// scroll.headerScroll();

// Функционал липкого блока
// scroll.stickyBlock();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: 
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Прочие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптив */
// Документация: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
// import "./libs/dynamic_adapt.js";

/* Форматирование чисел */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Прочее ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */
//import "./files/script.js";
//============================================================================================================================================================================================================================================