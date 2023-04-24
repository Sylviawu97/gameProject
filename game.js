

let rules= document.getElementById("rule");
let rulesText=document.getElementById("rules-modal");
let closeIntro=document.getElementById("close");

rules.addEventListener("click",function(){
    rulesText.style.display="block";
})

closeIntro.addEventListener("click",function(){
    rulesText.style.display="none";
})
 
let startGame=document.getElementsById("yes");
let gameContent=document.getElementsByClassName("game");

startGame.addEventListener("click",fuction(){
    gameContent.style.display="block";
})