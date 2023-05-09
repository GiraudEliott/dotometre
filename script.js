var messageList = document.getElementById("messageList");
var timerElement = document.getElementById("timer");

function startTimer() {
	var seconds = 0;
	var intervalId = setInterval(function() {
		seconds++;
		var minutes = Math.floor(seconds / 60);
		var remainingSeconds = seconds % 60;
		timerElement.innerHTML = formatTime(minutes) + ":" + formatTime(remainingSeconds);
		
        if (seconds % 120 === 0) {
			addMessageToList("RIVER RUNE");
		}

        if (seconds % 180 === 0) {
			addMessageToList("LOTUS");
		}
        
        if (seconds % 180 === 0) {
            addMessageToList("BOUNTY RUNES");
		}
        
        if (seconds % 420 === 0) {
            addMessageToList("WISDOM RUNE");
        }

        if (seconds % 1200 === 0) {
            addMessageToList("TORMENTOR");
        }
	}, 1000);
}

var messageList = document.getElementById("messageList");
var timerElement = document.getElementById("timer");

function startTimer() {
	var seconds = 0;
	var intervalId = setInterval(function() {
		seconds++;
		var minutes = Math.floor(seconds / 60);
		var remainingSeconds = seconds % 60;
		timerElement.innerHTML = formatTime(minutes) + ":" + formatTime(remainingSeconds);
		
        if (seconds % 2 === 0) {
			addMessageToList("RIVER RUNE");
		}

        if (seconds % 4 === 0) {
			addMessageToList("LOTUS");
		}
        
        if (seconds % 8 === 0) {
            addMessageToList("BOUNTY RUNES");
		}
        
        if (seconds % 13 === 0) {
            addMessageToList("WISDOM RUNE");
        }

        if (seconds % 1200 === 0) {
            addMessageToList("TORMENTOR");
        }
	}, 1000);
}

function addMessageToList(message) {
	var li = document.createElement("li");
	li.innerHTML = message;
	messageList.insertBefore(li, messageList.firstChild);
}

function formatTime(time) {
	return time < 10 ? "0" + time : time;
}


function formatTime(time) {
	return time < 10 ? "0" + time : time;
}
