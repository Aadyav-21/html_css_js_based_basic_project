console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('song/1.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName:"Salam-e-Ishq", filepath:"song/1.mp3.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq", filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
]
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    }
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');

})
document.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

})
