


let rules= document.getElementById("rule");
let rulesText=document.getElementById("rules-modal");
let closeIntro=document.getElementById("close");
let no=document.getElementById("no");
let noImage = document.getElementById("noImage");
rules.addEventListener("click",function(){

    rulesText.style.display="block";

})

closeIntro.addEventListener("click",function(){
    rulesText.style.display="none";
})

no.addEventListener("click",function(){
    noImage.style.display = "block";
    setTimeout(function() {
      noImage.style.display = "none";
    }, 5000);
})

let startGame=document.getElementById("yes");
startGame.addEventListener("click",function(){
    window.location.href ='card-game.html';
})





