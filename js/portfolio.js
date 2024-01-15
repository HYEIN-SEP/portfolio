$.getJSON('./data.json',
function(data){
    var html = [];
    var icons = [];

    $.each(data, function(i, item){
        console.log(item);
            html.push('<div class="contentWrap">');
            html.push('<div class="content">');
            html.push('<p class="green">' + item.id + 'project</p>');
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

                $.each(data, function(i, item){
                    html.push('<div class="icon">');
                    html.push('<div>');
                    html.push('<img src=' + item.icon.url + 'alt="아이콘">');
                    html.push('<p>'+ item.icon.name +'</p>');
                    html.push('</div>');
                    html.push('</div>');
                });

            html.push('</div>');
            html.push('<div class="monitor">');
            html.push('<img src='+ item.img +' alt="사이트이미지">')
            html.push('<a class="btn" href="https://hyein-sep.github.io/riotgames_renewal/" target="_blank">')
            html.push('<span>사이트 보러가기</span>')
            html.push('</a>')
            html.push('</div>')
            html.push('</div>')
            html.push('</div>')
    });
    $(".portfolioContents").html(html.join(''));
    // $(".icon").html(icons.join(''));
});

