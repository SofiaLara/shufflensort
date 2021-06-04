var cards = [1,2,3,4,5,6,7,8,9];

function showCards(cards) {
    const myList = document.querySelector('.card-list');
    
    while (myList.hasChildNodes()) {
        myList.removeChild(myList.firstChild);
    }

    for (card in cards) {
        myCard = document.createElement('li');
        myCard.innerHTML = `<span class="card-title">${cards[card]}</span>`;
        myCard.classList.add('my-class');
        myList.appendChild(myCard);

        myColor = document.createElement('span');
        myColor.classList.add('card-color');
        myCard.appendChild(myColor);

        // if (cards[card] == 1) {
        //     myColor.style.backgroundColor = "red";
        // }
        switch (cards[card]) {
            case 3:
            case 5:
            case 9:
                myColor.style.backgroundColor = "#2F454E";
                break;
            case 1:
            case 8:
                myColor.style.backgroundColor = "#6F98A8";
                break;
            case 2:
            case 4:
                myColor.style.backgroundColor = "#2B8EAD";
                break;
            default:
                myColor.style.backgroundColor = "#BFBFBF";
        }
    }
}

function shuffleCards(cards) {
    //Using Fisher-Yates shuffle algorithm
    for (let i = cards.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return showCards(cards);
}

function sortCards(cards) {
    cards.sort();
    return showCards(cards);
}