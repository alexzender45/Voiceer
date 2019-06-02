// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const fullscr = player.querySelector('.player__btn');

// Elements for buttons

const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Working things out functions
// working function
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton(){
    const icon = this.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
video[this.name] = this.value;
}

function handleProgress(){
const percent = (video.currentTime / video.duration) * 100;
progressBar.style.flexBasis = `${percent}%`;
}


function scrub(e){
const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
video.currentTime = scrubTime;
}

// function fullScreen(){
// player.style.backgroundColor = "blue"
// }


// add eventlistener

video.addEventListener("click", togglePlay);
video.addEventListener("play",updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
skipButtons.forEach(button => button.addEventListener('click', skip));
toggle.addEventListener('click', togglePlay)

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup',  () => mousedown = false);
//fullscr.addEventListener('click', fullScreen);

// function for style
let deadline = new Date("June 5, 2019 15:37:25").getTime(); 
  
let x = setInterval(function() { 
  
let now = new Date().getTime(); 
let t = deadline - now; 
let days = Math.floor(t / (1000 * 60 * 60 * 24)); 
let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
let seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("day").innerHTML =days ; 
document.getElementById("hour").innerHTML =hours; 
document.getElementById("minute").innerHTML = minutes;  
document.getElementById("second").innerHTML =seconds;  
if (t < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "TIME UP"; 
        document.getElementById("day").innerHTML ='0'; 
        document.getElementById("hour").innerHTML ='0'; 
        document.getElementById("minute").innerHTML ='0' ;  
        document.getElementById("second").innerHTML = '0'; } 
}, 1000); 




// for toggle

const open = document.getElementById('open');
const roll = document.getElementById('roll');
const hr1 = document.getElementById('hr1');
const hr2 = document.getElementById('hr2');
hr2.style.display = "none";
open.style.display = "none";
// toggle for last function

function toggle1(){
    if(roll.style.display === "block"){
        open.style.display = "none";
        hr2.style.display = "none";  
    }else{
        roll.style.display = "block";
        open.style.display = "none";
        hr2.style.display = "none";
        hr1.style.display = "block";
    }
}

// toogle for open function

function toggle2(){
    if(open.style.display === "none"){
        open.style.display = "block"; 
        roll.style.display = "none";
        hr1.style.display = "none"; 
        hr2.style.display = "block";
    }
}

// for more
const voice = document.getElementById('voice');
const more = document.getElementById('more');
const para1 = document.getElementById('para1');
more.style.display = "none"



function showMore(){
    if(more.style.display === "none"){
        more.style.display = "block";
        voice.style.marginTop = "5%";
        para1.style.marginTop = "3%";   
    }else{
        more.style.display = "none";
        voice.style.marginTop = "-11%";
        para1.style.marginTop = "-3%";  
    }
}