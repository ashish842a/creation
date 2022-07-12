document.querySelector(".main").addEventListener("mousemove",function(dets){
    document.querySelector(".dot").style.top=`${dets.y}px`;
  document.querySelector(".dot").style.left=`${dets.x}px`;
  console.log(dets.x,dets.y);
})
// gsap.to(".area",{
//     y:-70,
//     backgroundColor:"pink",
//     duration:1,
//     // stagger:0.3,
//     // opacity:0,
//     // repeat:-1
// })
// var tl=gsap.timeline()
// tl

// .to("#a",{
//     y:60,
//     duration:1.5,
//     repeat:-1
// })
// .to("#b",{
//     y:0,
//     duration:0.5,
//     // repeat:-1
// })
// .to("#c",{
//     y:50,
//     duration:0.5,
//     // repeat:-1
// })
// .to("#d",{
//     y:50,
//     duration:0.5,
//     // repeat:-1
// })
// .to("#e",{
//     y:50,
//     duration:0.5,
//     // repeat:-1
// })
document.querySelector("#one").addEventListener("mousemove",function(){
    // console.log("one");
    document.querySelector(".main").style.backgroundColor="#fd9879";
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/03.jpg");
   
    document.querySelector(".main").style.color="#f9e8e3"
})

document.querySelector("#two").addEventListener("mousemove",function(){
    document.querySelector(".main").style.backgroundColor="#78a19c";
    // console.log("two");
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/04.jpg");
    document.querySelector(".main").style.color="#f0ecde";
   
})
document.querySelector("#three").addEventListener("mousemove",function(){
    // console.log("three");
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/05.png");
    document.querySelector(".main").style.backgroundColor="#76bacb";
    // console.log("two");
    document.querySelector(".main").style.color="#395474";
  
})
document.querySelector("#four").addEventListener("mousemove",function(){
    // console.log("hey");
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/01.jpg");
    document.querySelector(".main").style.backgroundColor="#22222a";
    console.log("two");
   
    document.querySelector(".main").style.color="#aa965a";
})
document.querySelector("#five").addEventListener("mousemove",function(){

    console.log("hey");
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/08.jpg");
    document.querySelector(".main").style.backgroundColor="#f4de35";
    
    
    document.querySelector(".main").style.color="#0c0f15";
})
document.querySelector("#six").addEventListener("mousemove",function(){
    console.log("hey");
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/07.jpg");
    document.querySelector(".main").style.backgroundColor="#2bc3c9";
    
    document.querySelector(".main").style.color="#f8eb41";
})
document.querySelector("#seven").addEventListener("mousemove",function(){
    console.log("hey");
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/06.png");
    document.querySelector(".main").style.backgroundColor="#191f5d";
   
    document.querySelector(".main").style.color="#fd1f61";
})
document.querySelector("#eight").addEventListener("mousemove",function(){
    console.log("eight");
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/03.jpg");
    document.querySelector(".main").style.backgroundColor="#6a38f8";
    
    document.querySelector(".main").style.color="#f188fa";
})
document.querySelector("#nine").addEventListener("mousemove",function(){
    console.log("hey");
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/visuals/pieces/02.png");
    document.querySelector(".main").style.backgroundColor="#793d2b";
   
    
    document.querySelector(".main").style.color="#fabad9";
})
document.querySelector("#ten").addEventListener("mousemove",function(){
    
    document.querySelector(".main").style.backgroundColor="#fd9879";
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/03.jpg");
   
    document.querySelector(".main").style.color="#f9e8e3"
})
document.querySelector("#eleven").addEventListener("mousemove",function(){
    document.querySelector(".main").style.backgroundColor="#78a19c";
    // console.log("two");
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/04.jpg");
    document.querySelector(".main").style.color="#f0ecde";
})
document.querySelector("#twelve").addEventListener("mousemove",function(){
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/05.png");
    document.querySelector(".main").style.backgroundColor="#76bacb";
    // console.log("two");
    document.querySelector(".main").style.color="#395474";
})
document.querySelector("#thirteen").addEventListener("mousemove",function(){
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/01.jpg");
    document.querySelector(".main").style.backgroundColor="#22222a";
    console.log("two");
   
    document.querySelector(".main").style.color="#aa965a";
})
document.querySelector("#fourteen").addEventListener("mousemove",function(){
    console.log("hey");
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/08.jpg");
    document.querySelector(".main").style.backgroundColor="#f4de35";
    
    
    document.querySelector(".main").style.color="#0c0f15";
})

document.querySelector("#fifteen").addEventListener("mousemove",function(){
    console.log("hey");
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/07.jpg");
    document.querySelector(".main").style.backgroundColor="#2bc3c9";
    
    document.querySelector(".main").style.color="#f8eb41";
})
document.querySelector("#sixteen").addEventListener("mousemove",function(){
    console.log("hey");
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/06.png");
    document.querySelector(".main").style.backgroundColor="#191f5d";
   
    document.querySelector(".main").style.color="#fd1f61";
})
document.querySelector("#seventeen").addEventListener("mousemove",function(){
    console.log("eight");
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/vis-snaps/opt/03.jpg");
    document.querySelector(".main").style.backgroundColor="#6a38f8";
    
    document.querySelector(".main").style.color="#f188fa";
})
document.querySelector("#eighteen").addEventListener("mousemove",function(){
    document.querySelector(".box img").setAttribute("src","https://visuals.brybry.co/img/visuals/pieces/02.png");
    document.querySelector(".main").style.backgroundColor="#793d2b";
   
    
    document.querySelector(".main").style.color="#fabad9";
})