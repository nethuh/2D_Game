var girl2 = document.getElementById("girl2");

function idleAnimation(){

    idleImageNumber = idleImageNumber + 1;

    if ( idleImageNumber == 10 ){
        idleImageNumber = 1 ;
    }
   // girl2.src = "../assets/img/character3/idle__00 (" + idleImageNumber + ").png";
    $("#girl2").attr("src", "../assets/img/character3/Idle__00" + idleImageNumber + ".png");

}

function runAnimation(){
    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 11){
        runImageNumber = 1;
    }

    //girl2.src = "../assets/img/character3/run__00 (" + runImageNumber + ").png";
    $("#girl2").attr("src", "../assets/img/character3/Run__00" + runImageNumber + ".png");

}

function jumpAnimation(){
    jumpImageNumber = jumpImageNumber + 1;

    if (jumpImageNumber <= 6){
        boyMarginTop = boyMarginTop - 60;
        girl2.style.marginTop = boyMarginTop + "px";
    }
    if (jumpImageNumber >=7){
        boyMarginTop = boyMarginTop + 60;
        girl2.style.marginTop = boyMarginTop + "px";

    }

    if (jumpImageNumber == 11){
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();
    }

   // girl2.src = "../assets/img/character3/jump__00 (" + jumpImageNumber + ").png";
    $("#girl2").attr("src", "../assets/img/character3/Jump__00" + jumpImageNumber + ".png");



}

function boyDeadAnimation(){
    deadImageNumber = deadImageNumber +1;
    if (deadImageNumber == 11){
        deadImageNumber = 10;
    }
    setInterval(idleAnimationNumber);
    idleAnimationNumber=0;

    //girl2.src = "../assets/img/character3/Dead__00 (" + deadImageNumber + ").png";
    $("#girl2").attr("src", "../assets/img/character3/Dead__00" + deadImageNumber + ".png");

}

$("#btnNext3").on('click', function (e) {
    window.location.href = "level_04.html";
});

$("#btnRestart").on('click', function (e) {
    window.location.href = "level_04.html";
});