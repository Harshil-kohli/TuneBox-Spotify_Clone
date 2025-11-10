//-----------------------------------------------------------------------------------------------------

const container = document.getElementById('scrollContainer');
const scrollBar = document.getElementById('scrollBar');

container.addEventListener('scroll', () => {
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const scrollPercent = scrollTop / scrollHeight;

    const newHeight = scrollPercent * container.clientHeight;
    scrollBar.style.height = `${newHeight}px`;
});
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();


});

//-------------------------------------------------------------------------------------------------------------------

// Constants
const FIRST_CONTAINER_CHILD = "nav_box2_child"; // Changed from nav_box2
const SECOND_CONTAINER = "main_cont2";
const STORAGE_KEY = "spotify_active_view";
const LOGO_ACTIVE_POSITION = { left: "80px", top: "5px" };
const LOGO_DEFAULT_POSITION = { left: "22px", top: "55px" };

// ===== CORE FUNCTIONALITY =====
function toggleViews(showSecondContainer) {
  const firstContainerChild = document.querySelector(`.${FIRST_CONTAINER_CHILD}`);
  const secondContainer = document.querySelector(`.${SECOND_CONTAINER}`);
  
  if (showSecondContainer) {
    firstContainerChild.style.display = "none";
    secondContainer.style.display = "block";
    // localStorage.setItem(STORAGE_KEY, "second");
  } else {
    firstContainerChild.style.display = "block";
    secondContainer.style.display = "none";
    // localStorage.setItem(STORAGE_KEY, "first");
  }
}

// ===== INITIALIZE =====
document.addEventListener("DOMContentLoaded", () => {
  const savedView = localStorage.getItem(STORAGE_KEY);
  toggleViews(savedView === "second");
  
  if (savedView === "second") {
    document.querySelector(".logo_hidden").style.left = LOGO_ACTIVE_POSITION.left;
    document.querySelector(".logo_hidden").style.top = LOGO_ACTIVE_POSITION.top;
    document.querySelector(".library").classList.add("visible");
    document.querySelectorAll(".bar11, .bar22").forEach(bar => bar.classList.add("visible"));
    document.querySelector(".browse").classList.add("visible");
  }
});

// ===== BUTTON HANDLERS ===== 
// For box_button1 and box_button2
document.querySelectorAll(".box_button1, .box_button2").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".logo_hidden").style.left = LOGO_ACTIVE_POSITION.left;
    document.querySelector(".logo_hidden").style.top = LOGO_ACTIVE_POSITION.top;
    
    const browse = document.querySelector(".browse");
    setTimeout(() => {
      browse.classList.remove("visible");
      void browse.offsetWidth;
      browse.classList.add("visible");
    }, 1000);
    
    if (btn.classList.contains("box_button2")) {
      document.querySelector(".library").classList.add("visible");
      document.querySelectorAll(".bar11, .bar22").forEach(bar => bar.classList.add("visible"));
    }
    
    toggleViews(true);
  });
});

// For back button
document.querySelector(".browse").addEventListener("click", () => {
  document.querySelector(".parent_podcast").style.visibility="hidden"
  document.querySelector(".nav_bar5").style.visibility = "hidden";
  document.querySelector(".nav_bar5").style.opacity = 0;
  document.querySelector(".spotify_navlogo").style.visibility = "hidden";
  document.querySelector(".spotify_navlogo").style.opacity = 0;
  document.querySelector(".nav_bar6_text").style.visibility = "hidden";
  document.querySelector(".nav_bar6_text").style.opacity = 0;
  document.querySelector(".nav_bar6_text2").style.visibility = "hidden";
  document.querySelector(".nav_bar6_text2").style.opacity = 0;
  document.querySelector(".logo_hidden").style.left = LOGO_DEFAULT_POSITION.left;
  document.querySelector(".logo_hidden").style.top = LOGO_DEFAULT_POSITION.top;
  document.querySelector(".library").classList.remove("visible");
  document.querySelectorAll(".bar11, .bar22").forEach(bar => bar.classList.remove("visible"));
  document.querySelector(".browse").classList.remove("visible");
  toggleViews(false);
});


const parent = document.querySelector('.playbar');
const count = parent.children.length;
parent.style.gridTemplateRows = `repeat(${count}, 95px)`;


