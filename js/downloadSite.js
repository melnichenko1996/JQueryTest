$(document).ready(function() {

setTimeout(function(){
		$('.classH').fadeIn(1000);
	}, 1000);
setTimeout(function(){
		$('.welcome').fadeIn(1500);
	}, 2000);
setTimeout(function(){
		$('.welcome').fadeOut(1000);
	}, 5000);

//Кнопки появится через 7с после загрузки страницы!
setTimeout(function(){
var widthBut = $(document).width();
var heightBut = $(document).height();
var heightH1 = $('.classH').height();

$('.but_white, .but_black').width((widthBut/2)-(widthBut/35)).height(heightBut-(heightBut/10)-heightH1).fadeIn(2000);
//White фон
$('.but_white').mouseover(function() {
	$('body').removeClass('classBody').css({
		'background-color' : '#edeef0',
		'color' : '#2e5d86',
	});
	$('.classH').css({ 'color' : '#2e5d86'});
	$('.allButtons button, .exitButtons, #exitButResult').css({
		'background' : '#edeef0', 
	    'color' : '#2e5d86',
	});
	$('.classP').css({
		'color' : '#2e5d86',
		'text-shadow' : '#2e5d86 1px 1px 1px',
	});
	$('#iDfooter').css({
		'border' : '2px solid #000',
		'color' : '#000',
	});
	$('.classWindowResult').css({
		'border' : '2px dashed #000',
	});
});
//Black фон
$('.but_black').mouseover(function() {
	$('body').removeClass('classBody').css({
		'background-color' : '#000',
		'color' : 'white',
	});
	$('.classH').css({ 'color' : '#fff'});
	$('.allButtons button, .exitButtons, #exitButResult').css({
		'background' : '#000', 
	    'color' : 'white',
	});
	$('.classP').css({
		'color' : '#fff',
		'text-shadow' : '#fff 0px 0px 2px',
	});
	$('#iDfooter').css({
		'border' : '2px solid #edeef0',
		'color' : 'white',
	});
	$('.classWindowResult').css({
		'border' : '2px dashed #edeef0',
	});
});
}, 7000);


function exitBut(One, Two) {
	var butOne = '.' + One;
	var butTwo = '.' + Two;

$(butOne).click(function(){
	$(butOne).hide(1000);
	$(butTwo).hide(1000);

	setTimeout(function(){
	$('.classH').css({
		'display' : 'inline'
	});
	}, 1500);

	setTimeout(function(){
		$(butOne).remove();
		$(butTwo).remove();
	}, 1600);
	setTimeout(function(){
		$('.but_whiteMini').show(1500);
		$('.but_blackMini').show(1500);
		$('.mainPage').fadeIn(1500);
	}, 2000);
	setTimeout(function(){
		var name =prompt('Введите ваше имя', 'Имя');
		$('.className').text(name);
	},3480);
});
};
exitBut('but_black','but_white');
exitBut('but_white','but_black');

$('#idButWhiteMini').click(function(){
	$('body').css({
		'background-color' : '#edeef0',
		'color' : '#2e5d86',
	});
	$('.classH').css({ 'color' : '#2e5d86'});

	$('.allButtons button, .exitButtons, #exitButResult').css({
	'background' : '#edeef0', 
    'color' : '#2e5d86',
});
	$('.classP').css({
		'color' : '#2e5d86',
		'text-shadow' : '#2e5d86 1px 1px 1px',
});
	$('#iDfooter').css({
		'border' : '2px solid #000',
		'color' : '#000',
	});
	$('.classWindowResult').css({
		'border' : '2px dashed #000',
	});
});

$('#idButBlackMini').click(function(){
	$('body').css({
		'background-color' : '#000',
		'color' : 'white',
	});
	$('.classH').css({ 'color' : '#fff'});

	$('.allButtons button, .exitButtons, #exitButResult').css({
		'background' : '#000', 
	    'color' : 'white',
});
	$('.classP').css({
		'color' : '#fff',
		'text-shadow' : '#fff 0px 0px 2px',
});
	$('#iDfooter').css({
		'border' : '2px solid #edeef0',
		'color' : 'white',
	});
	$('.classWindowResult').css({
		'border' : '2px dashed #edeef0',
	});
});

});