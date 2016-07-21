console.log('script from cutsoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm1');


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
	
	if(y){
		if(n>y){
		a = 1;
		}
		else if(n<=0){
			a = x.length;
		}
		for(i=0;i<x.length;i++){
			
			x[i].style.display="none";

		}
		x[a-1].style.display="block";
		b = a-1;
	
	// x[a-1].animateCss('bounce');
	// $('.itemss:eq('+b+')').removeClass('animated flipOutX');
	$('.itemss:eq('+b+')').addClass('animated flipInY');
}
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
	if(y1){
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
}



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
	// $('.list-season li a.active').click(function(){
		var a = $('.list-season li.active a').attr("value");
		$('#year').text(a);
	// })
	$('.list-season li a').eq(0).click(function(){
		var a = $('.list-season li a').eq(0).attr("value");
		$('#year').text(a);
	})
	$('.list-season li a').eq(1).click(function(){
		var a = $('.list-season li a').eq(1).attr("value");
		$('#year').text(a);
	})
	$('.list-season li a').eq(2).click(function(){
		var a = $('.list-season li a').eq(2).attr("value");
		$('#year').text(a);
	})
	$('.list-season li a').eq(3).click(function(){
		var a = $('.list-season li a').eq(3).attr("value");
		$('#year').text(a);
	})
	$('.list-season li a').eq(4).click(function(){
		var a = $('.list-season li a').eq(4).attr("value");
		$('#year').text(a);
	})
	$('.list-season li a').eq(5).click(function(){
		var a = $('.list-season li a').eq(5).attr("value");
		$('#year').text(a);
	})
	$('.list-season li a').eq(6).click(function(){
		var a = $('.list-season li a').eq(6).attr("value");
		$('#year').text(a);
	})
})

//tab2


$(document).ready(function(){
	// $('.list-season li a.active').click(function(){
		var a = $('.list-season2 li.active a').attr("value");
		$('#year2').text(a);
	// })
	$('.list-season2 li a').eq(0).click(function(){
		var a = $('.list-season2 li a').eq(0).attr("value");
		$('#yea2r').text(a);
	})
	$('.list-season2 li a').eq(1).click(function(){
		var a = $('.list-season2 li a').eq(1).attr("value");
		$('#year2').text(a);
	})
	$('.list-season2 li a').eq(2).click(function(){
		var a = $('.list-season2 li a').eq(2).attr("value");
		$('#year2').text(a);
	})
	$('.list-season2 li a').eq(3).click(function(){
		var a = $('.list-season2 li a').eq(3).attr("value");
		$('#year2').text(a);
	})
	$('.list-season2 li a').eq(4).click(function(){
		var a = $('.list-season2 li a').eq(4).attr("value");
		$('#year2').text(a);
	})
	$('.list-season2 li a').eq(5).click(function(){
		var a = $('.list-season2 li a').eq(5).attr("value");
		$('#year2').text(a);
	})
	$('.list-season2 li a').eq(6).click(function(){
		var a = $('.list-season2 li a').eq(6).attr("value");
		$('#year2').text(a);
	})






})


///accord

var acc = document.getElementsByClassName('accord');
if(acc.length){
	var i ;
	for(i = 0; i<acc.length;i++){
		acc[i].onclick = function(){
			 this.classList.toggle("actv");
        	this.nextElementSibling.classList.toggle("show");
		}
	}
}


$(document).ready(function(){
	$('thead tr th:first-child').addClass("text-left");
	$('tbody tr td:first-child').addClass("text-left");
	$('tbody tr td:first-child').addClass("bg777");
	$('tbody tr td:first-child').next().next().addClass("bg777");
	// $('#datetimepicker1').datetimepicker();


	$('.datepicker-days table').addClass(".table-bordered");


  


})
$(document).ready(function(){
        var date_input=$('input[name="date"]'); //our date input has the name "date"
        var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
        date_input.datepicker({
            format: 'mm/dd/yyyy',
            container: container,
            todayHighlight: true,
            autoclose: true,
        })
        $('.datepicker-days table').addClass("table-bordered");
    })
