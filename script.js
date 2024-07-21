const result = document.getElementById("result");

function playSong() {
    const audio = document.getElementById('audio');
    // console.log("playing");
    audio.play();
    result.innerText = "Playing....";
}

function pauseSong() {
    const audio = document.getElementById('audio');
    audio.pause();
    result.innerText = "Paused";
}
