$(document).ready(function(){
	alert ("hgj");

	if (window.matchMedia('(max-width: 767px)').matches){
		$('#accordion1 .accordion').hide();
		$('#accordion1 div p.clickme').click(function(){
			$acc = $(this).next().next();
			if($acc.is(':hidden')===true){
				$('#accordion1 .accordion').slideUp();
				$acc.slideDown();
				$('#accordion1 div p.clickme').css("color","#000");
				$(this).css("color","#6c5098");
			}
			else{
				$acc.slideUp();
				$('#accordion1 div p.clickme').css("color","#000");
			}
		});

		$('.accordion2 div .accordions').hide();
		$('.accordion2 div .heading-latest').click(function(){
			$acc2 = $(this).next();
			if($acc2.is(':hidden')===true){
				$('.accordion2 div .accordions').slideUp();
				$acc2.slideDown();
				$('.accordion2 div .heading-latest').css("color","#000");
				$(this).css("color","#6c5098");
			}
			else{
				$acc2.slideUp();
				$('.accordion2 div .heading-latest').css("color","#000");
			}
		});



		$('.meetitem').hide();
		for(i=0;i<5;i++){
			$('.meetitem').eq(i).slideDown();
		}
		j = 0;
		
		$('.acc-showmore').click(function(i){
			if(j==0){
				$('.meetitem').slideDown();
				j=1;
			}
			else{
				$('.meetitem').hide();
				for(k=0;k<5;k++){
					$('.meetitem').eq(k).slideDown();
				}
				j=0;
			}
		});
	};
	


	$('#owl-4 div .owl-wrapper').addClass('container');
});