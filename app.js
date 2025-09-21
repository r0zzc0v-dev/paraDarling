let anniversary = "2004-09-30";
let date = new Date(anniversary);
let dateVal = date.getTime();
let today = new Date();
let now = today.getTime();
let value = now - dateVal;
let day = Math.floor(value / (1000 * 60 * 60 * 24));
let month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.4375));
let year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));

console.log(value);

document.getElementById("days").textContent = day.toString();
document.getElementById("months").textContent = month.toString();
document.getElementById("years").textContent = year.toString();


let musicPlayer = document.querySelector(".music-container");
let togglePlayer = document.querySelector(".toggle-player");

let trackInfo = document.querySelector(".track-info");
let trackName = document.querySelector(".trackname");
let trackArtist = document.querySelector(".trackartist");
let trackNav = document.querySelector(".track-nav");

let playPauseBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let prevBtn = document.querySelector(".prev-track");

let trackIndex = 0;
let isPlaying = false;
let isHidden = true;

let currentTrack = document.createElement("audio");
let soundBars = document.querySelector(".sound-bars");


togglePlayer.addEventListener("click", function() {
    isHidden = !isHidden;
    if(isHidden){
        musicPlayer.classList.remove("hide");
        togglePlayer.innerHTML = '<img class="w-[98%]" src="icons/close.svg">';
        trackInfo.style.transitionDelay = "0.4s";
        trackNav.style.transitionDelay = "0.4s";
    } else {
        musicPlayer.classList.add("hide");
        togglePlayer.innerHTML = '<img class="w-full" src="icons/plus.svg">';
        trackInfo.style.transitionDelay = "0s";
        trackNav.style.transitionDelay = "0s";
    }
});

let soundBarsLottie = bodymovin.loadAnimation({
    container: soundBars,
    renderer: "svg",
    loop: true,
    autoPLay: false,
    path: "https://lottie.host/9ec12a7e-e429-453a-9f22-a2af1dcb4dca/2zeuy4rwtP.json",
});

// Obtener el control deslizante de volumen
let volumeSlider = document.getElementById("volumeSlider");

// Establecer el volumen inicial
currentTrack.volume = volumeSlider.value;

// Event listener para el control deslizante
volumeSlider.addEventListener("input", function() {
    currentTrack.volume = this.value; // Ajustar el volumen del audio según el control deslizante
    console.log("Volumen ajustado a:", this.value); // Para depurar
});

let trackList = [
    {
        name: "Hitori No Yoru",
        artist: "TxT",
        path: "./music/Hitori No Yoru.mp3",
    },
    {
        name: "Fairy of shampoo",
        artist: "TxT",
        path: "./music/Fairy of shampoo.mp3",
    },
    {
        name: "Chasing that feeling",
        artist: "TxT",
        path: "./music/Chasing That Feeling.mp3",
    },
    {
        name: "Devil by the window",
        artist: "TxT",
        path: "./music/Devil by the window.mp3",
    },
    {
        name: "Run away",
        artist: "TxT",
        path: "./music/Run Away.mp3",
    },
    {
        name: "Growing pain",
        artist: "TxT",
        path: "./music/Growing Pain.mp3",
    },
    {
        name: "Farewell, Neverland",
        artist: "TxT",
        path: "./music/Farewell, Neverland.mp3",
    },
    {
        name: "Frost",
        artist: "TxT",
        path: "./music/Frost.mp3",
    },
    {
        name: "Lovesong",
        artist: "TxT",
        path: "./music/LOVESONG.mp3",
    },
    {
        name: "All-american bitch",
        artist: "Olivia Rodrigo",
        path: "./music/Olivia Rodrigo - all-american bitch.mp3",
    },
    {
        name: "Olivia Rodrigo - the grudge",
        artist: "Olivia Rodrigo",
        path: "./music/Olivia Rodrigo - the grudge.mp3",
    },
    {
        name: "Olivia Rodrigo - lacy",
        artist: "Olivia Rodrigo",
        path: "./music/Olivia Rodrigo - lacy.mp3",
    },
    
];

// EVENT LISTENERS
playPauseBtn.addEventListener("click", playPauseTrack);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

function loadTrack(trackIndex){
    currentTrack.src = trackList[trackIndex].path;
    trackName.textContent = trackList[trackIndex].name;
    trackArtist.textContent = trackList[trackIndex].artist;
    currentTrack.addEventListener("ended", nextTrack);
    currentTrack.load();
}

loadTrack(trackIndex);

function playPauseTrack(){
    if(isPlaying == false){
        playTrack();
    }else{
        pauseTrack();
    }
}

