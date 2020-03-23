

function determineHand(cards){

}

function getHandRankingValue(hand){
    switch(hand) {
        case "HC":      // High Card
            return 0
        case "1P":      // 1 Pair
            return 1
        case "2P":      // 2 Pair
            return 2
        case "3K":      // 3 of a Kind
            return 3
        case "S":       // Straight
            return 4
        case "F":       // Flush
            return 5
        case "FH":      // Full House
            return 6
        case "4K":      // 4 of a Kind
            return 7
        case "SF":      // Straight Flush
            return 8
    }
}

function handIs1Pair(cards){
    
}

function handIsFourOfAKind(cards){
    for(let i = 0; i < cards.length; i++){
        if( cards[(0+i)%5].val == cards[(1+i)%5].val &&
            cards[(1+i)%5].val == cards[(2+i)%5].val &&
            cards[(2+i)%5].val == cards[(3+i)%5].val)
            return true;
    }
    return false
}

function handIsStraight(cards){
    
}

function handIsStraightFlush(cards){
    for(let i = 1; i < cards.length; i++){
        if(cards[i].suit != cards[i-1].suit)
            return false;
        if(getCardOrder(cards[i]) != getCardOrder(cards[i-1]) + 1)
            return false;
    }
    return true;
}

function getCardOrder(card){
    switch(card.val){
        case "2":
            return 0
        case "3":
            return 1
        case "4":
            return 2
        case "5":
            return 3
        case "6":
            return 4
        case "7":
            return 5
        case "8":
            return 6
        case "9":
            return 7
        case "10":
            return 8
        case "J":
            return 9
        case "Q":
            return 10
        case "K":
            return 11
        case "A":
            return 12
    }
}