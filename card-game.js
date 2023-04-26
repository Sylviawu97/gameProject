let round = 1;
let playerAScore = 0;
let playerBScore = 0;


// 卡牌游戏对象
const game = {
    // 玩家A和B
    playerA: {
        cards: [], // 玩家的牌组
        score: 0, // 玩家的分数
        name: 'Player A', // 玩家的名字
    },
    playerB: {
        cards: [],
        score: 0,
        name: 'Player B',
    }}
    // 可以选择的牌
  const dealCards=()=> {

      let playerACards = []
      let playerBCards = []
      for (let i=0; i<3; i++) {
          playerACards.push(Math.floor(Math.random() * 10) + 1)
          playerBCards.push(Math.floor(Math.random() * 10) + 1)
      }
// 为玩家 A 创建卡牌元素并添加到容器中
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

// 为玩家 B 创建卡牌元素并添加到容器中
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





// 比较两个牌组的大小
function compareCards(cardsA, cardsB) {
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


function isBomb(cards) {
    return cards[0] === cards[1] && cards[1] === cards[2];
}

function isConsecutive(cards) {
    const sorted = cards.sort();
    return sorted[0] + 1 === sorted[1] && sorted[1] + 1 === sorted[2];
}

function getSum(cards) {
    return cards.reduce((sum, card) => sum + card, 0);
}
let startGame= document.getElementById("deal-btn");
startGame.addEventListener('click',dealCards)



function endGame() {
    // disable "Deal" button
    document.getElementById('deal-btn').disabled = true;
    // display final message
    if (playerAScore > playerBScore) {
        resultContainer.textContent = 'Player A wins the game!';
    } else {
        resultContainer.textContent = 'Player B wins the game!';
    }
}