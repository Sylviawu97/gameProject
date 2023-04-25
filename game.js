
let rules= document.getElementById("rule");
let rulesText=document.getElementById("rules-modal");
let closeIntro=document.getElementById("close");

rules.addEventListener("click",function(){

    rulesText.style.display="block";

})

closeIntro.addEventListener("click",function(){
    rulesText.style.display="none";
})

let startGame=document.getElementById("yes");
startGame.addEventListener("click",function(){
    window.location.href ='card-game.html';
})





