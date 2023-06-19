$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [    {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            }
        },]
        });
        // переключение вкладок с помощью библиотеки jquery
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });
        // скрипт для раскрывающихся ссылок * подробнее и назад
        // он находится в таком абстрактном калькуляторе и может переиспользоваться в одной строчке без повторений огромных кусков кода
        function toggleSlide(item) {
            $(item).each(function(i) {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                })
            })
        };

        toggleSlide('.catalog-item__link')
        toggleSlide('.catalog-item__back');
});