document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('scrollContainerr');
  const scrollContent = container.querySelector('.scroll-content');
  const scrollBar = document.getElementById('scrollBarr');
  const scrollTrack = container.querySelector('.scroll-track');
  
  // Initialize scrollbar as hidden
  scrollBar.style.opacity = '0';
  scrollTrack.style.opacity = '0';
  
  // Show on container hover
  container.addEventListener('mouseenter', function() {
      scrollBar.style.opacity = '1';
      scrollTrack.style.opacity = '1';
  });
  
  // Hide when leaving container
  container.addEventListener('mouseleave', function() {
      scrollBar.style.opacity = '0';
      scrollTrack.style.opacity = '0';
  });
  
  // Rest of your existing scrollbar code...
  updateScrollbar();
  scrollContent.addEventListener('scroll', updateScrollbar);
  
  // ... (keep all your existing scrollbar implementation code)
  
  function updateScrollbar() {
      const scrollPercent = scrollContent.clientHeight / scrollContent.scrollHeight;
      const thumbHeight = Math.max(30, scrollPercent * scrollTrack.clientHeight);
      
      scrollBar.style.height = thumbHeight + 'px';
      
      const scrollTop = scrollContent.scrollTop;
      const maxScrollTop = scrollContent.scrollHeight - scrollContent.clientHeight;
      const thumbTop = (scrollTop / maxScrollTop) * (scrollTrack.clientHeight - thumbHeight);
      
      scrollBar.style.top = thumbTop + 'px';
  }
});

document.querySelector(".box_button2").addEventListener("click",()=>{
  document.querySelector(".nav_bar5").style.visibility = "visible";
  document.querySelector(".nav_bar5").style.opacity=1;
  setTimeout(() => {
    document.querySelector(".spotify_navlogo").style.visibility = "visible";
    document.querySelector(".parent_podcast").style.opacity = 1;
    document.querySelector(".spotify_navlogo").style.opacity = 1;
    document.querySelector(".nav_bar6_text").style.visibility = "visible";
    document.querySelector(".nav_bar6_text").style.opacity = 1;
    document.querySelector(".nav_bar6_text2").style.visibility = "visible";
    document.querySelector(".nav_bar6_text2").style.opacity = 1;
    document.querySelector(".parent_podcast").style.visibility="visible"
  }, 500);
})

let shouldShowPopup = false;

// When .box_button2 is clicked, set flag to true
document.querySelector('.box_button2').addEventListener('click', function() {
  localStorage.setItem('showPopup', 'true');
});

// When .browse is clicked, reset flag
document.querySelector('.browse').addEventListener('click', function() {
  localStorage.removeItem('showPopup');
});

// On page load, check
window.onload = function() {
  if (localStorage.getItem('showPopup') === 'true') {
    document.getElementById('popup').classList.add('show');
  }
};

// New function for reload
function clearPopupAndReload() {
  localStorage.removeItem('showPopup');
  location.reload();
}

setInterval(() => { if (window.innerWidth < 750) alert("This app is made for dekstop and browsers only. Please downlaod the app to continue browsing."); }, 10000);

