let burger = $('.menu-trigger');

burger.each(function (index) {
  let $this = $(this);

  $this.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active-' + (index + 1));
    $('.menu').toggleClass('active');
  })
})

$.getJSON('./data.json',
function(data){
    let id = getParameter("id");
    var html = [];

    $.each(data, function(i, item){
        console.log(item);
        html.push('<div class="contentWrap" id= ct_'+item.id+'>');
        html.push('<div class="content">');
        html.push('<p class="green">' + item.order + ' </p>');
        html.push('<h4>'+ item.title +'</h4>');
        html.push('<p class="green">프로젝트 목표</p>');
        html.push('<p>'+ item.purpose +'</p>');
        html.push('<p class="green">제작기간</p>');
        html.push('<p>' + item.date +'</p>');
        html.push('<p class="green">담당파트</p>');
        html.push('<p>' + item.part + '</p>');
        html.push('<p class="green">참여율</p>');
        html.push('<p>'+ item.rate +'</p>');
        html.push('<p class="green">사용언어 및 프로그램</p>');

        html.push('<div class="icon">');
        $.each(item.icon, function(i, ic){
            html.push('<div>');
            html.push('<img src=' + ic.url + ' alt="아이콘">');
            html.push('<p>'+ ic.name +'</p>');
            html.push('</div>');
        });
        html.push('</div>');

        html.push('</div>');
        html.push('<div class="monitor">');
        html.push('<img src='+ item.img +' alt="사이트이미지">');
        html.push('<a class="btn" href=' + item.site + ' target="blank">');
        html.push('<span>사이트 보러가기</span>');
        html.push('</a>');
        html.push('</div>');
        html.push('</div>');
        html.push('</div>');
    });
    $(".portfolioContents").html(html.join(''));

    $('.contentWrap').hide();
    $('.contentWrap:first-child').show();
    $(".portfolioList li").click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      let idx = $(this).index() + 1
      $('#ct_' + idx).show();
      $('#ct_' + idx).siblings().hide();
    })
    $(".portfolioList li:nth-child("+id+")").click();
    //html에 active안 넣고 js로 설정


    
});

function getParameter(key) {
  const urlParams = new URL(location.href).searchParams;
  ///portfolio.html?id=3
  const val = urlParams.get(key);
  ///key(id)의 값을 val에 넣음 =1;

  return (val?val:1);
};

$('html, body').animate({
  scrollTop: $('.portfolioListWrap').offset().top
}, 'fast'); 
