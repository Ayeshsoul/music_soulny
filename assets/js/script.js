"use strict";

const musicData = [
  {
    backgroundImage: "./assets/images/1.jpg",
    posterUrl: "./assets/images/1.jpg",
    title: "Faded",
    album: "",
    year: 2015,
    artist: "Alan Walker",
    musicPath: "./assets/music/1.mp3",
  },
  {
    backgroundImage: "./assets/images/2.jpg",
    posterUrl: "./assets/images/2.jpg",
    title: "Dil-Male Version",
    album: "Ek Villain Returs",
    year: 2022,
    artist: "Raghav Chaitanya",
    musicPath: "./assets/music/2.mp3",
  },
  {
    backgroundImage: "./assets/images/3.jpg",
    posterUrl: "./assets/images/3.jpg",
    title: "Dil-Female Version",
    album: "Ek Villain Returs",
    year: 2022,
    artist: "Shreya Goshal",
    musicPath: "./assets/music/3.mp3",
  },
  {
    backgroundImage: "./assets/images/4.jpg",
    posterUrl: "./assets/images/4.jpg",
    title: "Dil Jaaniye",
    album: "",
    year: 2022,
    artist: "Jubin Nautiyal, Tulsi Kumar",
    musicPath: "./assets/music/4.mp3",
  },
  {
    backgroundImage: "./assets/images/5.jpg",
    posterUrl: "./assets/images/5.jpg",
    title: "Do Gallan",
    album: "",
    year: 2022,
    artist: "Neha Kakkar, Rohanpreet Singh",
    musicPath: "./assets/music/5.mp3",
  },
  {
    backgroundImage: "./assets/images/6.jpg",
    posterUrl: "./assets/images/6.jpg",
    title: "Doob Gaye",
    album: "",
    year: 2022,
    artist: "Guru Randhawa",
    musicPath: "./assets/music/6.mp3",
  },
  {
    backgroundImage: "./assets/images/7.jpg",
    posterUrl: "./assets/images/7.jpg",
    title: "Duji Vaar Pyar",
    album: "",
    year: 2022,
    artist: "Sunanda Sharma",
    musicPath: "./assets/music/7.mp3",
  },
  {
    backgroundImage: "./assets/images/8.jpg",
    posterUrl: "./assets/images/8.jpg",
    title: "Eyes on You",
    album: "",
    year: 2022,
    artist: "Tarsem Jassar",
    musicPath: "./assets/music/8.mp3",
  },
  {
    backgroundImage: "./assets/images/9.jpg",
    posterUrl: "./assets/images/9.jpg",
    title: "Filhall-Cover",
    album: "",
    year: 2022,
    artist: "Nupur Sanon",
    musicPath: "./assets/music/9.mp3",
  },
  {
    backgroundImage: "./assets/images/10.jpg",
    posterUrl: "./assets/images/10.jpg",
    title: "Ijazat Cover - Female",
    album: "",
    year: 2022,
    artist: "Nehaal Naseem",
    musicPath: "./assets/music/10.mp3",
  },
  {
    backgroundImage: "./assets/images/11.jpg",
    posterUrl: "./assets/images/11.jpg",
    title: "Ijazat Reply Version",
    album: "",
    year: 2022,
    artist: "Banet Dosanjh",
    musicPath: "./assets/music/11.mp3",
  },
  {
    backgroundImage: "./assets/images/12.jpg",
    posterUrl: "./assets/images/12.jpg",
    title: "Jo Bhi Kasmein",
    album: "",
    year: 2022,
    artist: "Udit Narayan, Alka Yagnik",
    musicPath: "./assets/music/12.mp3",
  },
  {
    backgroundImage: "./assets/images/13.jpg",
    posterUrl: "./assets/images/13.jpg",
    title: "Jo Tu Na Mila",
    album: "",
    year: 2022,
    artist: "Asim Azhar",
    musicPath: "./assets/music/13.mp3",
  },
  {
    backgroundImage: "./assets/images/14.jpg",
    posterUrl: "./assets/images/14.jpg",
    title: "Kahani Suno",
    album: "",
    year: 2022,
    artist: "Kaifi Khalil",
    musicPath: "./assets/music/14.mp3",
  },
  {
    backgroundImage: "./assets/images/15.jpg",
    posterUrl: "./assets/images/15.jpg",
    title: "Kaise Hua",
    album: "",
    year: 2022,
    artist: "Vishal Mishra",
    musicPath: "./assets/music/15.mp3",
  },
  {
    backgroundImage: "./assets/images/16.jpg",
    posterUrl: "./assets/images/16.jpg",
    title: "Kal Ho Naa Ho",
    album: "",
    year: 2022,
    artist: "Asim Azhar",
    musicPath: "./assets/music/16.mp3",
  },
  {
    backgroundImage: "./assets/images/17.jpg",
    posterUrl: "./assets/images/17.jpg",
    title: "Kalank-(Duet)",
    album: "",
    year: 2022,
    artist: "Arijit Singh, Shilpa Rao",
    musicPath: "./assets/music/17.mp3",
  },
  {
    backgroundImage: "./assets/images/18.jpg",
    posterUrl: "./assets/images/18.jpg",
    title: "Lovely",
    album: "",
    year: 2022,
    artist: "Billie Ellish",
    musicPath: "./assets/music/18.mp3",
  },
  {
    backgroundImage: "./assets/images/19.jpg",
    posterUrl: "./assets/images/19.jpg",
    title: "Lut Gaye",
    album: "",
    year: 2022,
    artist: "Jubin Nautiyal",
    musicPath: "./assets/music/19.mp3",
  },
  {
    backgroundImage: "./assets/images/20.jpg",
    posterUrl: "./assets/images/20.jpg",
    title: "Mehrama - Love Aaj Kal",
    album: "",
    year: 2022,
    artist: "Darshan Raval, Antara Mitra",
    musicPath: "./assets/music/20.mp3",
  },
  {
    backgroundImage: "./assets/images/21.jpg",
    posterUrl: "./assets/images/21.jpg",
    title: "Moon Rise",
    album: "",
    year: 2022,
    artist: "Guru Randhawa",
    musicPath: "./assets/music/21.mp3",
  },
  {
    backgroundImage: "./assets/images/22.jpg",
    posterUrl: "./assets/images/22.jpg",
    title: "Pasoori",
    album: "",
    year: 2022,
    artist: "Ali Sethi, Shae Gill",
    musicPath: "./assets/music/22.mp3",
  },
  {
    backgroundImage: "./assets/images/23.jpg",
    posterUrl: "./assets/images/23.jpg",
    title: "Rafta-Rafta-Sanam",
    album: "",
    year: 2022,
    artist: "Atif Aslam",
    musicPath: "./assets/music/23.mp3",
  },
  {
    backgroundImage: "./assets/images/24.jpg",
    posterUrl: "./assets/images/24.jpg",
    title: "Ride-It-(Kya-Yehi-Pyar-Hai)-Female-Cover",
    album: "",
    year: 2022,
    artist: "Aish",
    musicPath: "./assets/music/24.mp3",
  },
  {
    backgroundImage: "./assets/images/25.jpg",
    posterUrl: "./assets/images/25.jpg",
    title: "Ride-It",
    album: "",
    year: 2022,
    artist: "Jay Sean",
    musicPath: "./assets/music/25.mp3",
  },
  {
    backgroundImage: "./assets/images/26.jpg",
    posterUrl: "./assets/images/26.jpg",
    title: "River",
    album: "",
    year: 2022,
    artist: "Bishop Briggs",
    musicPath: "./assets/music/26.mp3",
  },
  {
    backgroundImage: "./assets/images/27.jpg",
    posterUrl: "./assets/images/27.jpg",
    title: "Rozana",
    album: "",
    year: 2022,
    artist: "Shreya Goshal",
    musicPath: "./assets/music/27.mp3",
  },
  {
    backgroundImage: "./assets/images/28.jpg",
    posterUrl: "./assets/images/28.jpg",
    title: "Shut Down - Blackpink",
    album: "",
    year: 2022,
    artist: "Blackpink",
    musicPath: "./assets/music/28.mp3",
  },
  {
    backgroundImage: "./assets/images/29.jpg",
    posterUrl: "./assets/images/29.jpg",
    title: "Sugar And Brownies",
    album: "",
    year: 2022,
    artist: "Dharia",
    musicPath: "./assets/music/29.mp3",
  },
  {
    backgroundImage: "./assets/images/30.jpg",
    posterUrl: "./assets/images/30.jpg",
    title: "Tere Hawaale",
    album: "",
    year: 2022,
    artist: "Arijit Singh, Shilpa Rao",
    musicPath: "./assets/music/30.mp3",
  },
  {
    backgroundImage: "./assets/images/31.jpg",
    posterUrl: "./assets/images/31.jpg",
    title: "Thodi Jagah - Marjaavaan",
    album: "",
    year: 2022,
    artist: "Arijit Singh",
    musicPath: "./assets/music/31.mp3",
  },
  {
    backgroundImage: "./assets/images/32.jpg",
    posterUrl: "./assets/images/32.jpg",
    title: "Tum Hi Aana - Marjaavaan",
    album: "",
    year: 2022,
    artist: "Jubin Nautiyal",
    musicPath: "./assets/music/32.mp3",
  },
  {
    backgroundImage: "./assets/images/33.jpg",
    posterUrl: "./assets/images/33.jpg",
    title: "Under-The-Influene",
    album: "",
    year: 2022,
    artist: "Chris Brown",
    musicPath: "./assets/music/33.mp3",
  },
  {
    backgroundImage: "./assets/images/34.jpg",
    posterUrl: "./assets/images/34.jpg",
    title: "Waalian",
    album: "",
    year: 2022,
    artist: "Harnoor",
    musicPath: "./assets/music/34.mp3",
  },
];

