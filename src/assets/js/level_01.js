let boxMarginLeft = 500;

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

var tempI = -2;
let boxAnimationId = 0;
function boxAnimation() {
    for (let  i = 0; i<10; i++){
        let box = document.getElementById("box"+i);
        let currentMarginLeft = getComputedStyle(box).marginLeft;
        let newMarginLeft = parseInt(currentMarginLeft) - 35;
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
    window.location.href = "level_02.html";
});

$("#btnRestart").on('click', function (e) {
    window.location.href = "level_01.html";
});