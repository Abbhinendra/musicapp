let songIndex=0;
let audioElement=new Audio('1.mp3.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogresBar=document.getElementById('myprogresBar');
let gif=document.getElementById('gif');
let songitemPlay=Array.from(document.querySelectorAll('.songitemPlay'));
let songitem=Array.from(document.querySelectorAll('.songitem'));
let mastersongname=document.getElementById('mastersongname');
let songs=[
    {songname:"Sindoor-Laal-Chadhayo", filePath:"1.mp3.mp3", coverPath:"3.jpg"},
    {songname:"Yaar ka Sataya Hua Hai", filePath:"2.mp3.mp3", coverPath:"4.jpg"},
    {songname:"Cheques", filePath:"3.mp3.mp3", coverPath:"5.jpg"},
    {songname:"Yadav-Brand-2", filePath:"4.mp3.mp3", coverPath:"6.jpg"},
    {songname:"Mera EK EK Suit Pade ", filePath:"5.mp3.mp3", coverPath:"7.jpg"},
    {songname:"Zaroori Tha", filePath:"6.mp3.mp3", coverPath:"8.jpg"},
    {songname:"Love-Me-Like-You-Do", filePath:"7.mp3.mp3", coverPath:"9.jpg"},
    {songname:"Laung Laachi", filePath:"8.mp3.mp3", coverPath:"10.jpg"},
    {songname:"Vaaste", filePath:"9.mp3.mp3", coverPath:"11.jpg"},
    {songname:"Bom Diggy Diggy", filePath:"10.mp3.mp3", coverPath:"12.jpg"},
   
]

songitem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname;
})

//Handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;


    }
    else{
 audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

        
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogresBar.value=progress;
    //update seekbar
})

myprogresBar.addEventListener('change',()=>{
audioElement.currentTime=myprogresBar.value * audioElement.duration/100;
});
const makeAllPlays=()=>{
   
    songitemPlay.forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
songitemPlay.forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
    index=parseInt(e.target.id);
e.target.classList.remove("fa-play-circle");
e.target.classList.add("fa-pause-circle");
audioElement.src=`${index}.mp3.mp3`;
mastersongname.innerText=songs[index-1].songname;
gif.style.opacity=1;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
})

