//initalize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressbar = document.getElementById("Progressbar");
let info = document.getElementById("info");
let masterSongName = document.getElementById('mastersongname');
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Like me love you just",
    filePath: "1.mp3.mp3",
    coverPath: "images/10.jpg",
  },
  {
    songName: "Raataan lambiyaaaaa",
    filePath: "2.mp3.mp3",
    coverPath: "images/1.jpg",
  },
  {
    songName: "Man Bharrya - shersh",
    filePath: "3.mp3.mp3",
    coverPath: "images/2.jpg",
  },
  {
    songName: " khad tenu me dasaaa",
    filePath: "4.mp3.mp3",
    coverPath: "images/3.jpg",
  },
  {
    songName: "Maiyya Menu- jersey",
    filePath: "5.mp3.mp3",
    coverPath: "images/4.jpg",
  },
  {
    songName: " Meri maa k brabar",
    filePath: "6.mp3.mp3",
    coverPath: "images/5.jpg",
  },
  {
    songName: "Moonlight - Harnoor",
    filePath: "7.mp3.mp3",
    coverPath: "images/6.jpg",
  },
  {
    songName: "Aaj Dil Shayaranaaaa",
    filePath: "8.mp3.mp3",
    coverPath: "images/7.jpg",
  },
  {
    songName: "These Days - sidhu",
    filePath: "9.mp3.mp3",
    coverPath: "images/1.jpg",
  },
  {
    songName: "Tum se Hi - JWM",
    filePath: "10.mp3.mp3",
    coverPath: "images/4.jpg",
  },
];
songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//play/puse click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    // audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    info.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    info.style.opacity = 0;
  }
});

//listen to events

audioElement.addEventListener("timeupdate", () => {

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressbar.value = progress;
});
progressbar.addEventListener("change", () => {
  audioElement.currentTime = (progressbar.value * audioElement.duration) / 100;
});
const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemplay")).forEach(
    (element) => {
        element.classList.remove('fa-Circle-pause');
        element.classList.add('fa-Circle-play');
      
    }
  );
};
Array.from(document.getElementsByClassName("songItemplay")).forEach((element) => {
    element.addEventListener("click", (e) => {
      makeAllPlay();
     songIndex = parseInt( e.target.id)
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      masterSongName.innerText= songs[songIndex].songName;
      audioElement.src = `${songIndex+1}.mp3.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      info.style.opacity = 1
      masterPlay.classList.remove('fa-Circle-play');
        masterPlay.classList.add('fa-Circle-pause');
    });
  }
);
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    info.style.opacity = 1
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
