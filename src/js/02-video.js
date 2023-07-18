import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(throttle);
const iframe = document.querySelector("#vimeo-player");

    const player = new Player(iframe);

    player.on('timeupdate',  throttle(function(event){
        localStorage.setItem("videoplayer-current-time", event.seconds);

    }, 1)
    );

    player.setCurrentTime((localStorage.getItem("videoplayer-current-time")))
    .then(function(seconds) {
    // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });

console.log(localStorage.getItem("videoplayer-current-time"));






  