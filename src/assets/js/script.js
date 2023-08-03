var boy = document.getElementById("boy");
idleImageNumber = 0; //globle variable
idleAnimationNumber = 0;
function idleAnimation(){

    idleImageNumber = idleImageNumber + 1;


    if ( idleImageNumber == 11 ){
        idleImageNumber = 1 ;
    }
    boy.src = "assets/img/idle (" + idleImageNumber + ").png";
    // boy.src = "http://localhost:63342/Game_1/assets/img/Idle(" + idleImageNumber + ").png";


}

function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,200);
}
runImageNumber = 0;
runAnimationNumber = 0;
function runAnimation(){
    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 11){
        runImageNumber = 1;
    }


    boy.src = "assets/img/run (" + runImageNumber + ").png";
}

function runAnimationStart(){
    runAnimationNumber = setInterval(runAnimation,100);
    clearInterval(idleAnimationNumber);
}

function keyCheck(event) {
    //alert(event.which);
    //enter = 32

    var keyCode = event.which;

    if (keyCode == 32){
        if (runAnimationNumber == 0){
            runAnimationStart();
        }
    }

    if(moveBackgroundAnimationId == 0){
        moveBackgroundAnimationId = setInterval(moveBackground,100);
    }
}

var backgroundImagePositionX = 0;
var  moveBackgroundAnimationId = 0;
function moveBackground(){

    backgroundImagePositionX = backgroundImagePositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
}