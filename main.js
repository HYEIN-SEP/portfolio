let burger = $('.menu-trigger');

burger.each(function (index) {
  let $this = $(this);

  $this.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active-' + (index + 1));
    $('nav').toggleClass('active');
  })
})


$('.pf_web').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true
});
