function fun(){sam= new Date();
month=sam.getMonth();
year=sam.getFullYear();
sec=sam.getSeconds();
min=sam.getMinutes();
tem=sam.getHours()%12;

if(tem==0){hour=Number('12');}
else{
    hour=tem;
}
let pp;
if(sam.getHours()<12){
    pp="am";
}
else{
    pp="pm";

}
}
setInterval(fun,1000);


for(let i=0;i<12;i++){
    let node=document.createElement('DIV');
    node.classList.add("vl")
    
    rotationangle=30*(i+1);
    let distance=19.5;
    
    node.style.transform=`rotate(${rotationangle}deg) translateY(${distance}vw)`;
    
    document.getElementById('stage').appendChild(node);
}


 
let music= new Audio("files/clock-ticking-onesecond.mp3");

let aud=()=>{
    music.play();
}
function ani(){
    let abc=new Date();
    list=document.getElementsByClassName("vl");
    rAngle =(abc.getSeconds()*6)%360; 
    mAngle=(abc.getMinutes()*6)%360;
    hAngle=(abc.getHours()*30)%360;
    shand.style.transform = `rotate(${rAngle}deg)`;
    mhand.style.transform= `rotate(${mAngle+(abc.getSeconds()*(0.1))}deg)`;
    hhand.style.transform= `rotate(${hAngle+(abc.getMinutes()*(0.5))}deg)`;
    
}

setInterval(ani,1000);
setInterval(aud,0.1);




let darkmode=localStorage.getItem("darkmode");
const darkmodetoggle=document.getElementById("dark-mode-toggle");
// document.getElementById("dark-mode-toggle");

const enabledarkmode = ()=>{
     var imgElement=document.getElementById("toggle");
     imgElement.setAttribute("src", "files/toggle-on-solid.svg");
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkmode","enabled");

};
const disabledarkmode =()=>{
     var imgElement=document.getElementById("toggle");
    imgElement.setAttribute("src", "files/toggle-off-solid.svg");
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkmode",null);

};

if(darkmode==="enabled"){
    enabledarkmode();
}
darkmodetoggle.addEventListener("click", ()=>{
    darkmode=localStorage.getItem("darkmode");
     
    if(darkmode!=="enabled"){
        enabledarkmode();
    }
    else{
        disabledarkmode();
    }
    console.log("fineshed");
});




      
      
    
