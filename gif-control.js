var playIcon = document.getElementById("play-icon");
var playText = document.getElementById("play-text");
var playTextWord = document.getElementById("play-text-word");
var playGifAnimation = document.getElementById("play-gif-animation");

function refreshClassnameAnimation() {
    playGifAnimation.classList.remove("gif-webframe-anim");
    void playGifAnimation.offsetWidth;
    playGifAnimation.classList.add("gif-webframe-anim");
}

async function changePlayOnPause() {
    if (playIcon.id == "play-icon") {
        playIcon.src = "assets/pause-water.svg";
        playGifAnimation.src = "assets/animation.webp";
        playTextWord.src = "assets/pause-water-text.svg";

        playIcon.id = "pause-icon";
        playGifAnimation.id = "pause-gif-animation";
        playText.id = "pause-text";
        playText.className = "pause-water-text";
    } else { 
        playIcon = document.getElementById("pause-icon"); 
        playText = document.getElementById("pause-text");

        playIcon.src = "assets/Polygon-2.svg";
        playGifAnimation.src = "assets/paused-gif.png";
        playTextWord.src = "assets/play-water.svg";

        playIcon.id = "play-icon";
        playGifAnimation.id = "play-gif-animation";
        playText.id = "play-text";
        playText.className = "play-water-text";

        refreshClassnameAnimation();
    }

    if (playGifAnimation.id == "pause-gif-animation") {
        generateUniqueLoop(3000);
    } else {
        stopUniqueLoop();
    }
}
