$(document).ready(function() {

$('#ButTestText').click(function(){
	setTimeout(function(){


		$('#tableIdText').removeClass('tableClassText').css({
			'width' : '100%',
			'text-align' : 'left',
		});
		$('#testOne').fadeIn(2000);
		$('#tableIdText').fadeIn(2000);
		$('#iDfooter').fadeIn(2000);
	}, 1000);
});

//появления картинок и действия при их нажатии!
function button(but,table){
	var idBut = '#' + but;
	var idTable = '#' + table;

	$(idBut).click(function(){
	$(idTable).css({
		'width' : '75%',
		'text-align' : 'center',
		'margin' : 'auto',
	});
	$(idTable).fadeIn(2000);
});
};

button('ButThirteen','tableThirteen');
button('ButFourteen','tableFourteen');
button('ButFifteen','tableFifteen');


function Exit(battonExit,tableOut){
	var idBattonExit = '#' + battonExit;
	var idTableOut = '#' + tableOut;

	$(idBattonExit).click(function(){
		$(idTableOut).fadeOut(2000);
	});
};
Exit('exitButTestText','tableIdText');
Exit('exitButThirteen','tableThirteen');
Exit('exitButFourteen','tableFourteen');
Exit('exitButFifteen','tableFifteen');

$('#result').click(function(){
	$('#windowResult').fadeIn(1000);
});
$('#exitButResult').click(function(){
	$('#windowResult').fadeOut(1000);
});
});