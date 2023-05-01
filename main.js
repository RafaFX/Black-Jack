const cards = [
    {
        id: 1,
        value: 2,
        src: '2-C.png'
    },
    {
        id: 2,
        value: 2,
        src: '2-D.png'
    },
    {
        id: 3,
        value: 2,
        src: '2-H.png'
    },
    {
        id: 4,
        value: 2,
        src: '2-S.png'
    },
    {
        id: 5,
        value: 3,
        src: '3-C.png'
    },
    {
        id: 6,
        value: 3,
        src: '3-D.png'
    },
    {
        id: 7,
        value: 3,
        src: '3-H.png'
    },
    {
        id: 8,
        value: 3,
        src: '3-S.png'
    },
    {
        id: 9,
        value: 4,
        src: '4-C.png'
    },
    {
        id: 10,
        value: 4,
        src: '4-D.png'
    },
    {
        id: 11,
        value: 4,
        src: '4-H.png'
    },
    {
        id: 12,
        value: 4,
        src: '4-S.png'
    },
    {
        id: 13,
        value: 5,
        src: '5-C.png'
    },
    {
        id: 14,
        value: 5,
        src: '5-D.png'
    },
    {
        id: 15,
        value: 5,
        src: '5-H.png'
    },
    {
        id: 16,
        value: 5,
        src: '5-S.png'
    },
    {
        id: 17,
        value: 6,
        src: '6-C.png'
    },
    {
        id: 18,
        value: 6,
        src: '6-D.png'
    },
    {
        id: 19,
        value: 6,
        src: '6-H.png'
    },
    {
        id: 20,
        value: 6,
        src: '6-S.png'
    },
    {
        id: 21,
        value: 7,
        src: '7-C.png'
    },
    {
        id: 22,
        value: 7,
        src: '7-D.png'
    },
    {
        id: 23,
        value: 7,
        src: '7-H.png'
    },
    {
        id: 24,
        value: 7,
        src: '7-S.png'
    },
    {
        id: 25,
        value: 8,
        src: '8-C.png'
    },
    {
        id: 26,
        value: 8,
        src: '8-D.png'
    },
    {
        id: 27,
        value: 8,
        src: '8-H.png'
    },
    {
        id: 28,
        value: 8,
        src: '8-S.png'
    },
    {
        id: 29,
        value: 9,
        src: '9-C.png'
    },
    {
        id: 30,
        value: 9,
        src: '9-D.png'
    },
    {
        id: 31,
        value: 9,
        src: '9-H.png'
    },
    {
        id: 32,
        value: 9,
        src: '9-S.png'
    },
    {
        id: 33,
        value: 10,
        src: '10-C.png'
    },
    {
        id: 34,
        value: 10,
        src: '10-D.png'
    },
    {
        id: 35,
        value: 10,
        src: '10-H.png'
    },
    {
        id: 36,
        value: 10,
        src: '10-S.png'
    },
    {
        id: 37,
        value: 11,
        src: 'A-C.png'
    },
    {
        id: 38,
        value: 11,
        src: 'A-D.png'
    },
    {
        id: 39,
        value: 11,
        src: 'A-H.png'
    },
    {
        id: 40,
        value: 11,
        src: 'A-S.png'
    },
    {
        id: 41,
        value: 10,
        src: 'J-C.png'
    },
    {
        id: 42,
        value: 10,
        src: 'J-D.png'
    },
    {
        id: 43,
        value: 10,
        src: 'J-H.png'
    },
    {
        id: 44,
        value: 10,
        src: 'J-S.png'
    },
    {
        id: 45,
        value: 10,
        src: 'Q-C.png'
    },
    {
        id: 46,
        value: 10,
        src: 'Q-D.png'
    },
    {
        id: 47,
        value: 10,
        src: 'Q-H.png'
    },
    {
        id: 48,
        value: 10,
        src: 'Q-S.png'
    },
    {
        id: 49,
        value: 10,
        src: 'K-C.png'
    },
    {
        id: 50,
        value: 10,
        src: 'K-D.png'
    },
    {
        id: 51,
        value: 10,
        src: 'K-H.png'
    },
    {
        id: 52,
        value: 10,
        src: 'K-S.png'
    }
]

let faceCard = 0

const dealerDiv = document.getElementById('dealer-cards');
const dealerCardsValue = document.getElementById('dealerCardsValue');

const playerDiv = document.getElementById('player-cards');
const playerCardsValue = document.getElementById('playerCardsValue');

const winner = document.getElementById('winner');
const playerMessage = document.getElementById('player-message');

const buttonRestart = document.getElementById('button-restart');

buttonRestart.onclick = reloadPage;

const dealerCards = []
const playerCards = []


function getRandomInt() {
    return Math.floor(Math.random() * 52);
}

function dealCard(div, cardsArray) {

    return new Promise((resolve) => {
        setTimeout(() => {
            const cardimg = document.createElement('img')

            const card = cards[getRandomInt()]

            if (faceCard === 0) {
                cardimg.src = `/cards/BACK.png`
                cardimg.id = 'back-card'
                faceCard = 1
            } else {
                cardimg.src = `/cards/${card.src}`
            }
            div.appendChild(cardimg);
            cardsArray.push(card)
            resolve()
        }, 2000)
    })

}

