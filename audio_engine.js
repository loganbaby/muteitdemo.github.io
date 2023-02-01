var waveSounds = [
    './assets/audio/watertap.ogg',
    './assets/audio/watertap_1_.ogg',
    './assets/audio/waterfall.ogg',
    './assets/audio/water-flow_1_.ogg',
    './assets/audio/water-flow_2_.ogg',
    './assets/audio/flow-water.ogg'
];

var webApiSounds = [];
window.onload = initWebApiSounds();

async function initWebApiSounds() {
    for (let i = 0; i < waveSounds.length; ++i) {
        webApiSounds[i] = new Pizzicato.Sound({ 
            source: 'file',
            options: { path: waveSounds[i], loop: true },
            type: 'audio/ogg'
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
