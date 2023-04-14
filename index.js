// initilaz the variable
let audioElement = new Audio("song/1.mp3");

const mastPlay = document.getElementById("masterPlay");
const playGif = document.getElementById("playGif");
const myProgressBar = document.getElementById("myProgressBar");
const songsItem = document.getElementById("songItems");
const menuList = document.getElementById("menuList");
const bord1 = document.getElementById("bord1");
let songCurTime = document.getElementById("songCurTime");
const nextHnadle = document.getElementById("nextHnadle");
const previousHandle = document.getElementById("previousHandle");
let songName = document.getElementById("songName");
let songLength = document.getElementById("songLength");
let songs = document.querySelectorAll(".songs");

const songsList = [
    {songName:"Daiya daiya daiya Re", filePath:"song/1.mp3", coverPath:"./covers/1.jpg", songDuration:"4:38"},
    {songName:"Dard dile Ke", filePath:"song/2.mp3", coverPath:"./covers/2.jpg", songDuration:"5:06"},
    {songName:"Deewani Mai Deewani", filePath:"song/3.mp3", coverPath:"./covers/3.jpg",songDuration:"5:18"},
    {songName:"Dil Meri Na Sune", filePath:"song/4.mp3", coverPath:"./covers/4.jpg",songDuration:"3:54"},
    {songName:"Bhojpuri Song", filePath:"song/5.mp3", coverPath:"./covers/5.jpg",songDuration:"6:28"},
    {songName:"Ek Number", filePath:"song/6.mp3", coverPath:"./covers/6.jpg",songDuration:"3:25"},
    {songName:"salame e-Ishka", filePath:"song/7.mp3", coverPath:"./covers/7.jpg",songDuration:"3:20"},
    {songName:"Gali Galli Me", filePath:"song/8.mp3", coverPath:"./covers/8.jpg",songDuration:"2:51"},
    {songName:" Hindi SadaBahar song", filePath:"song/9.mp3", coverPath:"./covers/9.jpg",songDuration:"1:31:38"}
    
];

// Events listener 
// Master play 
mastPlay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime <= 0){
    audioElement.play();
    mastPlay.classList.remove("fa-circle-play");
    mastPlay.classList.add("fa-circle-pause");
    playGif.style.opacity ="1";
    
   }
   else{
    audioElement.pause();
    mastPlay.classList.remove("fa-circle-pause");
    mastPlay.classList.add("fa-circle-play");
    playGif.style.opacity ="0";
   }
});

// Next play 
nextHnadle.addEventListener('click',()=>{

    const randomNum = (Math.floor(Math.random()*9))+1;

    songsList.find((curElments,index)=>{
        if(randomNum===index){
            audioElement.pause();
            audioElement = new Audio(curElments.filePath);
            audioElement.play();
            myProgressBar.value =0;
            songName.innerHTML = curElments.songName;
            songLength.innerHTML = curElments.songDuration;
        }
    });
});

// Previous play 
previousHandle.addEventListener("click",()=>{
    const randomNum = (Math.floor(Math.random()*9))+1;

    songsList.find((curElments,index)=>{
        if(randomNum===index){
            audioElement.pause();
            audioElement = new Audio(curElments.filePath);
            audioElement.play();
            songName.innerHTML = curElments.songName;
            songLength.innerHTML = curElments.songDuration;
        }
    });

});

// progres Bar updates 
audioElement.addEventListener('timeupdate',()=>{
    const progress = ((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
});


songsList.map((curElmnt,index)=>{
    // console.log(curElmnt);
    const div = document.createElement("div");
    const p = document.createElement("p");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");

    div.classList.add("songs");
    img.src=curElmnt.coverPath;
    img.width=50;
    p.innerHTML = curElmnt.songName;
    h4.innerHTML =curElmnt.songDuration;

    songsItem.appendChild(div);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(h4);

});

menuList.addEventListener('click',()=>{
    songsItem.classList.toggle("display-none");
    bord1.classList.toggle("display-none");

});


