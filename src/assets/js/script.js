let backgroundMusic = new Audio();
backgroundMusic.src = "../assets/audio/happy-sun.mp3";
backgroundMusic.play().then(r => {
    backgroundMusic.loop = true;
});


let jumpTrack = new Audio();
jumpTrack.src = "../assets/audio/cartoon-jump-6462.mp3";

let deadTrack = new Audio();
deadTrack.src = "../assets/audio/welcome-to-hell-103646.mp3";

let flyTrack = new Audio();
flyTrack.src = "../assets/audio/swing-whoosh-110410.mp3";

let winnerTrack = new Audio();
winnerTrack.src = "../assets/audio/winner.mp3";

let gameOverTrack = new Audio();
gameOverTrack.src = "../assets/audio/GameOver.wav";


var boy = document.getElementById("boy");
idleImageNumber = 1; //globle variable
idleAnimationNumber = 0;
function idleAnimation(){

    idleImageNumber = idleImageNumber + 1;


    if ( idleImageNumber == 11 ){
        idleImageNumber = 1 ;
    }
    boy.src = "../assets/img/character1/idle (" + idleImageNumber + ").png";
    // boy.src = "http://localhost:63342/Game_1/assets/img/Idle(" + idleImageNumber + ").png";
}

function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,200);
}
runImageNumber = 1;
runAnimationNumber = 0;
function runAnimation(){
    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 11){
        runImageNumber = 1;
    }


    boy.src = "../assets/img/character1/run (" + runImageNumber + ").png";
}

function runAnimationStart(){
    runAnimationNumber = setInterval(runAnimation,100);
    clearInterval(idleAnimationNumber);
}
jumpImageNumber = 1;
jumpAnimationNumber = 0;
boyMarginTop = 455;

function jumpAnimation(){
    jumpImageNumber = jumpImageNumber + 1;

    if (jumpImageNumber <= 6){
        boyMarginTop = boyMarginTop - 60;
        boy.style.marginTop = boyMarginTop + "px";
    }
    if (jumpImageNumber >=7){
        boyMarginTop = boyMarginTop + 60;
        boy.style.marginTop = boyMarginTop + "px";

    }

    if (jumpImageNumber == 11){
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();
    }


    boy.src = "../assets/img/character1/jump (" + jumpImageNumber + ").png";

}

function jumpAnimationStart(){
    clearInterval(idleAnimationNumber);
    runImageNumber=0;
    clearInterval(runAnimationNumber);
     jumpAnimationNumber = setInterval(jumpAnimation,150);
}
function keyCheck(event) {
    // alert(event.which);
    //enter = 32
// space = 32
    var keyCode = event.which;

    if (keyCode == 13) {
        if (runAnimationNumber == 0) {
            runAnimationStart();
        }


        if (moveBackgroundAnimationId == 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100);
        }
        if (boxAnimationId==0){
            boxAnimationId = setInterval(boxAnimation,100);


        }
    }

    if (keyCode == 32){
        if (jumpAnimationNumber == 0){
            jumpAnimationStart();
        }

        if (moveBackgroundAnimationId == 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100);
        }
        if (boxAnimationId==0){
            boxAnimationId = setInterval(boxAnimation,100);

        }
    }
}

var backgroundImagePositionX = 0;
var  moveBackgroundAnimationId = 0;

var score = 0;

function moveBackground(){

    backgroundImagePositionX = backgroundImagePositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";

    score = score +1;
    document.getElementById("score").innerHTML = score;
    if (score >= 20) {
        winResults();
    }
}

boxMarginLeft = 1540;

function createBoxes() {

    for (var i = 0; i <= 10; i++) {

        var box = document.createElement("div");
        box.className = "box";
        document.getElementById("background").appendChild(box);
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

var boxAnimationId = 0;
function boxAnimation() {
    for (var  i = 0; i<10; i++){
        var box = document.getElementById("box"+i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 35;
        box.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft >= -110 & newMarginLeft <= 100) {
            if (boyMarginTop > 300){
                clearInterval(boxAnimationId);

                clearInterval(runAnimationNumber);
                runAnimationNumber = -1;

                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber = -1;

                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId = -1;

               deadAnimationNumber = setInterval(boyDeadAnimation,100);
            }
        }
    }

}
deadImageNumber = 1
deadAnimationNumber = 0

function boyDeadAnimation(){
    deadImageNumber = deadImageNumber +1;
    if (deadImageNumber == 11){
        deadImageNumber = 10;

        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endScore").innerHTML = score;
    }
    boy.src = "../assets/img/character1/Dead (" + deadImageNumber + ").png";
}

function reload(){
    location.reload();
}