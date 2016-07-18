console.log('script from cutsom1');


// $(document).ready(function() {
 
//   $("#owl-demo").owlCarousel({
 
//       navigation : true, // Show next and prev buttons
//       slideSpeed : 300,
//       paginationSpeed : 400,
//       singleItem:true
 
//       // "singleItem:true" is a shortcut for:
//       // items : 1, 
//       // itemsDesktop : false,
//       // itemsDesktopSmall : false,
//       // itemsTablet: false,
//       // itemsMobile : false
 
//   });
 
// });
$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 1, //10 items above 1000px browser width
      itemsDesktop : [1000,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,0], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      // autoPlay:true;

  });
	
	 // $(".subslider").addClass('animated flipInY');
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next'); 
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
      owl.trigger('owl.play,',1000);//owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
});


$(document).ready(function() {
 
  var owl = $("#owl-2");
 
  owl.owlCarousel({
      items : 1, //10 items above 1000px browser width
      itemsDesktop : [1000,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      // singleItem:true;
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
});


$(document).ready(function() {
 
  var owl = $("#owl-3");
 
  owl.owlCarousel({
      items : 1, //10 items above 1000px browser width
      itemsDesktop : [1000,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      // singleItem:true;
  });
 
  // Custom Navigation Events
  $(".next3").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev3").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play3").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop3").click(function(){
    owl.trigger('owl.stop');
  })
 
});
// slide show----------------------------------------------
var a = 1;
showsl(a);
function plusdiv(n){
	showsl(a+=n);
}
function showsl(n){
	var x = document.getElementsByClassName("itemss");
	var y = x.length;
	if(n>y){
		a = 1;
	}
	else if(n<=0){
		a = x.length;
	}
	for(i=0;i<x.length;i++){
		
		x[i].style.display="none";

	}
	b = a-1;
	x[b].style.display="block";
	
	// x[a-1].animateCss('bounce');
	// $('.itemss:eq('+b+')').removeClass('animated flipOutX');
	$('.itemss:eq('+b+')').addClass('animated flipInY');
}


//----------------------------------------------------------

//owl4
$(document).ready(function() {
 
  var owl = $("#owl-4");
 
  owl.owlCarousel({
      items : 7, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [768,0], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      // singleItem:true;
  });
 
  // Custom Navigation Events
  $(".next4").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev4").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play3").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop3").click(function(){
    owl.trigger('owl.stop');
  })
 
});

//--------------------------------
var a1 = 1;
showsls(a1);
function plusdivs(n){
	showsls(a1+=n);
}
function showsls(n){
	var x1 = document.getElementsByClassName("itemtw");
	var y1 = x1.length;
	if(n>y1){
		a1 = 1;
	}
	else if(n<=0){
		a1 = x1.length;
	}
	for(i=0;i<x1.length;i++){
		
		x1[i].style.display="none";

	}
	x1[a1-1].style.display="block";
	b1 = a1-1;
	// x[a-1].animateCss('bounce');
	// $('.itemss:eq('+b+')').removeClass('animated flipOutX');
	$('.itemtw:eq('+b1+')').addClass('animated flipInY');
}


$(document).ready(function(){
	

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
	


	$('.owl-wrapper').addClass('container');
});