document.getElementById('next').addEventListener('click',()=>{
    if(index>=10){
        index=1;
    }else{
    index+=1;
    }
    audioElement.src=`${index}.mp3.mp3`;
    mastersongname.innerText=songs[index-1].songname;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('pre').addEventListener('click',()=>{
    if(index<=1){
        index=1;
    }else{
    index-=1;
    }
    audioElement.src=`${index}.mp3.mp3`;
    mastersongname.innerText=songs[index-1].songname;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})


let d1=document.getElementById('1');
let d2=document.getElementById('2');
let d3=document.getElementById('3');
let d4=document.getElementById('4');
let d5=document.getElementById('5');
let d6=document.getElementById('6');
let d7=document.getElementById('7');
let d8=document.getElementById('8');
let d9=document.getElementById('9');
let d10=document.getElementById('10');
let dd1=document.querySelector('.d1');
let dd2=document.querySelector('.d2');

let dd3=document.querySelector('.d3');
let dd4=document.querySelector('.d4');
let dd5=document.querySelector('.d5');
let dd6=document.querySelector('.d6');
let dd7=document.querySelector('.d7');
let dd8=document.querySelector('.d8');
let dd9=document.querySelector('.d9');
let dd10=document.querySelector('.d10');


d1.addEventListener('click',function(){
dd1.style.display="block";
dd2.style.display="none";
dd3.style.display="none";
dd4.style.display="none";
dd5.style.display="none";
dd6.style.display="none";
dd7.style.display="none";
dd8.style.display="none";
dd9.style.display="none";
dd10.style.display="none";
})

d2.addEventListener('click',function(){
    dd1.style.display="none";
    dd2.style.display="block";
    dd3.style.display="none";
    dd4.style.display="none";
    dd5.style.display="none";
    dd6.style.display="none";
    dd7.style.display="none";
    dd8.style.display="none";
    dd9.style.display="none";
    dd10.style.display="none";
    })
    d3.addEventListener('click',function(){
        dd1.style.display="none";
        dd2.style.display="none";
        dd3.style.display="block";
        dd4.style.display="none";
        dd5.style.display="none";
        dd6.style.display="none";
        dd7.style.display="none";
        dd8.style.display="none";
        dd9.style.display="none";
        dd10.style.display="none";
        })
        d4.addEventListener('click',function(){
            dd1.style.display="none";
            dd2.style.display="none";
            dd3.style.display="none";
            dd4.style.display="block";
            dd5.style.display="none";
            dd6.style.display="none";
            dd7.style.display="none";
            dd8.style.display="none";
            dd9.style.display="none";
            dd10.style.display="none";
            })
            d5.addEventListener('click',function(){
                dd1.style.display="none";
                dd2.style.display="none";
                dd3.style.display="none";
                dd4.style.display="none";
                dd5.style.display="block";
                dd6.style.display="none";
                dd7.style.display="none";
                dd8.style.display="none";
                dd9.style.display="none";
                dd10.style.display="none";
                })
                d6.addEventListener('click',function(){
                    dd1.style.display="none";
                    dd2.style.display="none";
                    dd3.style.display="none";
                    dd4.style.display="none";
                    dd5.style.display="none";
                    dd6.style.display="block";
                    dd7.style.display="none";
                    dd8.style.display="none";
                    dd9.style.display="none";
                    dd10.style.display="none";
                    })
                    d7.addEventListener('click',function(){
                        dd1.style.display="none";
                        dd2.style.display="none";
                        dd3.style.display="none";
                        dd4.style.display="none";
                        dd5.style.display="none";
                        dd6.style.display="none";
                        dd7.style.display="block";
                        dd8.style.display="none";
                        dd9.style.display="none";
                        dd10.style.display="none";
                        })
                        d8.addEventListener('click',function(){
                            dd1.style.display="none";
                            dd2.style.display="none";
                            dd3.style.display="none";
                            dd4.style.display="none";
                            dd5.style.display="none";
                            dd6.style.display="none";
                            dd7.style.display="none";
                            dd8.style.display="block";
                            dd9.style.display="none";
                            dd10.style.display="none";
                            })
                            d9.addEventListener('click',function(){
                                dd1.style.display="none";
                                dd2.style.display="none";
                                dd3.style.display="none";
                                dd4.style.display="none";
                                dd5.style.display="none";
                                dd6.style.display="none";
                                dd7.style.display="none";
                                dd8.style.display="none";
                                dd9.style.display="block";
                                dd10.style.display="none";
                                })
                                d10.addEventListener('click',function(){
                                    dd1.style.display="none";
                                    dd2.style.display="none";
                                    dd3.style.display="none";
                                    dd4.style.display="none";
                                    dd5.style.display="none";
                                    dd6.style.display="none";
                                    dd7.style.display="none";
                                    dd8.style.display="none";
                                    dd9.style.display="none";
                                    dd10.style.display="block";
                                    })


  masterPlay.addEventListener('click',function(){

    dd1.style.display="none";
    dd2.style.display="none";
    dd3.style.display="none";
    dd4.style.display="none";
    dd5.style.display="none";
    dd6.style.display="none";
    dd7.style.display="none";
    dd8.style.display="none";
    dd9.style.display="none";
    dd10.style.display="none";
  });

   


  
  let download1=document.getElementById('download1');
  let download2=document.getElementById('download2');
  let download3=document.getElementById('download3');
  let download4=document.getElementById('download4');
  let download5=document.getElementById('download5');
  let download6=document.getElementById('download6');
  let download7=document.getElementById('download7');
  let download8=document.getElementById('download8');
  let download9=document.getElementById('download9');
  let download10=document.getElementById('download10');
  
  
 

  
    
 