async function dealCardsInicialCards(div, cardsArray) {
    await dealCard(div, cardsArray)
    await dealCard(div, cardsArray)
}

function countCardsValues(cardsArray, valueDiv) {
    let result = 0;
    cardsArray.forEach(card => {
        result += card.value
    });
    valueDiv.textContent = `O valor das cartas é: ${result}`;
    console.log(result)
    return result
}


async function startGame() {
    await dealCardsInicialCards(dealerDiv, dealerCards);
    await dealCardsInicialCards(playerDiv, playerCards);

    checkMove(countCardsValues(playerCards, playerCardsValue));

}



async function checkMove(playerCardsScore) {
    console.log(playerCardsScore)
    if (playerCardsScore > 20) {
        console.log('entrei no start');
        return winner.textContent = 'A mesa ganhou';
    }
    else if (playerCardsScore === 21) {
        console.log('entrei no start');
        playerMessage.textContent = 'Parar'
        return checkMoveDealer()
    }
    else if ((dealerCards[1].value === 2 || dealerCards[1].value === 3 || dealerCards[1].value === 4 || dealerCards[1].value === 4 || dealerCards[1].value === 5 || dealerCards[1].value === 6 || dealerCards[1].value === 7 || dealerCards[1].value === 8 || dealerCards[1].value === 9 || dealerCards[1].value === 10 || dealerCards[1].value === 11) && playerCardsScore > 17) {
        console.log('entrei no start');
        playerMessage.textContent = 'Parar'
        return checkMoveDealer()
    }
    else if ((dealerCards[1].value === 2 || dealerCards[1].value === 3 || dealerCards[1].value === 4 || dealerCards[1].value === 4 || dealerCards[1].value === 5 || dealerCards[1].value === 6) && playerCardsScore === 16) {
        console.log('entrei no start');
        playerMessage.textContent = 'Parar'
        return checkMoveDealer()
    }
    else if ((dealerCards[1].value === 7 || dealerCards[1].value === 8 || dealerCards[1].value === 9 || dealerCards[1].value === 10 || dealerCards[1].value === 11) && playerCardsScore === 16) {
        console.log('entrei no start');
        playerMessage.textContent = 'Comprar carta'
        await dealCard(playerDiv, playerCards)
        checkMove(countCardsValues(playerCards, playerCardsValue), countCardsValues(dealerCards, dealerCardsValue))
    }
    else if ((dealerCards[1].value === 2 || dealerCards[1].value === 3 || dealerCards[1].value === 4 || dealerCards[1].value === 4 || dealerCards[1].value === 5 || dealerCards[1].value === 6) && playerCardsScore === 15) {
        console.log('entrei no start');
        playerMessage.textContent = 'Parar'
        return checkMoveDealer()
    }
    else if ((dealerCards[1].value === 7 || dealerCards[1].value === 8 || dealerCards[1].value === 9 || dealerCards[1].value === 10 || dealerCards[1].value === 11) && playerCardsScore === 15) {
        console.log('entrei no start');
        playerMessage.textContent = 'Comprar carta'
        await dealCard(playerDiv, playerCards)
        checkMove(countCardsValues(playerCards, playerCardsValue), countCardsValues(dealerCards, dealerCardsValue))
    }
    else if ((dealerCards[1].value === 2 || dealerCards[1].value === 3 || dealerCards[1].value === 4 || dealerCards[1].value === 4 || dealerCards[1].value === 5 || dealerCards[1].value === 6) && playerCardsScore === 14) {
        console.log('entrei no start');
        playerMessage.textContent = 'Parar'
        return checkMoveDealer()
    }
    else if ((dealerCards[1].value === 7 || dealerCards[1].value === 8 || dealerCards[1].value === 9 || dealerCards[1].value === 10 || dealerCards[1].value === 11) && playerCardsScore === 14) {
        console.log('entrei no start');
        playerMessage.textContent = 'Comprar carta'
        await dealCard(playerDiv, playerCards)
        checkMove(countCardsValues(playerCards, playerCardsValue), countCardsValues(dealerCards, dealerCardsValue))
    }
    else if ((dealerCards[1].value === 2 || dealerCards[1].value === 3 || dealerCards[1].value === 4 || dealerCards[1].value === 4 || dealerCards[1].value === 5 || dealerCards[1].value === 6) && playerCardsScore === 13) {
        console.log('entrei no start');
        playerMessage.textContent = 'Parar'
        return checkMoveDealer()
    }
    else if ((dealerCards[1].value === 7 || dealerCards[1].value === 8 || dealerCards[1].value === 9 || dealerCards[1].value === 10 || dealerCards[1].value === 11) && playerCardsScore === 13) {
        console.log('entrei no start');
        playerMessage.textContent = 'Comprar carta'
        await dealCard(playerDiv, playerCards)
        checkMove(countCardsValues(playerCards, playerCardsValue), countCardsValues(dealerCards, dealerCardsValue))
    }
    else if ((dealerCards[1].value === 4 || dealerCards[1].value === 4 || dealerCards[1].value === 5 || dealerCards[1].value === 6) && playerCardsScore === 12) {
        playerMessage.textContent = 'Parar'
        console.log('entrei no start');
        return checkMoveDealer()
    }
    else if ((dealerCards[1].value === 2 || dealerCards[1].value === 3 || dealerCards[1].value === 7 || dealerCards[1].value === 8 || dealerCards[1].value === 9 || dealerCards[1].value === 10 || dealerCards[1].value === 11) && playerCardsScore === 12) {
        playerMessage.textContent = 'Comprar carta'
        await dealCard(playerDiv, playerCards)
        checkMove(countCardsValues(playerCards, playerCardsValue), countCardsValues(dealerCards, dealerCardsValue))
    }
    else if ((dealerCards[1].value === 2 || dealerCards[1].value === 3 || dealerCards[1].value === 4 || dealerCards[1].value === 4 || dealerCards[1].value === 5 || dealerCards[1].value === 6 || dealerCards[1].value === 7 || dealerCards[1].value === 8 || dealerCards[1].value === 9 || dealerCards[1].value === 10 || dealerCards[1].value === 11) && playerCardsScore === 10) {
        playerMessage.textContent = 'Comprar carta'
        await dealCard(playerDiv, playerCards)
        checkMove(countCardsValues(playerCards, playerCardsValue), countCardsValues(dealerCards, dealerCardsValue))
    }
    else if ((dealerCards[1].value === 2 || dealerCards[1].value === 3 || dealerCards[1].value === 4 || dealerCards[1].value === 4 || dealerCards[1].value === 5 || dealerCards[1].value === 6 || dealerCards[1].value === 7 || dealerCards[1].value === 8 || dealerCards[1].value === 9 || dealerCards[1].value === 10 || dealerCards[1].value === 11) && playerCardsScore === 9) {
        playerMessage.textContent = 'Comprar carta'
        await dealCard(playerDiv, playerCards)
        checkMove(countCardsValues(playerCards, playerCardsValue), countCardsValues(dealerCards, dealerCardsValue))
    }
    else if ((dealerCards[1].value === 2 || dealerCards[1].value === 3 || dealerCards[1].value === 4 || dealerCards[1].value === 4 || dealerCards[1].value === 5 || dealerCards[1].value === 6 || dealerCards[1].value === 7 || dealerCards[1].value === 8 || dealerCards[1].value === 9 || dealerCards[1].value === 10 || dealerCards[1].value === 11) && playerCardsScore === 8) {
        playerMessage.textContent = 'Comprar carta'
        await dealCard(playerDiv, playerCards)
        checkMove(countCardsValues(playerCards, playerCardsValue), countCardsValues(dealerCards, dealerCardsValue))
    }
    else if ((dealerCards[1].value === 2 || dealerCards[1].value === 3 || dealerCards[1].value === 4 || dealerCards[1].value === 4 || dealerCards[1].value === 5 || dealerCards[1].value === 6 || dealerCards[1].value === 7 || dealerCards[1].value === 8 || dealerCards[1].value === 9 || dealerCards[1].value === 10 || dealerCards[1].value === 11) && playerCardsScore === 7) {
        playerMessage.textContent = 'Comprar carta'
        await dealCard(playerDiv, playerCards)
        checkMove(countCardsValues(playerCards, playerCardsValue), countCardsValues(dealerCards, dealerCardsValue))
    }
    else if ((dealerCards[1].value === 2 || dealerCards[1].value === 3 || dealerCards[1].value === 4 || dealerCards[1].value === 4 || dealerCards[1].value === 5 || dealerCards[1].value === 6 || dealerCards[1].value === 7 || dealerCards[1].value === 8 || dealerCards[1].value === 9 || dealerCards[1].value === 10 || dealerCards[1].value === 11) && playerCardsScore === 6) {
        playerMessage.textContent = 'Comprar carta'
        await dealCard(playerDiv, playerCards)
        checkMove(countCardsValues(playerCards, playerCardsValue), countCardsValues(dealerCards, dealerCardsValue))
    }
    else if ((dealerCards[1].value === 2 || dealerCards[1].value === 3 || dealerCards[1].value === 4 || dealerCards[1].value === 4 || dealerCards[1].value === 5 || dealerCards[1].value === 6 || dealerCards[1].value === 7 || dealerCards[1].value === 8 || dealerCards[1].value === 9 || dealerCards[1].value === 10 || dealerCards[1].value === 11) && playerCardsScore === 5) {
        playerMessage.textContent = 'Comprar carta'
        await dealCard(playerDiv, playerCards)
        checkMove(countCardsValues(playerCards, playerCardsValue), countCardsValues(dealerCards, dealerCardsValue))
    }

}

async function checkMoveDealer() {
    const backimg = document.getElementById('back-card');
    return backimg.src = `/cards/${dealerCards[0].src}`
}


async function reloadPage() {
    document.location.reload(true);
}

startGame();



/* dealCard(playerDiv,playerCards) */

