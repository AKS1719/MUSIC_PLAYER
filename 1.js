// Import the track URL
import { trackUrl } from './app.js';

// Function to play a track
function playTrack() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = trackUrl;
    audioPlayer.play();
}

// Example usage
playTrack();
