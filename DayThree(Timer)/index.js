var title = document.getElementById('title');
var button = document.getElementById('button');

title.innerHTML = "0";
var time = 0;
var isRunning = false;
var timer;

button.addEventListener("click", function(event){
    if(isRunning){
        stopTimer();
    }else{
        startTimer();
    }
});

function stopTimer(){
    button.innerHTML = "Start";
    isRunning = false;
    clearInterval(timer);
}

function startTimer(){
    button.innerHTML = "Stop";
    isRunning = true;
    timer = setInterval(function(){
        time++;
        title.innerHTML = time;
    }, 1000);
}
