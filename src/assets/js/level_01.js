let barrierMarginLeft = 500;

function createBarrier() {
    for (let i = 0; i <= 10; i++) {
        $("#barrier").append("<div class='barrier' style='margin-left: " + barrierMarginLeft + "px' id='box" + i + "'></div>");

        if (i < 5) {
            barrierMarginLeft = barrierMarginLeft + 2000;
        }
        if (i >= 5) {
            barrierMarginLeft = barrierMarginLeft + 1000;
        }
    }
}

let barrierAnimationId = 0;

var tempI = -2;

function barrierAnimation() {
    for (let i = 0; i < 6; i++) {
        let css = parseInt($("#box" + i).css("margin-left"));

        let newMarginLeft = css - 25;
        $("#box" + i).css("margin-left", newMarginLeft - 25 + "px")
        if (newMarginLeft >= -110 & newMarginLeft <= 100) {
            if (boyMarginTop > 175) {
                  tempI = i;
                        clearInterval(barrierAnimationId);
                        clearInterval(runAnimationNumber);
                        runAnimationNumber = -1;

                        clearInterval(jumpAnimationNumber);
                        jumpAnimationNumber = -1;

                        clearInterval(moveBackgroundAnimationId);
                        moveBackgroundAnimationId = -1;
                        deadAnimationNumber = setInterval(boyDeadAnimation, 100);
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
    window.location.href = "level_02.html";
});