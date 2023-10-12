$(document).ready(function () {
    idleAnimation();
    runAnimation();
});
let boxMarginLeft = 500;
var boy2 = document.getElementById("boy2");

function idleAnimation(){

    idleImageNumber = idleImageNumber + 1;

    if ( idleImageNumber == 10 ){
        idleImageNumber = 1 ;
    }

    $("#boy2").attr("src", "../img/character4/Idle__00" + idleImageNumber + ".png");

}

function runAnimation(){
    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 11){
        runImageNumber = 1;
    }

    $("#boy2").attr("src", "../img/character4/run__00" + runImageNumber + ".png");

}

function jumpAnimation(){
    jumpImageNumber = jumpImageNumber + 1;

    if (jumpImageNumber <= 6){
        boyMarginTop = boyMarginTop - 60;
        boy2.style.marginTop = boyMarginTop + "px";
    }
    if (jumpImageNumber >=7){
        boyMarginTop = boyMarginTop + 60;
        boy2.style.marginTop = boyMarginTop + "px";

    }

    if (jumpImageNumber == 11){
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();
    }

    $("#boy2").attr("src", "../img/character4/jump__00" + jumpImageNumber + ".png");



}

function boyDeadAnimation(){
    deadImageNumber = deadImageNumber +1;
    if (deadImageNumber == 11){
        deadImageNumber = 10;
    }
    setInterval(idleAnimationNumber);
    idleAnimationNumber=0;
    
    $("#boy2").attr("src", "../img/character4/Dead__00" + deadImageNumber + ".png");

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

let boxAnimationId = 0;

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

$("#btnNext3").on('click', function (e) {
    window.location.href = "level_04.html";
});

$("#btnRestart").on('click', function (e) {
    window.location.href = "level_04.html";
});