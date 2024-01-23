let burger = $('.menu-trigger');

burger.each(function (index) {
  let $this = $(this);

  $this.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active-' + (index + 1));
    $('.menu').toggleClass('active');
  })
})

$('.portfolioIcon').click(function () {
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
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false 
  },
  autoHeight : true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


$("#inputForm").validate({
  rules: {
    name : {
      required : true,
    },
    email : {
      required : true,
      email: true
    },
    msg : {
      required : true,
    }
  },
  messages: {
    name: {
        required: "이름을 입력해주세요.",
    },
    email: {
        required: "이메일을 입력해주세요",
        email: "abc@abc.com형식으로 입력해주세요."
    },
    msg: {
      required: "내용을 입력해주세요",
    }
  },
  submitHandler: function(){
    console.log("submit!");
  }
});

const modal = document.querySelector('#m1');
const btnOpenModal=document.querySelector('.btn-open-modal');

btnOpenModal.addEventListener("click", ()=>{
    modal.style.display="block";
});

const modal1 = document.querySelector('#m2');
const btnOpenModal1=document.querySelector('.btn-open-modal1');

btnOpenModal1.addEventListener("click", ()=>{
    modal1.style.display="block";
});