$(document).ready(function () {
    idleAnimation();
    runAnimation();
});
let boxMarginLeft = 1600;
var girl = document.getElementById("girl");

function idleAnimation(){

    idleImageNumber = idleImageNumber + 1;

    if ( idleImageNumber == 11 ){
        idleImageNumber = 1 ;
    }
    girl.src = "../assets/img/character2/idle (" + idleImageNumber + ").png";
}

function runAnimation(){
    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 11){
        runImageNumber = 1;
    }

    girl.src = "../assets/img/character2/run (" + runImageNumber + ").png";
}

function jumpAnimation(){
    jumpImageNumber = jumpImageNumber + 1;

    if (jumpImageNumber <= 6){
        boyMarginTop = boyMarginTop - 60;
        girl.style.marginTop = boyMarginTop + "px";
    }
    if (jumpImageNumber >=7){
        boyMarginTop = boyMarginTop + 60;
        girl.style.marginTop = boyMarginTop + "px";

    }

    if (jumpImageNumber == 11){
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();
    }

    girl.src = "../assets/img/character2/jump (" + jumpImageNumber + ").png";

}

function boyDeadAnimation(){
    deadImageNumber = deadImageNumber +1;
    if (deadImageNumber == 11){
        deadImageNumber = 10;
    }
    setInterval(idleAnimationNumber);
    idleAnimationNumber=0;

    girl.src = "../assets/img/character2/Dead (" + deadImageNumber + ").png";
}

function createBarrier() {
    for (var i = 0; i <= 10; i++) {

        var box = document.createElement("div");
        box.className = "box";
        document.getElementById("moveBackground").appendChild(box);
        box.style.marginLeft = boxMarginLeft + "px";
        box.id = "box" + i ;
        // boxMarginLeft = boxMarginLeft + 500;

        if ( i < 5){
            boxMarginLeft = boxMarginLeft + 2000;

        }

        if(i>=5){
            boxMarginLeft = boxMarginLeft + 1000;
        }
    }
}

let barrierAnimationId = 0;

var tempI = -2;

function boxAnimation() {
    for (var  i = 0; i<10; i++){
        var box = document.getElementById("box"+i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 35;
        box.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft >= -110 & newMarginLeft <= 100) {
            if (boyMarginTop > 300){
                tempI = i;
                clearInterval(boxAnimationId);
                clearInterval(runAnimationNumber);
                runAnimationNumber = -1;

                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber = -1;

                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId = -1;

                deadAnimationNumber = setInterval(boyDeadAnimation,100);
                deadTrack.play();
                game_over();
            }
        }
    }
}

$("#btnNext1").on('click', function (e) {
    window.location.href = "level_03.html";
});

$("#btnRestart").on('click', function (e) {
    window.location.href = "level_03.html";
});