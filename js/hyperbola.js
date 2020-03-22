 // Hyperbola字體動畫
 anime({
    targets: "#hyperbola path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutQuad",
    duration: 2500,
    direction: "alternate",
delay: function(el, i) {
    return i * 100;
},
    loop: false
});
anime({
    targets: "#hyperbola path.wordOutline",
    easing: "easeInOutQuad",
    duration: 2000,
    delay: 2400,
    fill: "#ffff00"
});

//   時間軸
$(".dot:nth-child(1)").click(function(){
    $(".inside").animate({
        width: "11%"
    },500);
});
$(".dot:nth-child(2)").click(function(){
    $(".inside").animate({
        width: "22%"
    },500);
});
$(".dot:nth-child(3)").click(function(){
    $(".inside").animate({
        width: "33%"
    },500);
});
$(".dot:nth-child(4)").click(function(){
    $(".inside").animate({
        width: "44%"
    },500);
});
$(".dot:nth-child(5)").click(function(){
    $(".inside").animate({
        width: "55%"
    },500);
});
$(".dot:nth-child(6)").click(function(){
    $(".inside").animate({
        width: "66%"
    },500);
});
$(".dot:nth-child(7)").click(function(){
    $(".inside").animate({
        width: "77%"
    },500);
});
$(".dot:nth-child(8)").click(function(){
    $(".inside").animate({
        width: "88%"
    },500);
});
$(".exhibition_img.nobox.one").fadeIn(200);
$(".dot").click(function() {
    var modal = $(this).attr("id");
    $(".exhibition_img.nobox").hide();
    $(".exhibition_img.nobox." + modal).fadeIn(200);
});

// 時尚消息swiper
// Params
var sliderSelector = '.swiper-container',
    options = {
      init: false,
      loop: true,
      speed:800,
      slidesPerView: 2, // or 'auto'
      // spaceBetween: 10,
      centeredSlides : true,
      effect: 'coverflow', // 'cube', 'fade', 'coverflow',
      coverflowEffect: {
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows : true, // Enables slides shadows
      },
      grabCursor: true,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1023: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      // Events
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        }
      }
    };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();