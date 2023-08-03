var boy = document.getElementById("boy");
idleImageNumber = 0; //globle variable
idleAnimationNumber = 0;
function idleAnimation(){

    idleImageNumber = idleImageNumber + 1;

    if (idleImageNumber == 10){
        idleImageNumber = 1;
    }
    //boy.src = "assets/img/Idle(" + idleImageNumber + ") .png";
    boy.src = "http://localhost:63342/Game_1/assets/img/Idle(" + idleImageNumber + ").png";


}

function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,200);
}