let burger = $('.menu-trigger');

burger.each(function (index) {
  let $this = $(this);

  $this.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active-' + (index + 1));
    $('.menu').toggleClass('active');
  })
})

$('.pfContent').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true
});

$('.pf_icon').click(function () {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  let idx = $(this).index() + 1
  $('#pf_cont_' + idx).addClass('active');
  $('#pf_cont_' + idx).siblings().removeClass('active');
})


$('.next').click(function(){
  
})
