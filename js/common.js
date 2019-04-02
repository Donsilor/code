//展开收起
$('.content_list .title').click(function(){
	$(this).nextAll().toggle();
})

$('.synthesize').click(function(){
	$('.popups').show();
	$('.popups_filtrate').show().siblings().hide();
	$('.shade').show();
	$('.middle_line span i').removeClass('on');
	$('.filtrate span i').removeClass('on');
	$(this).children().addClass('on');
})
$('.middle_line').click(function(){
	$('.popups').show();
	$('.popups_synthesize').show().siblings().hide();
	$('.shade').show();
	$('.synthesize i').removeClass('on');
	$('.filtrate span i').removeClass('on');
	$(this).children().children().addClass('on');
})
$('.filtrate').click(function(){
	$('.popups').show();
	$('.popups_kind').show().siblings().hide();
	$('.shade').show();
	$('.synthesize i').removeClass('on');
	$('.middle_line span i').removeClass('on');
	$(this).children().children().addClass('on');
})

$('.option').click(function(){
	$('.option').removeClass('on');
	$(this).addClass('on');
})
$('.popups_kind span').click(function(){
	$(this).addClass('on').siblings().removeClass('on');
})
$('.popups .confirm').click(function(){
	$('.popups').hide();
	$('.shade').hide();
	$('.select i').removeClass('on');
})
$('.popups_filtrate li').click(function(){
	$(this).addClass('on').siblings().removeClass('on');
})