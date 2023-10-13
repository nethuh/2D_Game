let backgroundMusic = new Audio();
$(document).ready(function () {
    idleAnimationStart();
    createBarrier();
    hideComponents();
    removeBlur();
});

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


let boy = document.getElementById("boy");

// Start Idle Animation

let idleImageNumber = 1; //globle variable
let idleAnimationNumber = 0;
function idleAnimation(){

    idleImageNumber = idleImageNumber + 1;

    if ( idleImageNumber == 11 ){
        idleImageNumber = 1 ;
    }
    boy.src = "../assets/img/character1/Idle (" + idleImageNumber + ").png";
       // boy.src = "http://localhost:63342/Game_1/assets/img/Idle(" + idleImageNumber + ").png";
}

function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,200);
}


// Start Run Animation

let runImageNumber = 1;
let runAnimationNumber = 0;
function runAnimation(){
    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 11){
        runImageNumber = 1;
    }

    boy.src = "../assets/img/character1/Run (" + runImageNumber + ").png";
}

function runAnimationStart(){
    runAnimationNumber = setInterval(runAnimation,100);
    clearInterval(idleAnimationNumber);
}


// Start Jump Animation

let jumpImageNumber = 1;
let jumpAnimationNumber = 0;
let boyMarginTop = 400;

function jumpAnimation(){
    jumpImageNumber++;

    if (jumpImageNumber <= 5){
        boyMarginTop = boyMarginTop - 60;
        boy.style.marginTop = boyMarginTop + "px";
    }
    if (jumpImageNumber >= 7){
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

    boy.src = "../assets/img/character1/Jump (" + jumpImageNumber + ").png";

}
function jumpAnimationStart(){
    jumpAnimationNumber = setInterval(jumpAnimation, 150);
    runImageNumber = 0;
    clearInterval(idleAnimationNumber);
    clearInterval(runAnimationNumber);
}

// Background Animation

let backgroundImagePositionX = 0;
let  moveBackgroundAnimationId = 0;

let score = 0;

function moveBackground(){
    backgroundImagePositionX = backgroundImagePositionX - 20;
    document.getElementById("moveBackground").style.backgroundPositionX = backgroundImagePositionX + "px";
    score = score +1;
    document.getElementById("score").innerHTML = score;
    if (score >= 60) {
       winResults();
    }
}

boxMarginLeft = 1540;


// Start Dead Animation

let deadImageNumber = 1;
let deadAnimationNumber = 0;

function boyDeadAnimation(){
    deadImageNumber = deadImageNumber +1;
    if (deadImageNumber == 11){
        deadImageNumber = 10;
    }
    setInterval(idleAnimationNumber);
    idleAnimationNumber=0;

    boy.src = "../assets/img/character1/Dead (" + deadImageNumber + ").png";
}

$(document).on('keypress', function (e) {

    // alert(event.which);
    //enter = 13
// space = 32

    if (e.keyCode === 13) {
        if (runAnimationNumber == 0) {
            runAnimationStart();
        }

        if (moveBackgroundAnimationId === 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100)
        }
        if (boxAnimationId === 0) {
            boxAnimationId = setInterval(boxAnimation, 150);
        }
        removeBlur();
    }

    else if (e.keyCode === 32) {
        clearInterval(idleAnimationNumber);
        idleAnimationNumber = 0;

        if (jumpAnimationNumber === 0) {
            jumpAnimationStart();
        }
        if (moveBackgroundAnimationId === 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100)
        }
        if (boxAnimationId === 0) {
            boxAnimationId = setInterval(boxAnimation, 150);
        }
        removeBlur();
        jumpTrack.play();
    }
});


$("#btnSound").on('click', function (e) {
    if (!backgroundMusic.paused) {
        backgroundMusic.pause();
        $("#btnSound").removeClass("sound-on");
    } else {
        backgroundMusic.play().then(r => {
            backgroundMusic.loop = true;
        });
        $("#btnSound").addClass("sound-on");
    }
});

function blurComponents() {
    $(".background").addClass("bgBlur");
    $(".background2").addClass("bgBlur");
    $(".background3").addClass("bgBlur");
    $(".background4").addClass("bgBlur");
}
function removeBlur() {
    $(".background").removeClass("bgBlur");
    $(".background2").removeClass("bgBlur");
    $(".background3").removeClass("bgBlur");
    $(".background4").removeClass("bgBlur");
}

function pauseAll() {
    clearInterval(idleAnimationNumber);
    idleAnimationNumber = 0;

    if (jumpAnimationNumber !== 0) {
        clearInterval(idleAnimationNumber);
        idleAnimationNumber = 0;
    } else {
        idleAnimationStart();
    }

    clearInterval(runAnimationNumber);
    runAnimationNumber = 0;

    clearInterval(boxAnimationId);
    boxAnimationId = 0;

    clearInterval(jumpAnimationNumber);
    jumpAnimationNumber = 0;

    clearInterval(moveBackgroundAnimationId);
    moveBackgroundAnimationId = 0;
}

$("#btnPause").on('click', function (e) {
    $("body").css("pointer-events", "none");
    $("#btnPause").css("pointer-events", "none");
    $("#btnResume").css("pointer-events", "auto");
    $("#btnRestart").css("pointer-events", "auto");
    $(document).off("32");
    $(document).off("13");
    pauseAll();

    $("#btnPause").addClass("pause");
    $("#btnResume").removeClass("pause");

    blurComponents();

    $("#pause-bg").css("display", "block");
    $("#titleImg").css("display", "block");

    backgroundMusic.pause();
});

$("#btnResume").on('click', function (e) {
    $("#btnPause").css("pointer-events", "auto");
    $("#btnResume").addClass("pause");
    $("#btnPause").removeClass("pause");
    $(document).on("32");
    $(document).on("13");
    removeBlur();
    hideComponents();
    backgroundMusic.play();
});

function hideComponents() {
    $("#pause-bg").css("display", "none");
    $("#titleImg").css("display", "none");
    $("#gameOver_title-img").css("display", "none");
    $("#gameWin_title-img").css("display", "none");
    $("#btnNext1").css("display", "none");
}

function winResults(){
    blurComponents();
    $("#gameWin_title-img").css("display", "block");
    $(".btnNext").css("display", "block");
    $("#btnPause").css("pointer-events", "none");
    $("#btnResume").css("pointer-events", "none");
    pauseAll();

    backgroundMusic.pause();
    winnerTrack.play();
    $("#btnSound").removeClass("sound-on");
}

$("#controlsWrapper").hover(function () {
    $("#controlsWrapper").css("cursor", "grab");

}, function () {
    $("#controlsWrapper").css("cursor", "pointer");
});

function game_over() {
    blurComponents();

    $("#gameOverWrapper").css("display", "block");
    $("#gameOver_title-img").css("display", "block");

    backgroundMusic.pause();
    gameOverTrack.play();
    $("#btnSound").removeClass("sound-on");
}
