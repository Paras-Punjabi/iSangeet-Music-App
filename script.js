// DOM elements
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let songName = document.querySelector(".song-name");
let startTime = document.querySelector(".startTime");
let endTime = document.querySelector(".endTime");
let range = document.querySelector(".range");
let imageMusic = document.querySelector(".image");
let volume = document.getElementById("volume");
let volumeDiv = document.querySelector(".volumeDiv");
let volumeRange = document.getElementById("volumeRange");
let download = document.getElementById('download');

// objects of songs
let songs = [
  {
    songName: "Bad-Guy",
    audio: "Songs/badguy.mp3",
    image:
      "https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM2fHxtdXNpY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    songName: "Believer",
    audio: "Songs/believer.mp3",
    image:
      "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2ljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    songName: "Lovely",
    audio: "Songs/lovely.mp3",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2ljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    songName: "Attention",
    audio: "Songs/attention.mp3",
    image:
      "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fG11c2ljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    songName: "DJ-Snake",
    audio: "Songs/djsnake.mp3",
    image:
      "https://images.unsplash.com/photo-1465225314224-587cd83d322b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    songName: "Each-Other",
    audio: "Songs/each-other.mp3",
    image:
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fG11c2ljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    songName: "Peaky-Blinder",
    audio: "Songs/otnicka.mp3",
    image:
      "https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEzfHxtdXNpY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    songName: "Falling",
    audio: "Songs/falling.mp3",
    image:
      "https://images.unsplash.com/photo-1519139270028-ab664cf42264?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI4fHxtdXNpY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    songName: "Elgit-Doda",
    audio: "Songs/elgit-doda.mp3",
    image:
      "https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    songName: "The-Nights",
    audio: "Songs/TheNights.mp3",
    image:
      "https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    songName: "Broken Hearts",
    audio: "Songs/blackbear.mp3",
    image:
      "https://images.unsplash.com/photo-1433622070098-754fdf81c929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    songName: "Sugar and Brownies",
    audio: "Songs/dharia.mp3",
    image:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    songName: "Cheap Thrills",
    audio: "Songs/cheapthrills.mp3",
    image:
      "https://images.unsplash.com/photo-1598519502953-96e1fb8d4a09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHJvY2slMjBtdXNpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    songName: "Deep End",
    audio: "Songs/deepend.mp3",
    image:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJvY2slMjBtdXNpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

let counter = 0;
let audio = new Audio(songs[counter].audio);
songName.innerHTML = "Music is Life Itself";

// Play song
play.addEventListener(
  "click",
  (PlaySong = () => {
    audio.volume = volumeRange.value;
    audio.play();
    songName.innerHTML = songs[counter].songName;
    play.classList.add("hide");
    pause.classList.remove("hide");
    setInterval(() => {
      updateTimeline(audio);
      let minutes = Math.floor(audio.currentTime / 60);
      let seconds = Math.floor(audio.currentTime - minutes * 60);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      startTime.innerHTML = `${minutes}:${seconds}`;
    });
  })
);

// Pause song
pause.addEventListener(
  "click",
  (PauseSong = () => {
    audio.pause();
    songName.innerHTML = songs[counter].songName;
    pause.classList.add("hide");
    play.classList.remove("hide");
    range.value = audio.currentTime;
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime - minutes * 60);
    startTime.innerHTML = `${minutes}:${seconds}`;
  })
);

// Play Next
forward.addEventListener(
  "click",
  (playNext = () => {
    counter++;
    if (counter > songs.length - 1) {
      counter = 0;
    }
    imageMusic.style.background = `url('${songs[counter].image}')`;
    songName.innerHTML = songs[counter].songName;
    audio.src = songs[counter].audio;

    
    audio.play();
  })
);

// Play Previous
backward.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = songs.length - 1;
  }
  imageMusic.style.background = `url('${songs[counter].image}')`;
  audio.src = songs[counter].audio;

  songName.innerHTML = songs[counter].songName;

  audio.play();
});


// Timeline function
function updateTimeline(song) {
  let duration = song.duration;
  range.max = duration;
  let min = duration / 60;
  let MinInt = Math.floor(min);
  let secondsLeft = Math.floor((min - MinInt) * 60);
  if (secondsLeft < 10) {
    secondsLeft = `0${secondsLeft}`;
  }
  if (MinInt < 10) {
    MinInt = `0${MinInt}`;
  }

  endTime.innerHTML = `${MinInt}:${secondsLeft}`;
  range.value = song.currentTime;
}

// playList Code
let list = document.querySelector(".list");

list.addEventListener("click", () => {
  // playlist body
  let listMusic = document.createElement("div");
  listMusic.classList.add("listMusic");
  document.body.appendChild(listMusic);

  // total tracks
  let span = document.createElement("span");
  span.innerHTML = `${songs.length} tracks`;
  span.classList.add("track");
  listMusic.appendChild(span);

  // icon of cross
  let icon = document.createElement("div");
  icon.innerHTML = `<i class="fas fa-times"></i>`;
  icon.classList.add("cross");
  listMusic.appendChild(icon);

  // cross the playlist to remove from DOM
  icon.addEventListener("click", () => {
    listMusic.remove();
  });

  // list of songs in playlist
  songs.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = item.songName;
    listMusic.appendChild(li);

    // click event to play that particular song
    li.addEventListener("click", (e) => {
      audio.currentTime = 0;
      audio.pause();
      counter = index;
      audio = new Audio(songs[index].audio);
      imageMusic.style.background = `url(${item.image})`;
      PlaySong();
    });
  });

  // for styling the playlist list
  listMusic.firstElementChild.nextElementSibling.style.marginTop = "40px";
});

// autoplay the next song when the current song gets over
audio.addEventListener("ended", playNext);

// to drag the range and play the song from that particular position
range.addEventListener("input", () => {
  audio.currentTime = range.value;
});


// volume icon click event
volume.addEventListener("click", () => {
  volumeRange.classList.toggle("visibility");
  document.getElementById("volumeValue").classList.toggle("visibility");
});

// code to change the volume
volumeRange.addEventListener("input", () => {
  audio.volume = volumeRange.value;
  // value of current volume
  document.getElementById("volumeValue").innerHTML = `${Math.ceil(
    volumeRange.value * 100
  )}%`;
});

download.addEventListener('click',()=>{
  PauseSong();
  window.open(audio.src)
})
