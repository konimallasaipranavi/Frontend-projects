

var startButton = document.getElementsByClassName("start");
var stopButton = document.getElementsByClassName("stop");
var resetButton = document.getElementsByClassName("reset");
var id;
var timer = 0;
var counter = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;


startButton[0].addEventListener('click',startClock);
stopButton[0].addEventListener('click',stopClock);
resetButton[0].addEventListener('click',resetClock);

 function startClock(){ 
	 id = setInterval(incrementTime,1000);
}

function stopClock() {
  clearInterval(id);
  id = null;
}


function resetClock() {
		stopClock();
		document.getElementById("watch").innerHTML = "00:00:00";
}

function incrementTime(){
	counter++;
	console.log(counter);
   seconds = counter;
   
   if(seconds >= 60){
   	minutes++;
   	counter = 0;
   		
   }
   if(minutes >= 60){
   	hours++;
   	counter = 0;
   		
   }

   if(seconds < 10)
   	seconds = "0"+Number(seconds);

   if(minutes < 10){
   		minutes = "0"+Number(minutes);
   	}
   	if(hours < 10){
   		hours = "0"+Number(hours);
 
   	}

   	// console.log(hours,minutes,seconds);

  var displayTime = hours + ":" + minutes + ":" + seconds;
  document.getElementById("watch").innerHTML = displayTime 
}