function playTrack(){
    currentTrack.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<img class="w-8" src="icons/pause.svg">';
    soundBarsLottie.play();
}

function pauseTrack(){
    currentTrack.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<img class="w-8" src="icons/play.svg">';
    soundBarsLottie.stop();
}

function nextTrack(){
    if(trackIndex < trackList.length - 1){
        trackIndex += 1;
        loadTrack(trackIndex);
        playTrack();
    }else{
        trackIndex = 0;
        loadTrack(trackIndex);
        playTrack();
    } 
}

function prevTrack(){
    if(trackIndex > 0){
        trackIndex -= 1;
        loadTrack(trackIndex);
        playTrack();
    }else{
        trackIndex = trackList.length - 1;
        loadTrack(trackIndex);
        playTrack();
    }
}














// PASTEL Y VIDEO
document.addEventListener("DOMContentLoaded", function () {
    const cake = document.querySelector(".cake");
    const candleCountDisplay = document.getElementById("candleCount");
    let candles = [];

    function updateCandleCount() {
        const activeCandles = candles.filter(
            (candle) => !candle.classList.contains("out")
        ).length;
        candleCountDisplay.textContent = activeCandles;
    }

    function addCandle(left, top) {
        const candle = document.createElement("div");
        candle.className = "candle";
        candle.style.left = left + "px";
        candle.style.top = top + "px";

        const flame = document.createElement("div");
        flame.className = "flame";
        candle.appendChild(flame);

        cake.appendChild(candle);
        candles.push(candle);
        updateCandleCount();
    }

    // Función para añadir 20 velas automáticamente
    function addInitialCandles() {
        for (let i = 0; i < 20; i++) {
            const randomLeft = Math.random() * 300 + 80; // Generar una posición aleatoria
            const randomTop = Math.random() * 80;
            addCandle(randomLeft, randomTop);
        }
    }

    cake.addEventListener("click", function (event) {
        const rect = cake.getBoundingClientRect();
        const left = event.clientX - rect.left;
        const top = event.clientY - rect.top;
        addCandle(left, top);
    });

    function isBlowing() {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
            sum += dataArray[i];
        }
        let average = sum / bufferLength;

        return average > 80; // Modifica el umbral si es necesario
    }

    function blowOutCandles() {
        let blownOut = 0;

        if (candles.length > 0 && candles.some((candle) => !candle.classList.contains("out"))) {
            if (isBlowing()) {
                candles.forEach((candle) => {
                    if (!candle.classList.contains("out") && Math.random() > 0.5) {
                        candle.classList.add("out");
                        blownOut++;
                    }
                });
            }

            if (blownOut > 0) {
                updateCandleCount();
            }

            if (candles.every((candle) => candle.classList.contains("out"))) {
                setTimeout(function () {
                    triggerConfetti();
                    endlessConfetti();
            
                    // Mostrar el primer video y reproducirlo con volumen bajo
                    let celebrationVideo = document.getElementById("celebrationVideo");
                    celebrationVideo.volume = 0.2;  // Ajustar el volumen
                    celebrationVideo.style.display = "block";  // Mostrar el video
                    celebrationVideo.play();  // Reproducir el video
            
                    // Cuando el primer video se reproduce, pausar la música
                    pauseTrack();
            
                    // Cuando termine el primer video, mostrar el segundo
                    let secondVideo = document.getElementById("secondVideo");
                    celebrationVideo.addEventListener('ended', function() {
                        // Reproducir el segundo video
                        secondVideo.style.display = "block";  // Mostrar el segundo video
                        secondVideo.volume = 0.2;  // Ajustar el volumen del segundo video
                        secondVideo.play();  // Reproducir el segundo video
            
                        // Cuando se reproduce el segundo video, pausar la música
                        pauseTrack();
            
                        // Cuando termine el segundo video, reanudar la música
                        secondVideo.addEventListener('ended', function() {
                            playTrack(); // Reanudar la música al finalizar el segundo video
                        });
                    });
                }, 200);
            }            
        }
    }

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then(function (stream) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                analyser = audioContext.createAnalyser();
                microphone = audioContext.createMediaStreamSource(stream);
                microphone.connect(analyser);
                analyser.fftSize = 256;
                setInterval(blowOutCandles, 200);
            })
            .catch(function (err) {
                console.log("Unable to access microphone: " + err);
            });
    } else {
        console.log("getUserMedia not supported on your browser!");
    }

    // Llamar a la función para añadir 20 velas cuando la página cargue
    addInitialCandles();
});

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function endlessConfetti() {
    setInterval(function () {
        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0 }
        });
    }, 1000);
}