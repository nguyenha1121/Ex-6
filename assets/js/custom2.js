console.log('script from cutsom2');
$(document).ready(function () {
	// body...
	$('.make').addClass("butshadow");
	


	$('.ctnav li').click(function(){
		$('.gs').css("display","none");
		$('.gs2').css("display","none");
		$(this).children('div').children('.gs').css("display","block");
		$(this).children('div').children('.gs2').css("display","block");
	});
	$('.ce').addClass('animated');
	$('.ce').addClass('fadeInRight');
})