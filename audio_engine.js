var waveSounds = [
    './assets/audio/watertap.mp3',
    './assets/audio/watertap(1).mp3',
    './assets/audio/waterfall.mp3',
    './assets/audio/water-flow(2).mp3',
    './assets/audio/flow-water.mp3'
];

var webApiSounds = [];
window.onload = initWebApiSounds();

async function initWebApiSounds() {
    for (let i = 0; i < waveSounds.length; ++i) {
        webApiSounds[i] = new Pizzicato.Sound({ 
            source: 'file',
            options: { path: waveSounds[i], loop: true }
        }, function(error) {
            if (!error)
                console.log('Sound file ' + waveSounds[i] + ' ready to use');
        });
    }

    console.log('Init web api sounds');
}

function mixRandomArray(arr) { arr.sort(() => Math.random() - 0.5) }

function randomInteger(min, max) { return Math.round(min - 0.5 + Math.random() * (max - min + 1)); }

function generateUniqueLoop(timeToRefresh) {
    mixRandomArray(webApiSounds);

    for (let i = 0; i < webApiSounds.length; ++i) {
        webApiSounds[i].volume = 1;
        webApiSounds[i].play(randomInteger(0, 2), randomInteger(0, 6));
    }

    setTimeout(function () {
        mixRandomArray(webApiSounds);

        for (let i = 0; i < webApiSounds.length; ++i) {
            webApiSounds[i].play(randomInteger(0, 2), randomInteger(0, 6));
        }
    }, timeToRefresh);
}

function stopUniqueLoop() {
    for (let i = 0; i < webApiSounds.length; ++i) {
        webApiSounds[i].volume = 0;
    }
}
