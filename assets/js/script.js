var timer1 = 0;
var timer2 = 0;
var countTarget = 0;
var timer1On;
var timer2On;
var timer1interval;
var timer2interval;

var start = function() {
	clearInterval(timer1interval);
	clearInterval(timer2interval);
	countTarget = $("#userInput").val();
	timer1 = 0;
	timer2 = countTarget;
	displayTime(1, timer1);
	displayTime(2, timer2);
	timer1On = false;
	timer2On = false;
}


var pauseTimer1 = function() {
	if (!timer1On) {
		timer1interval = setInterval(updateTime1, 1000);
	} else {
		clearInterval(timer1interval);
	}
	timer1On = !timer1On;
}

var pauseTimer2 = function() {
	if (!timer2On) {
		timer2interval = setInterval(updateTime2, 1000);
	} else {
		clearInterval(timer2interval);
	}
	timer2On = !timer2On;

}

var resetTimer1 = function() {
	clearInterval(timer1interval);
	timer1On = false;
	timer1 = 0;
	displayTime(1, timer1);
}

var resetTimer2 = function() {
	clearInterval(timer2interval);
	timer2On = false;
	timer2 = countTarget;
	displayTime(2, timer2);
}

var updateTime1 = function() {
	if (timer1 != countTarget) {
		timer1 += 1;
		displayTime(1, timer1);
		if (timer1 == countTarget) {
		}
	} else {
		clearInterval(timer1interval);
		timer1On = false;
	}
}

var updateTime2 = function() {
	if (timer2 != 0) {
		timer2 -= 1;
		displayTime(2, timer2);
		if (timer2 == 0) {
		}
	} else {
		clearInterval(timer2interval);
		timer2On = false;
	}
}

var displayTime = function(clockNumber, timer) {
	var carryover;
	var seconds = timer % 60;
	carryover = Math.floor(timer / 60);
	var minutes = carryover % 60;
	carryover = Math.floor(carryover / 60);
	var hours = carryover % 24;
	carryover = Math.floor(carryover / 24);
	var days = carryover;
	if (clockNumber == 1) {
		document.querySelector('.timer1').innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
	} if (clockNumber == 2) {
		document.querySelector('.timer2').innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
	} else {
		console.log("Error");
	}
}