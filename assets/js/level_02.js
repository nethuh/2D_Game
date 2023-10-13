var girl = document.getElementById("girl");

function idleAnimation(){

    idleImageNumber = idleImageNumber + 1;

    if ( idleImageNumber == 11 ){
        idleImageNumber = 1 ;
    }
    girl.src = "../assets/img/character2/Idle (" + idleImageNumber + ").png";
}

function runAnimation(){
    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 11){
        runImageNumber = 1;
    }

    girl.src = "../assets/img/character2/Run (" + runImageNumber + ").png";
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

    girl.src = "../assets/img/character2/Jump (" + jumpImageNumber + ").png";

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

$("#btnNext2").on('click', function (e) {
    window.location.href = "level_03.html";
});

$("#btnRestart").on('click', function (e) {
    window.location.href = "level_03.html";
});