//Audio track-------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const songDetails = [
    { title: "Skyfall", author: "James Bond" },
    { title: "Hymn For The Weekend", author: "Coldplay" },
    { title: "Blinding Lights", author: "The Weeknd" },
    { title: "Save Your Tears", author: "The Weeknd" },
    { title: "Middle Of The Night", author: "Elley Duhé" },
    { title: "Old Town Road", author: "Lil Nas X ft. Billy Ray Cyrus" }
  ];

  const songs = [
    "https://ia601708.us.archive.org/18/items/tvtunes_25691/James%20Bond%20-%20Skyfall.mp3",
    "https://ia803104.us.archive.org/34/items/Coldplay_201807/Hymn%20For%20The%20Weekend.mp3",
    "https://dn720307.ca.archive.org/0/items/Weeknd/The_Weeknd_-_Blinding_Lights_b64f0d202.mp3",
    "https://dn720307.ca.archive.org/0/items/Weeknd/The_Weeknd_-_Save_Your_Tears_b64f0d216.mp3",
    "https://dn721907.ca.archive.org/0/items/elley-duhe-middle-of-the-night/Elley%20Duhé%20-%20MIDDLE%20OF%20THE%20NIGHT.mp3",
    "https://dn721807.ca.archive.org/0/items/oldtown/Lil%20Nas%20X%20-%20Old%20Town%20Road%20%28Official%20Video%29%20ft.%20Billy%20Ray%20Cyrus%20%281%29.mp3"
  ];

  document.querySelectorAll(".play_box1").forEach(box => {
    box.innerHTML = `
      <div class="equalizer">
        <div class="barrr"></div>
        <div class="barrr"></div>
        <div class="barrr"></div>
      </div>
      <div class="inner_play_box1"></div>
    `;
  });

  let currentIndex = 0;
  const audio = new Audio();  // it crets an audio tag

  const loader = document.getElementById("audioLoader");
  let loadTimeout
  const playBtn = document.querySelector(".player_play");
  const nextBtn = document.querySelector(".player_next");
  const prevBtn = document.querySelector(".player_previous");
  const forwardBtn = document.querySelector(".player_front");
  const backBtn = document.querySelector(".player_back");
  const durationDisplay = document.querySelector(".current_duration");
  const navPlayer = document.querySelector(".nav_player");
  const songBoxes = document.querySelectorAll(".play_box1");

  // Setup songs in boxes
  songBoxes.forEach((box, i) => {
    if (!songDetails[i]) return box.remove();  // if the index doesn't lie in songDetails, then remove the box.

    const inner = box.querySelector(".inner_play_box1");
    const img = document.createElement("img");
    img.src = "music.svg";
    img.className = "song_image";
    box.insertBefore(img, inner);  // insertBefore inserts the img befor inner_play_box1

    inner.innerHTML = `
      <p class="song_title">${songDetails[i].title}</p>
      <p class="song_author"><strong>${songDetails[i].author}</strong></p>
    `;

    box.style.cursor = "pointer";
    box.addEventListener("click", () => playSong(i));
  });

  // Setup event listeners
  playBtn.addEventListener("click", () => {
    audio.paused ? audio.play() : audio.pause();
    updatePlayIcon();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    playSong(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(currentIndex);
  });

  forwardBtn.addEventListener("click", () => audio.currentTime += 10);
  backBtn.addEventListener("click", () => audio.currentTime -= 10);
  document.querySelector(".player_reload").addEventListener("click",()=>audio.currentTime=0)

const currentTimeEl = document.querySelector(".current_time");
const totalTimeEl = document.querySelector(".total_time");

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

audio.addEventListener("loadedmetadata", () => {
  totalTimeEl.textContent = formatTime(audio.duration);
});

let timeInterval;
audio.addEventListener("play", () => {
  clearInterval(timeInterval);// clear old timer if any
  timeInterval = setInterval(() => {
    if (!audio.paused && !audio.ended) {
      currentTimeEl.textContent = formatTime(audio.currentTime);              //this is the part for scroll_duration.
    }
  }, 500);
});

audio.addEventListener("pause", () => clearInterval(timeInterval));
audio.addEventListener("ended", () => clearInterval(timeInterval));

  audio.addEventListener("play", updatePlayIcon);
  audio.addEventListener("pause", updatePlayIcon);

  function playNextSong() {
    currentIndex = (currentIndex + 1) % songs.length;  // this plays the next song when ended
    playSong(currentIndex);
  }

  let loadTimeout2; // Global variable to store timeout reference

function playSong(index) {
  clearTimeout(loadTimeout2);
  currentIndex = index;
  audio.src = songs[currentIndex];
  audio.addEventListener("ended", playNextSong); // Plays the next song when the current one ends.
  navPlayer.style.visibility = "visible";
  updateActiveBox();
  updatePlayIcon();

  loader.style.display = "none";

  // Show loader if audio is not ready within 1 second
  loadTimeout2 = setTimeout(() => {
    if (audio.readyState < 3) loader.style.display = "block";
  }, 1000);

  // Track loading state
  let playErrorTimeout;
  audio.play().then(() => {
    loader.style.display = "none"; // Hide loader if audio starts playing
    clearTimeout(playErrorTimeout); // Stop the error timer if song plays
  }).catch(() => {
    // If play fails, start a timer for 10 seconds
    playErrorTimeout = setTimeout(() => {
      if (audio.paused || audio.readyState < 3) {
        loader.style.display = "none";
        alert("There seems to be a playback or server issue. We are trying to fix it.");
      }
    }, 15000); // 10-second delay before showing alert
  });
  document.querySelector(".song_info_title").innerHTML=songDetails[currentIndex].title
  document.querySelector(".song_info_author").innerHTML=songDetails[currentIndex].author
}


  function updatePlayIcon() {
    playBtn.classList.toggle("playing", !audio.paused);
  }

  function updateActiveBox() {
    songBoxes.forEach((b, i) => {
      b.classList.toggle("active", i === currentIndex);
    });
  }

  audio.addEventListener("canplay", () => {
  clearTimeout(loadTimeout);
  loader.style.display = "none";
});

audio.addEventListener("waiting", () => {
  loader.style.display = "block";
});

audio.addEventListener("playing", () => {
  loader.style.display = "none";
});
const seekBar = document.getElementById("seekBar");
const volumeBar = document.getElementById("volumeBar");
const volumeIcon = document.getElementById("volumeIcon");

audio.volume = volumeBar.value;

audio.addEventListener("loadedmetadata", () => {
  seekBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  seekBar.value = Math.floor(audio.currentTime);
});

seekBar.addEventListener("input", () => {
  audio.currentTime = seekBar.value;
});

volumeBar.addEventListener("input", () => {
  audio.volume = volumeBar.value;
  const v = audio.volume;
  if (v === 0) {
    volumeIcon.src = "l_v.svg";
  } else if (v <= 0.5) {
    volumeIcon.src = "m_v.svg";
  } else {
    volumeIcon.src = "h_v.svg";
  }
});

  // Load first song
  audio.src = songs[currentIndex];
});
