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
$(".dot:nth-child(1)").click(function() {
  $(".inside").animate(
    {
      width: "11%"
    },
    500
  );
});
$(".dot:nth-child(2)").click(function() {
  $(".inside").animate(
    {
      width: "22%"
    },
    500
  );
});
$(".dot:nth-child(3)").click(function() {
  $(".inside").animate(
    {
      width: "33%"
    },
    500
  );
});
$(".dot:nth-child(4)").click(function() {
  $(".inside").animate(
    {
      width: "44%"
    },
    500
  );
});
$(".dot:nth-child(5)").click(function() {
  $(".inside").animate(
    {
      width: "55%"
    },
    500
  );
});
$(".dot:nth-child(6)").click(function() {
  $(".inside").animate(
    {
      width: "66%"
    },
    500
  );
});
$(".dot:nth-child(7)").click(function() {
  $(".inside").animate(
    {
      width: "77%"
    },
    500
  );
});
$(".dot:nth-child(8)").click(function() {
  $(".inside").animate(
    {
      width: "88%"
    },
    500
  );
});
$(".exhibition_img.nobox.one").fadeIn(200);
$(".dot").click(function() {
  var modal = $(this).attr("id");
  $(".exhibition_img.nobox").hide();
  $(".exhibition_img.nobox." + modal).fadeIn(200);
});



let data = {
  typeList: [
    '新研發' , '特殊' , '機能' , '防風' , '針織' , '雙織物'
  ],
  products: [
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/D3334-2-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/ER006-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/ER017-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/PP101-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/PP102-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/PP146-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/S21011-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/S21014-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/S21057-3-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/S21744-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/SA095-4-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/SA198-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/SC684-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/SF001-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/SH030-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/SP137-2-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/SP434-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/SP550-1-2.jpg'} ,
    { type : '特殊' , link : 'http://hyperbola.com.tw/ITEM/SQ001-1-2.jpg'} ,
    
    { type : '新研發' , link : 'http://hyperbola.com.tw/ITEM/PD129-1-2.jpg'} ,
    { type : '新研發' , link : 'http://hyperbola.com.tw/ITEM/PD164-1-2.jpg'} ,
    { type : '新研發' , link : 'http://hyperbola.com.tw/ITEM/PP130-1-2.jpg'} ,
    { type : '新研發' , link : 'http://hyperbola.com.tw/ITEM/PR013-1-2.jpg'} ,
    { type : '新研發' , link : 'http://hyperbola.com.tw/ITEM/S2538-1-2.jpg'} ,
    { type : '新研發' , link : 'http://hyperbola.com.tw/ITEM/S2990-1-2.jpg'} ,
    { type : '新研發' , link : 'http://hyperbola.com.tw/ITEM/SP550-1-2.jpg'} ,
    { type : '新研發' , link : 'http://hyperbola.com.tw/ITEM/SQ001-1-2.jpg'} ,
    { type : '新研發' , link : 'http://hyperbola.com.tw/ITEM/SR432-1-2.jpg'} ,
    { type : '新研發' , link : 'http://hyperbola.com.tw/ITEM/SR465-1-2.jpg'} ,
    { type : '新研發' , link : 'http://hyperbola.com.tw/ITEM/SW451-1-2.jpg'} ,
  ]
}

let vm = new Vue({
  el: '#products',
  data: data,
  computed: {
    typeFilter(){
      console.log(this);
      
    //   return this.products.filter(item => {
    //     return item.type == "新研發"
    //   })
    }
  }
})




// 時尚消息swiper
// Params
var sliderSelector = ".swiper-container",
  options = {
    init: false,
    loop: true,
    speed: 800,
    slidesPerView: 2, // or 'auto'
    // spaceBetween: 10,
    centeredSlides: true,
    effect: "coverflow", // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
      rotate: 50, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: true // Enables slides shadows
    },
    grabCursor: true,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1023: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    },
    // Events
    on: {
      imagesReady: function() {
        this.el.classList.remove("loading");
      }
    }
  };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();
