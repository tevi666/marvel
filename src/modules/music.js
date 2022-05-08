export const music = () => {
    const soundTrack = document.querySelector('audio');
    const play = document.querySelector('.music');
    const pause = document.querySelector('.pause');
    const text = document.querySelector('.text');

    text.innerHTML = 'Stepan Pennsbroke "A man without love"';

    soundTrack.autoplay = true;

    play.addEventListener('click', () => {
        soundTrack.play();
        text.style.display = 'inline-block';
    });
    pause.addEventListener('click', () => {
        soundTrack.pause();
        text.style.display = 'none';
    });

    soundTrack.src = '/dist/audio/stephen-pennsbroke-a-man-without-love-wake-up-alarm_108059729.mp3';
    play.innerHTML = `<svg id='play' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"/></svg>`;

    pause.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM224 191.1v128C224 337.7 209.7 352 192 352S160 337.7 160 320V191.1C160 174.3 174.3 160 191.1 160S224 174.3 224 191.1zM352 191.1v128C352 337.7 337.7 352 320 352S288 337.7 288 320V191.1C288 174.3 302.3 160 319.1 160S352 174.3 352 191.1z"/></svg>`;
};