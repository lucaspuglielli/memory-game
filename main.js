let cards
let card1
let card2

const shuffle = () => {
    let cards = [
        {
            name: "aaa",
        },{
            name: "aaa",
        },{
            name: "bbb",
        },{
            name: "bbb",
        },{
            name: "ccc",
        },{
            name: "ccc",
        },{
            name: "ddd",
        },{
            name: "ddd",
        },{
            name: "eee",
        },{
            name: "eee",
        }
    ]
    let shuffledCards = []

    while (cards.length >= 1) {
        shuffledCards.push((cards.splice(Math.floor(Math.random() * (cards.length)), 1))[0])
    }
    return shuffledCards
}

const showCards = () => {
    cards = shuffle()
    document.getElementById("cardsContainer").innerHTML = ""
    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i].name)
        document.getElementById("cardsContainer").innerHTML += "<button id='card"+i+"' class='card' onclick='turnCard("+i+")'>0</buttom>"
    }
}

const turnCard = (i) => {
    if (document.getElementById("card"+i).innerHTML == 0) {
        document.getElementById("card"+i).innerHTML = cards[i].name
        if (card1 == undefined) {
            card1 = "card"+i
        } else {
            card2 = "card"+i
            if (document.getElementById(card1).innerHTML == document.getElementById(card2).innerHTML) {
                let remove = [card1, card2]
                card1 = undefined
                card2 = undefined
                document.getElementById(remove[0]).disabled = true
                document.getElementById(remove[1]).disabled = true
                document.getElementById(remove[0]).style.backgroundColor = "green"
                document.getElementById(remove[1]).style.backgroundColor = "green"
                document.getElementById(remove[0]).style.color = "black"
                document.getElementById(remove[1]).style.color = "black"
                let removeCards = (remove) => {
                    document.getElementById(remove[0]).innerHTML = 0
                    document.getElementById(remove[1]).innerHTML = 0
                    document.getElementById(remove[0]).style.backgroundColor = "lightgrey"
                    document.getElementById(remove[1]).style.backgroundColor = "lightgrey"
                    document.getElementById(remove[0]).disabled = false
                    document.getElementById(remove[1]).disabled = false
                    document.getElementById(remove[0]).style.display = "none"
                    document.getElementById(remove[1]).style.display = "none"
                }
                setTimeout(removeCards, 2000, remove)
            } else {
                let turnBack = [card1, card2]
                card1 = undefined
                card2 = undefined
                document.getElementById(turnBack[0]).disabled = true
                document.getElementById(turnBack[1]).disabled = true
                document.getElementById(turnBack[0]).style.backgroundColor = "red"
                document.getElementById(turnBack[1]).style.backgroundColor = "red"
                document.getElementById(turnBack[0]).style.color = "black"
                document.getElementById(turnBack[1]).style.color = "black"
                let turnCardsBack = (turnBack) => {
                    document.getElementById(turnBack[0]).innerHTML = 0
                    document.getElementById(turnBack[1]).innerHTML = 0
                    document.getElementById(turnBack[0]).style.backgroundColor = "lightgrey"
                    document.getElementById(turnBack[1]).style.backgroundColor = "lightgrey"
                    document.getElementById(turnBack[0]).disabled = false
                    document.getElementById(turnBack[1]).disabled = false
                }
                setTimeout(turnCardsBack, 2000, turnBack)
            }
        }
    }
}