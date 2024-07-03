//인트로 페이지 fadeout
$(window).on('load', function(){
    setTimeout(function(){
        $('.intro').fadeOut();
        $('html').css('overflow', 'visible');
    }, 2000);
});


const slide = $('.slide div');
let idx = 0;

function slideFn() {
	slide.removeClass('on');
	slide.eq(idx).addClass('on');
	idx++;
	if (idx == slide.length) {
		idx = 0;
	}
}
setInterval(() => {
	slideFn();
}, 3000);


$('.player-info__wrap').click(function(){
    $('.player-info__wrap').css('display', 'none');
})
$('.close-info').click(function(){
    $('.desc-wrap').css('display', 'none');
})


$('.btn-a').click(function(){
    $('.attacker').css('display', 'flex');
});
$('.rashford').click(function(){
    $('.rashford-info').css('display', 'flex');
})
$('.hojlund').click(function(){
    $('.hojlund-info').css('display', 'flex');
})
$('.garnacho').click(function(){
    $('.garnacho-info').css('display', 'flex');
})
$('.anthony').click(function(){
    $('.anthony-info').css('display', 'flex');
})

$('.btn-m').click(function(){
    $('.midfielder').css('display', 'flex');
})
$('.bruno').click(function(){
    $('.bruno-info').css('display', 'flex');
})
$('.casemiro').click(function(){
    $('.casemiro-info').css('display', 'flex');
})
$('.mount').click(function(){
    $('.mount-info').css('display', 'flex');
})
$('.mainoo').click(function(){
    $('.mainoo-info').css('display', 'flex');
})
$('.mctominay').click(function(){
    $('.mctominay-info').css('display', 'flex');
})



$('.btn-d').click(function(){
    $('.defender').css('display', 'flex');
})
$('.martinez').click(function(){
    $('.martinez-info').css('display', 'flex');
})
$('.maguire').click(function(){
    $('.maguire-info').css('display', 'flex');
})
$('.dalot').click(function(){
    $('.dalot-info').css('display', 'flex');
})
$('.bissaka').click(function(){
    $('.bissaka-info').css('display', 'flex');
})
$('.shaw').click(function(){
    $('.shaw-info').css('display', 'flex');
})


$('.btn-g').click(function(){
    $('.goalkeeper').css('display', 'flex');
})
$('.onana').click(function(){
    $('.onana-info').css('display', 'flex');
})
$('.bayindir').click(function(){
    $('.bayindir-info').css('display', 'flex');
})