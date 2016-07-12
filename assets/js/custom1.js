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
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
      
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
		// z
		x[i].style.display="none";

	}
	x[a-1].style.display="block";
	b = a-1;
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
      itemsDesktop : [1000,6], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,5], // betweem 900px and 601px
      itemsTablet: [600,4], //2 items between 600 and 0
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
