
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

startGame.addEventListener("click",function(){
    gameContent.style.display="block";
})

let startGame=document.getElementById("yes");
let gameContent=document.getElementsByClassName("game-container").item(0);
// console.log(gameContent);
startGame.addEventListener("click",function() {
    window.location.href ='card-game.html';
})







>>>>>>> e2ae35e (deal card)
