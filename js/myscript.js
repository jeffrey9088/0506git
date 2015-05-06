$(function() {

  var duration=300;

  $('.service button')
  .on('mouseover',function(){
    $(this).stop(true).animate({
      backgroundColor:'#faee00',
      color:'#000'
    },duration);
    $(this).find('img:first-child').stop(true).animate({
      opacity:0
    },duration);
    $(this).find('img:nth-child(2)').stop(true).animate({
      opacity:1
    },duration);
  })

  .on('mouseout',function(){
    $(this).stop(true).animate({
      backgroundColor:'#fff',
      color:'#01b169'
    },duration);
    $(this).find('img:first-child').stop(true).animate({
      opacity:1
    },duration);
    $(this).find('img:nth-child(2)').stop(true).animate({
      opacity:0
    },duration);
  });

  //幻燈片
  var $slides = $('.slideshow').find('img'),
        //find不只找下ㄧ層子元素，而是所有子層都會去找
        slideCount = $slides.length,
        currentIndex = 0;

        // console.log($slides.eq(currentIndex).attr('src'));
        $slides.eq(currentIndex).fadeIn();
    //eq(index) 代表取得jquery物件陣列中的第幾個
    //fadeIn() 則是將display:none不顯示的項目使用淡入呈現

    setInterval(showNextSlide,3000);
    //js原生語法:1.要做的function, 2.間隔時間

    function showNextSlide(){
      var nextIndex = (currentIndex+1)%slideCount;
      $slides.eq(currentIndex).fadeOut();
      //fadeOut() = 淡出
      $slides.eq(nextIndex).fadeIn();
      currentIndex = nextIndex;
    }

$('.tumbnail').each(function(i,item){
$(item).click(function(){
var $lightbox = $('#lightbox');

var title = $(this).find('p').html();console.log($(this).find('p').html());
$lightbox.find('h1').text(title);

var imgPath = $(this).find('img').attr('src');
$lightbox.find('img').attr('src',imgPath);
$lightbox.show(500,'swing');
});
});

$('body').click(function(e){
if(e.target.id=='lightbox'){
$('#lightbox').hide();
}
});


var $window = $(window),
$nav = $('.nav'),
navOffsetTop = $nav.offset().top;

$window.on('scroll',function(){
if($window.scrollTop()>navOffsetTop){
$nav.addClass('sticky'); 
}else{
$nav.removeClass('sticky');
}
});

$window.trigger('scroll');

});

