$(document).ready(function(){
	// if (window.matchMedia('(min-width: 767px),(max-width: 991px)').matches){
	// 	$('ul.nav.navbar-nav.navbar-right.ctnav.up.imenu:first-child:first-child').addClass("pddl0");
	// }

	if (window.matchMedia('(max-width: 767px)').matches){

		$('.frc3 .row .col-md-7.col-sm-7').addClass("col-xs-7");
		$('.frc3 .row .col-md-5.col-sm-5').addClass("col-xs-5");
		$('#accordion1 .accordion').hide();
		$('#accordion1 div p.clickme').click(function(){
			$title = $(this);
			$acc = $(this).next().next();
			if($acc.is(':hidden')===true){
				$('#accordion1 .accordion').slideUp();
				$('.clickme').removeClass('actv');
				$acc.slideDown();
				$title.addClass("actv");
				$('#accordion1 div p.clickme').css("color","#000");
				$(this).css("color","#6c5098");
			}
			else{
				$title.removeClass("actv")
				$acc.slideUp();
				$('#accordion1 div p.clickme').css("color","#000");
			}
		});

		// var acc = document.getElementsByClassName('clickme');
		// if(acc.length){
		// 	var i ;
		// 	for(i = 0; i<acc.length;i++){
		// 		acc[i].onclick = function(){
		// 			this.classList.toggle("actv");
		//         	this.nextElementSibling.classList.toggle("show");
		// 		}
		// 	}
		// }


		$('.accordion2 div .accordions').hide();
		$('.accordion2 div .heading-latest').click(function(){
			$titles = $(this);
			$acc2 = $(this).next();
			if($acc2.is(':hidden')===true){
				$('.accordion2 div .accordions').slideUp();
				$('.clickme').removeClass('actv');
				$acc2.slideDown();
				$titles.addClass("actv");
				$('.accordion2 div .heading-latest').css("color","#000");
				$(this).css("color","#6c5098");
			}
			else{
				$acc2.slideUp();
				$('.accordion2 div .heading-latest').css("color","#000");
				$titles.removeClass("actv")
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