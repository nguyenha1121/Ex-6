console.log('some jquery plugin');

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