/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * PLAYLIST
 *
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${
      i === 0 ? "playing" : ""
    }" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${
    musicData[i].title
  } Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}

/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 *
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
};

addEventOnElements(playlistTogglers, "click", togglePlaylist);

/**
 * PLAYLIST ITEM
 *
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
};

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});

/**
 * PLAYER
 *
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute(
    "alt",
    `${musicData[currentMusic].title} Album Poster`
  );
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
};

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - minutes * 60);
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
};

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
};

audioSource.addEventListener("loadeddata", updateDuration);

/**
 * PLAY MUSIC
 *
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
};

playBtn.addEventListener("click", playMusic);

/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
};

/**
 * RANGE FILL WIDTH
 *
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
};

addEventOnElements(ranges, "input", updateRangeFill);

/**
 * SEEK MUSIC
 *
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
};

playerSeekRange.addEventListener("input", seek);

/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
};

/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? (currentMusic = 0) : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
};

playerSkipNextBtn.addEventListener("click", skipNext);

/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? (currentMusic = musicData.length - 1) : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
};

playerSkipPrevBtn.addEventListener("click", skipPrev);

/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => (currentMusic = getRandomMusic());

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
};

playerShuffleBtn.addEventListener("click", shuffle);

/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
};

playerRepeatBtn.addEventListener("click", repeat);

/**
 * MUSIC VOLUME
 *
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
};

playerVolumeRange.addEventListener("input", changeVolume);

/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
};

playerVolumeBtn.addEventListener("click", muteVolume);
