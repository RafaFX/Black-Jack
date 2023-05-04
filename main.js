(function () {

    const dealerDiv = document.getElementById('dealer-cards');
    const dealerCardsValue = document.getElementById('dealerCardsValue');

    const playerDiv = document.getElementById('player-cards');
    const playerCardsValue = document.getElementById('playerCardsValue');

    const playerPersonDiv = document.getElementById('player-cards-person');
    const playerCardsPersonValue = document.getElementById('playerCardsPersonValue');

    const winner = document.getElementById('winner');
    const winnerPerson = document.getElementById('winner-person');

    const playerMessage = document.getElementById('player-message');

    const buttonRestart = document.getElementById('button-restart');
    const buttonStart = document.getElementById('button-start');


    const buttonDiv = document.getElementById('div-button');
    const buttonHit = document.getElementById('button-hit');
    const buttonStop = document.getElementById('button-stop');

    buttonRestart.onclick = reloadPage;

    buttonStart.onclick = startGame;

    const dealerCards = []
    const playerCards = []
    const playerPersonCards = []

    function getRandomInt() {
        return Math.floor(Math.random() * 52);
    }

    async function dealCard(div, cardsArray) {

        const cardimg = document.createElement('img')
        const card = cards[getRandomInt()]

        if (dealerCards.length === 0) {
            cardimg.src = `/cards/BACK.png`
            cardimg.id = 'back-card'
        } else {
            await delay();
            cardimg.src = `/cards/${card.src}`
        }
        div.appendChild(cardimg);
        cardsArray.push(card)
    }



    function dealCardPerson() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const cardimg = document.createElement('img')

                const card = cards[getRandomInt()]

                cardimg.src = `/cards/${card.src}`

                playerPersonDiv.appendChild(cardimg);
                playerPersonCards.push(card)
                resolve()
            }, 1500)
        })
    }

    async function dealInicialCards(div, cardsArray) {
        await dealCard(div, cardsArray)
    }

    function countCardsValues(cardsArray, valueDiv) {
        let result = 0;
        cardsArray.forEach(card => {
            result += card.value
        });
        valueDiv.textContent = `O valor das cartas é: ${result}`;
        return result
    }


    async function startGame() {

        buttonStart.disabled = true

        await dealInicialCards(dealerDiv, dealerCards);

        await dealInicialCards(playerDiv, playerCards);

        await dealInicialCards(playerPersonDiv, playerPersonCards);

        await dealInicialCards(dealerDiv, dealerCards);

        await dealInicialCards(playerDiv, playerCards);

        await dealInicialCards(playerPersonDiv, playerPersonCards);

        await checkMove(countCardsValues(playerCards, playerCardsValue));

    }



    async function checkMove(playerCardsScore) {
        const card = dealerCards[1].value

        if (playerCardsScore > 21) {
            playerCards.forEach(card => {
                if (card.id === 37 || card.id === 38 || card.id === 39 || card.id === 40) {
                    card.value = 1
                    checkMove(countCardsValues(playerCards, playerCardsValue))
                } else {
                    countCardsValues(playerCards, playerCardsValue)
                    playerMessage.textContent = 'Estorou'
                    buttonHit.onclick = dealCardPerson;
                    return buttonStop.onclick = checkMoveDealer;
                }
            })
        }
        else if (playerCardsScore === 21) {
            playerMessage.textContent = 'Jogada da IA: Não comprar'
            buttonStop.onclick = checkMoveDealer;
            return buttonHit.onclick = dealCardPerson;
        }
        else if (card >= 2 && card <= 11 && playerCardsScore >= 17) {
            playerMessage.textContent = 'Jogada da IA: Não comprar'
            buttonStop.onclick = checkMoveDealer;
            return buttonHit.onclick = dealCardPerson;
        }
        //ARRUMARRRRRRRRRRRRRRRRR
        else if ((card >= 2 && card <= 6) && playerCardsScore === 16) {
            playerMessage.textContent = 'Jogada da IA: Não comprar'
            buttonStop.onclick = checkMoveDealer;
            return buttonHit.onclick = dealCardPerson;
        }
        else if ((card >= 7 && card <= 11) && playerCardsScore === 16) {
            playerMessage.textContent = 'Jogada da IA: Comprar carta'
            await dealCard(playerDiv, playerCards)
            await checkMove(countCardsValues(playerCards, playerCardsValue))
        }
        else if ((card >= 2 && card <= 6) && playerCardsScore === 15) {
            playerMessage.textContent = 'Jogada da IA: Não comprar'
            buttonStop.onclick = checkMoveDealer;
            return buttonHit.onclick = dealCardPerson;
        }
        else if ((card >= 7 && card <= 11) && playerCardsScore === 15) {
            playerMessage.textContent = 'Jogada da IA: Comprar carta'
            await dealCard(playerDiv, playerCards)
            await checkMove(countCardsValues(playerCards, playerCardsValue))
        }
        else if ((card >= 2 && card <= 6) && playerCardsScore === 14) {
            playerMessage.textContent = 'Jogada da IA: Não comprar'
            buttonStop.onclick = checkMoveDealer;
            return buttonHit.onclick = dealCardPerson;
        }
        else if ((card >= 7 && card <= 11) && playerCardsScore === 14) {
            playerMessage.textContent = 'Jogada da IA: Comprar carta'
            await dealCard(playerDiv, playerCards)
            await checkMove(countCardsValues(playerCards, playerCardsValue))
        }
        else if ((card >= 2 && card <= 6) && playerCardsScore === 13) {
            playerMessage.textContent = 'Jogada da IA: Não comprar'
            buttonStop.onclick = checkMoveDealer;
            return buttonHit.onclick = dealCardPerson;
        }
        else if ((card >= 7 && card <= 11) && playerCardsScore === 13) {
            playerMessage.textContent = 'Jogada da IA: Comprar carta'
            await dealCard(playerDiv, playerCards)
            await checkMove(countCardsValues(playerCards, playerCardsValue))
        }
        else if ((card >= 4 && card <= 6) && playerCardsScore === 12) {
            playerMessage.textContent = 'Jogada da IA: Não comprar'
            buttonStop.onclick = checkMoveDealer;
            return buttonHit.onclick = dealCardPerson;
        }
        else if ((card === 2 || card === 3 || card === 7 || card === 8 || card === 9 || card === 10 || card === 11) && playerCardsScore === 12) {
            playerMessage.textContent = 'Jogada da IA: Comprar carta'
            await dealCard(playerDiv, playerCards)
            await checkMove(countCardsValues(playerCards, playerCardsValue))
        }
        else if ((card >= 2 && card <= 11) && playerCardsScore === 11) {
            playerMessage.textContent = 'Jogada da IA: Comprar carta'
            await dealCard(playerDiv, playerCards)
            await checkMove(countCardsValues(playerCards, playerCardsValue))
        }
        else if ((card >= 2 && card <= 11) && playerCardsScore === 10) {
            playerMessage.textContent = 'Jogada da IA: Comprar carta'
            await dealCard(playerDiv, playerCards)
            await checkMove(countCardsValues(playerCards, playerCardsValue))
        }
        else if ((card >= 2 && card <= 11) && playerCardsScore === 9) {
            playerMessage.textContent = 'Jogada da IA: Comprar carta'
            await dealCard(playerDiv, playerCards)
            await checkMove(countCardsValues(playerCards, playerCardsValue))
        }
        else if ((card >= 2 && card <= 11) && playerCardsScore === 8) {
            playerMessage.textContent = 'Jogada da IA: Comprar carta'
            await dealCard(playerDiv, playerCards)
            await checkMove(countCardsValues(playerCards, playerCardsValue))
        }
        else if ((card >= 2 && card <= 11) && playerCardsScore === 7) {
            playerMessage.textContent = 'Jogada da IA: Comprar carta'
            await dealCard(playerDiv, playerCards)
            await checkMove(countCardsValues(playerCards, playerCardsValue))
        }
        else if ((card >= 2 && card <= 11) && playerCardsScore === 6) {
            playerMessage.textContent = 'Jogada da IA: Comprar carta'
            await dealCard(playerDiv, playerCards)
            await checkMove(countCardsValues(playerCards, playerCardsValue))
        }
        else if ((card >= 2 && card <= 11) && playerCardsScore === 5) {
            playerMessage.textContent = 'Jogada da IA: Comprar carta'
            await dealCard(playerDiv, playerCards)
            await checkMove(countCardsValues(playerCards, playerCardsValue))
        }
    }

    async function checkMoveDealer() {
        await delay();
        let dealer = countCardsValues(dealerCards, dealerCardsValue)
        let player = countCardsValues(playerCards, playerCardsValue)
        let playerPerson = countCardsValues(playerPersonCards, playerCardsPersonValue)
        if (dealer > 21) {
            dealerCards.forEach(card => {
                if (card.id === 37 || card.id === 38 || card.id === 39 || card.id === 40) {
                    card.value = 1
                    return checkMoveDealer();
                }
            })
        }
        const backimg = document.getElementById('back-card');
        if (backimg) {
            backimg.src = `/cards/${dealerCards[0].src}`
            backimg.id = 'reveal-card';
        }

        if (dealer < 16) {
            await dealCard(dealerDiv, dealerCards)
            return checkMoveDealer();
        }

        checkWinner(dealer, player, winner);
        checkWinner(dealer, playerPerson, winnerPerson);
    }

    async function checkWinner(dealer, player, text) {
        if (dealer > 21 && player <= 21) {
            await delay();
            text.textContent = 'O PLAYER GANHOU DA MESA'
        }
        else if (dealer < 21 && player > 21) {
            await delay();
            text.textContent = 'A MESA GANHOU'
        }
        else if (dealer > 21 && player > 21) {
            await delay();
            text.textContent = 'EMPATE'
        }
        else if (dealer === player) {
            await delay();
            text.textContent = 'EMPATE'
        }
        else if (dealer > player) {
            await delay();
            text.textContent = 'A MESA GANHOU'
        }
        else if (dealer < player) {
            await delay();
            text.textContent = 'O PLAYER GANHOU'
        }
        else {
            console.log('error')
        }
    }

    function delay() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1500)
        })
    }

    async function reloadPage() {
        document.location.reload(true);
    }
})()
