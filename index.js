//Getting address/location of start,stop,reset buttons

var startButton = document.getElementsByClassName("start");    
var stopButton = document.getElementsByClassName("stop");
var resetButton = document.getElementsByClassName("reset");

//initilaising the required timer variables
var id;
var timer = 0;
var counter = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

//Adding "click" events to resepective start,stop and reset buttons

startButton[0].addEventListener('click',startClock);
stopButton[0].addEventListener('click',stopClock);
resetButton[0].addEventListener('click',resetClock);

//setting the timer to run after every sec using setInterval method
 function startClock(){ 
	 id = setInterval(incrementTime,1000); //updates every second
}

//inorder to stop we need the id of the interval being set by setInterval method.
function stopClock() {
  clearInterval(id); //stops the timer
  id = null;
}

//it stops the clocl and resets again
function resetClock() {
	stopClock();
	document.getElementById("watch").innerHTML = "00:00:00"; //resets the timer
	counter = 0;
}


//
function incrementTime(){  //
	counter++;  //counter variable for incrementing time 
	// console.log(counter);
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

  var displayTime = hours + ":" + minutes + ":" + seconds; //displays timer as string on webpage
  document.getElementById("watch").innerHTML = displayTime ;
}

