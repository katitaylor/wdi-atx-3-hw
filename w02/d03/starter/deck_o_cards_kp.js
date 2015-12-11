function deck_o_cards() {
 var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
 var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
 var cardDeck = []

var card = {
  suits: suits[s]
  values: values[v]
}
};


for (v = 0, s = 0; s < 4; v++) {

    for (var s=0; s<values.length; s++)
    for (var v=0; v<suits.length; v++)

  }

if (v > 12) {
	s++;
	v = -1
}
else {

card.suits = suits[s];
card.values = values[v];
cardDeck.push(card);


++++

function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
