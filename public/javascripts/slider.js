$(function(){
	var w = $("#slider").width();
	$("#slider").mouseover(function(){ //滑鼠滑入時
		if ($("#slider").css('left') == '-280px')
		{
			$("#slider").animate({ left:'0px' }, 200 ,'swing');//$(目標物).animate({left: '###px'}, 動畫時間, '移動方式')
		}
	});
	
	
	$("#slider").mouseleave(function(){　//滑鼠離開後
		$("#slider").animate( { left:'-280px' }, 200 ,'swing');	
	});	
});