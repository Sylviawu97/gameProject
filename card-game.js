let round = 1;
let playerAScore = 0;
let playerBScore = 0;
   
   
   // Deny the cards
  const dealCards=()=> {

      let playerACards = []
      let playerBCards = []
      for (let i=0; i<3; i++) {
          playerACards.push(Math.floor(Math.random() * 10) + 1)
          playerBCards.push(Math.floor(Math.random() * 10) + 1)
      }
// Cards for player A
      const playerACardsContainer = document.querySelector('.player-a-cards');
      playerACardsContainer.innerHTML = '';
      playerACards.forEach(card => {
          console.log(`${card}.png`)
              const cardElement = document.createElement('img');
              cardElement.classList.add('card');
              cardElement.src = `${card}.png`;
              playerACardsContainer.appendChild(cardElement);
          }
      )

// Cards for player B
      const playerBCardsContainer = document.querySelector('.player-b-cards');
      playerBCardsContainer.innerHTML = '';
      playerBCards.forEach(card => {
          const cardElement = document.createElement('img');
          cardElement.classList.add('card');
          cardElement.src = `${card}.png`;
          playerBCardsContainer.appendChild(cardElement);
      })
       let resultContainer=document.getElementById("result");
      const winner = compareCards(playerACards, playerBCards);
      if (winner === 'A') {
        
        setTimeout(() => {

            resultContainer.textContent = 'Player A wins!';
        }, 3000)
          playerAScore++;
          document.getElementById('player-a-score').textContent = playerAScore;
      } else if (winner === 'B') {
         
       
          setTimeout(() => {

            resultContainer.textContent = 'Player B wins!';
        }, 3000)
          playerBScore++;
          document.getElementById('player-b-score').textContent = playerBScore;
      } else {
       
        setTimeout(() => {

            resultContainer.textContent = 'Play again!';
        },3000)
         
      }

      if (playerAScore === 5) {
          resultContainer.textContent = 'Player A wins the game!';
          endGame();
      } else if (playerBScore === 5) {
          resultContainer.textContent = 'Player B wins the game!';
          endGame();
      }
  }




// Compare cards
const compareCards=(cardsA, cardsB)=> {
    if (isBomb(cardsA) && isBomb(cardsB)) {
        return Math.max(...cardsA) > Math.max(...cardsB) ? 'A' : 'B';
    } else if (isBomb(cardsA)) {
        return 'A';
    } else if (isBomb(cardsB)) {
        return 'B';
    } else if (isConsecutive(cardsA) && !isConsecutive(cardsB)) {
        return 'A';
    } else if (!isConsecutive(cardsA) && isConsecutive(cardsB)) {
        return 'B';
    } else if (isConsecutive(cardsA) && isConsecutive(cardsB)) {
        return getSum(cardsA) > getSum(cardsB) ? 'A' : 'B';
    } else {
        return null;
    }
}


const isBomb=(cards)=>{
    return cards[0] === cards[1] && cards[1] === cards[2];
}

const isConsecutive=(cards)=> {
    const sorted = cards.sort();
    return sorted[0] + 1 === sorted[1] && sorted[1] + 1 === sorted[2];
}

const getSum=(cards)=> {
    return cards.reduce((sum, card) => sum + card, 0);
}
let startGame= document.getElementById("deal-btn");
startGame.addEventListener('click',dealCards)



const endGame=()=> {
    // disable "Deal" button
    document.getElementById('deal-btn').disabled = true;
    // display final message
    if (playerAScore > playerBScore) {
        resultContainer.textContent = 'Player A wins the game!';
    } else {
        resultContainer.textContent = 'Player B wins the game!';
    }
}