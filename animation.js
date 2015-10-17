var x = 0;
var y = 0;
var z = 0;
var w = 0;

var anime = function(){
	var a123 = $('.a123');
	var a321 = $('.a321');

	var f = ['to_right','to_top'];
	var s = ['to_left','to_down'];

	a123.css('animation',f[x]+' 1s linear');
	a321.css('animation',s[y]+' 1s linear');

	x += 1;
	y += 1;
	if(x >= 2) x = 0;
	if(y >= 2) y = 0;
}

var bnime = function(){
	var a123 = $('.b123');
	var a321 = $('.b321');

	var f = ['to_right','to_top'];
	var s = ['to_left','to_down'];

	a123.css('animation',f[z]+' 1s linear');
	a321.css('animation',s[w]+' 1s linear');
	a123.css('display','block');
	a321.css('display','block');

	z += 1;
	w += 1;
	if(z >= 2) z = 0;
	if(w >= 2) w = 0;
}

window.onload = function(){
	anime();
	setInterval(anime, 1000);
	setInterval(bnime, 1000);
}

