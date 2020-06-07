window.open = function() {};
            window.print = function() {};
            // Support hover state for mobile.
            if (false) {
                window.ontouchstart = function() {};
            }

function generate_confetti(){
    var newDiv = document.createElement("div")  ;
    var cup = document.createElement("IMG");
    cup.src = `assets/solocup_clear.png`;
    cup.height = 100;
    cup.width = 100;
    newDiv.appendChild(cup);
    
    newDiv.style.position='absolute';
    newDiv.style.left='0px'; 
    newDiv.style.top='0px';
    document.getElementById("my-canvas").appendChild(newDiv);
    
    // start the rotations
    newDiv.classList.add("rotate"); 
    
    // add to the rotate list
    
    var noisedx = Math.random() * 1000;
    var noisedy = Math.random() * 1000;
    var dx = noisedx;
    var dy = 50 + noisedy;
    throw_confetti(0, newDiv, dx, dy);
}

function throw_confetti(timecount, div, dx, dy){
    if (timecount<200){
        var next_timecount = timecount + 1;
        var x = timecount/1000*20  * dx;
        var y = (timecount/1000*20) * (timecount/1000*20) * 0.5 * dy;

        div.style.left=Math.round(x).toString().concat('px');
        div.style.top=Math.round(y).toString().concat('px');
        
        setTimeout(throw_confetti.bind(null, next_timecount, div, dx, dy), 20);
    }
    else{
        div.classList.add("hide");
    }
    // x = u * t * cos(\theta)
    // y = u * t * sin(\theta) - 1/2 g t^2
}

function setCandleListener(){
    document.getElementsByClassName("candle")[0].addEventListener("click", getPartyStarted);
}

function getPartyStarted(){
    console.log("this party gettin started");
    document.getElementsByClassName("flame")[0].classList.add("show");
    var player = document.getElementById("GoodTimeGirl");
    player.play();
    
    for (var i=0; i<50; i++){
        generate_confetti() ;
    }     
}

function main(){
    // play
    setCandleListener();
    console.log("hello");

    // generate confetti outside window

        

    // projectile!
}

main();
