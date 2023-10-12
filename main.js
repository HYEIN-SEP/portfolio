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
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  dots: true
});
