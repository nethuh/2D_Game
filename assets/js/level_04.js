var boy2 = document.getElementById("boy2");

function idleAnimation(){

    idleImageNumber = idleImageNumber + 1;

    if ( idleImageNumber == 10 ){
        idleImageNumber = 1 ;
    }

    $("#boy2").attr("src", "../assets/img/character4/Idle__00" + idleImageNumber + ".png");

}

function runAnimation(){
    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 11){
        runImageNumber = 1;
    }

    $("#boy2").attr("src", "../assets/img/character4/Run__00" + runImageNumber + ".png");

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

    $("#boy2").attr("src", "../assets/img/character4/Jump__00" + jumpImageNumber + ".png");



}

function boyDeadAnimation(){
    deadImageNumber = deadImageNumber +1;
    if (deadImageNumber == 11){
        deadImageNumber = 10;
    }
    setInterval(idleAnimationNumber);
    idleAnimationNumber=0;
    
    $("#boy2").attr("src", "../assets/img/character4/Dead__00" + deadImageNumber + ".png");

}
$("#btnNext3").on('click', function (e) {
    window.location.href = "level_04.html";
});

$("#btnRestart").on('click', function (e) {
    window.location.href = "level_04.html";
});