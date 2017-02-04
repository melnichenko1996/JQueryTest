$(document).ready(function() {
//спрятали тесты 
$('#testOne, #testTwo, #testThree, #testFour, #testFive, #testSix, #testSeven, #testEight, #testNine, #testTen, #testEleven, #testTvelve').hide();

function myTest(falseA,falseB,truee,answerr,test){

var classFalseA = '.' + falseA;
var classFalseB = '.' + falseB;
var classTruee = '.' + truee;
var classAnswerr = '.' + answerr;
var namberTest = '#' + test;
//falsee 1
$(classFalseA).click(function(){
	$(classAnswerr).text('Вы ошиблись').css({
		'color': '#CD0000',
	});
	$(classFalseA).attr('disabled',true);
});
//falsee 2
$(classFalseB).click(function(){
	$(classAnswerr).text('Вы ошиблись').css({
		'color': '#CD0000',
	});
	$(classFalseB).attr('disabled',true);
});
//True 
$(classTruee).click(function(){
	$(classAnswerr).text('Ответ правильный').css({
		'color' : '#008B00',
	});
	$(namberTest).fadeIn(1000);
	$(classTruee).attr('disabled',true);
	$(classFalseA).attr('disabled',true);
	$(classFalseB).attr('disabled',true);
});
};
myTest('falseOneA','falseOneB','trueOne','answerOne','testTwo');
myTest('falseTwoA','falseTwoB','trueTwo','answerTwo','testThree');
myTest('falseThreeA','falseThreeB','trueThree','answerThree','testFour');

myTest('falseFourA','falseFourB','trueFour','answerFour','testFive');
myTest('falseFiveA','falseFiveB','trueFive','answerFive','testSix');
myTest('falseSixA','falseSixB','trueSix','answerSix','testSeven');

myTest('falseSevenA','falseSevenB','trueSeven','answerSeven','testEight');
myTest('falseEightA','falseEightB','trueEight','answerEight','testNine');
myTest('falseNineA','falseNineB','trueNine','answerNine','testTen');

myTest('falseTenA','falseTenB','trueTen','answerTen','testEleven');
myTest('falseElevenA','falseElevenB','trueEleven','answerEleven','testTvelve');
myTest('falseTvelveA','falseTvelveB','trueTvelve','answerTvelve', null);

//закрытия таблицы tableIdText,исчезновения ButTestText
$('.trueTvelve').click(function(){
	$('#tableIdText').fadeOut(2000);
	setTimeout(function(){
		$('#ButThirteen').fadeIn(1000);
		$('#exitButTestText').fadeIn(1000);
	}, 2000); 
	$('#ButTestText').text('Открыть тесты 1-12');
});



function myPhotoTestFalse(inputPhoto,img,answer,number){
	var idPhoto = '#' + inputPhoto;
	var idImg = '#' + img;
	var ClassAnswer = '.' + answer;

	$(idPhoto).click(function(){
		$(idImg).css({'border' : '3px solid red'}).fadeTo(1000, 0.2);
		$(ClassAnswer).text('Ответ '+number+' не правильный, подумайте еще.').css('color', 'red');
		$(idPhoto).attr('disabled',true);
	});
};
//Thirteen
myPhotoTestFalse('photoOneFalse','img_1','answerThirteen','1');
myPhotoTestFalse('photoTwoFalse','img_2','answerThirteen','2');
myPhotoTestFalse('photoThreeFalse','img_3','answerThirteen','3');
//Fourteen
myPhotoTestFalse('photoFiveFalse','img_5','answerFourteen','1');
myPhotoTestFalse('photoSevenFalse','img_7','answerFourteen','3');
myPhotoTestFalse('photoEightFalse','img_8','answerFourteen','4');
//Fifteen
myPhotoTestFalse('photoTenFalse','img_10','answerFifteen','2');
myPhotoTestFalse('photoElevenFalse','img_11','answerFifteen','3');
myPhotoTestFalse('photoTwelveFalse','img_12','answerFifteen','4');

function myPhotoTestTrue(inputPhoto,img,answer,number,hide, nextBut, exitButton){
	var idPhoto = '#' + inputPhoto;
	var idImg = '#' + img;
	var ClassAnswer = '.' + answer;
	var IdHide = '#' + hide; 
	var IdNexBut = '#' + nextBut; 
	var IdexitButton = '#' + exitButton;

	$(idPhoto).click(function(){
		$(idImg).css({'border' : '3px solid green'});
		$(ClassAnswer).text('Поздравляю, ответ '+number+' правильный.').css('color', 'green');
		$(IdHide).fadeOut(2000);

		//Выводить новою кнопку, при правильном ответе 
		setTimeout(function(){
			$(IdNexBut).fadeIn(1000);
			$(IdexitButton).fadeIn(1000);
			}, 2000); 

		});
}
myPhotoTestTrue('photoFourTrue','img_4','answerThirteen','4','tableThirteen','ButFourteen','exitButThirteen');
myPhotoTestTrue('photoSixTrue','img_6','answerFourteen','2','tableFourteen','ButFifteen','exitButFourteen');
myPhotoTestTrue('photoNineTrue','img_9','answerFifteen','1','tableFifteen','result','exitButFifteen');

	$('#photoNineTrue').click(function(){
		setTimeout(function(){
			$('#windowResult').fadeIn(1000);
		}, 2000);
	});

function disabledInput(truePhoto,falsePhotoA,falsePhotoB,falsePhotoC){
	var IdTruePhoto = '#' + truePhoto;
	var IdFalsePhotoA = '#' + falsePhotoA;
	var IdFalsePhotoB = '#' + falsePhotoB;
	var IdFalsePhotoC = '#' + falsePhotoC;

	$(IdTruePhoto).click(function(){
		$(IdTruePhoto).attr('disabled',true)
		$(IdFalsePhotoA).attr('disabled',true)
		$(IdFalsePhotoB).attr('disabled',true)
		$(IdFalsePhotoC).attr('disabled',true)
	});
}
disabledInput('photoFourTrue','photoOneFalse','photoTwoFalse','photoThreeFalse');
disabledInput('photoSixTrue','photoFiveFalse','photoSevenFalse',null);
disabledInput('photoNineTrue','photoTenFalse','photoElevenFalse',null);


//Cчетчик ответов
var a = 0;//правильных ответов
	$('input[class^=true], input[id$=True]').click(function(){
		a++
	$('.NumberTrue').text(a);
	});
var b = 0;//всего ответов
	$('input').click(function(){
		b++
	$('.NumberClick').text(b);
	});

});