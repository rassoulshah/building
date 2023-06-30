$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
        ;
    }
    var accordion = new Accordion($('#accordion'), false);
});

$(document).ready(function () {

    $('#menu-btn').click(function () {
        $('#menu-mob').toggleClass('active');
        $('#close-menu-bg').toggleClass('active');
    });

    $('#menu-mob-close').click(function () {
        $('#menu-mob').toggleClass('active');
        $('#close-menu-bg').toggleClass('active');
    });

    $('#close-menu-bg').click(function () {
        $('#menu-mob').toggleClass('active');
        $('#close-menu-bg').toggleClass('active');
    });

});

$(function () {
    var Accordion2 = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion2.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
        ;
    }
    var accordion2 = new Accordion2($('#accordion2'), false);
});
var rellax = new Rellax('.rellax');

$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});
$('.owl-product').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    lazyLoad: true,
    loop: true,
    dots: true,
    dotsContainer: '#dots-products',
    nav: false,
    rtl: true,
    responsive: {
        0: {
            items: 1
        },
        550: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})