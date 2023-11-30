let burger = $('.menu-trigger');

burger.each(function (index) {
  let $this = $(this);

  $this.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active-' + (index + 1));
    $('.menu').toggleClass('active');
  })
})

$('.pf_icon').click(function () {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  let idx = $(this).index() + 1
  $('#pf_cont_' + idx).addClass('active');
  $('#pf_cont_' + idx).siblings().removeClass('active');
})


let slides = $('.msg li');
let next = $('.next');
let slides_idx = 0;

next.click(function () {
  slides_idx++;
  let transX = -100*slides_idx;
  slides.css({ transform: 'translateX(' + transX + '%)' });
  console.log(slides_idx)
  if(slides_idx > 2) {
    next.hide();
  }
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
