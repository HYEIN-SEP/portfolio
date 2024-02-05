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
let next = $('.msgNext');
let slides_idx = 0;

next.click(function () {
  slides_idx++;
  let transX = -100*slides_idx;
  slides.css({ 
    transform: 'translateX(' + transX + '%)',
    transition : '.5s' });
  console.log(slides_idx)
  if(slides_idx > 2) {
    next.hide();
  }
})

var swiper = new Swiper(".mySwiper", {
  observer: true, 
  observeParents: true,
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  autoHeight : true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$.getJSON('./main.json',function(data){
  let html = [];
  let html1 = [];
  let modal = [];

  $.each(data.web, function(i, item){
    html.push('<div class="swiper-slide box">')
    html.push('<img src="'+ item.img +'" alt="">')
    html.push('<hr>')
    html.push('<div>')
    html.push('<p>'+ item.order +'</p>')
    html.push('<h6>'+ item.title +'</h6>')
    html.push('<a href="'+ item.url +'">')
    html.push('<button>바로가기</button>')
    html.push('</a>')
    html.push('</div>')
    html.push('</div>')
  })
  $('#swiper_1').html(html.join(''));

  $.each(data.design, function(d, dn){
    html1.push('<div class="swiper-slide box">')
    html1.push('<img src="'+ dn.img +'" alt="">')
    html1.push('<hr>')
    html1.push('<div>')
    html1.push('<p>'+ dn.sort +'</p>')
    html1.push('<h6>'+ dn.title +'</h6>')
    html1.push('<button class="mBTn" id="mBtn_'+dn.id+'">자세히보기</button>')
    html1.push('</div>')
    html1.push('</div>')

    modal.push('<div class="modalWrap" id="m_'+dn.id+'">')
    modal.push('<div class="modalContent">')
    modal.push('<div class="modalClose">')
    modal.push('<i class="fa-solid fa-circle-xmark"></i>')
    modal.push('</div>')
    modal.push('<img src="'+dn.detail+'" alt="">')
    modal.push('</div>')
    modal.push('</div>')
  })
  $('#swiper_2').html(html1.join(''));
  $('.white_back').after(modal.join(''));


  for(i=0;i<data.design.length;i++){
    let idx = data.design[i].id
    let modalId = $('#m_'+idx+'');
    let btnId=$('#mBtn_'+idx+'');

    btnId.on("click", ()=>{
      modalId.css("display","block");
    });
  }

  $('.modalClose').click(function(){
    $('.modalWrap').css("display","none");
  })

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