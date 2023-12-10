
/*

For the final project you will be creating an automated version of the classic card game WAR! 
There are many versions of the game WAR. In this version there are only 2 players.
You do not need to do anything special when there is a tie in a round.
Think about how you would build this project and write your plan down. Consider classes 
such as: Card, Deck, Player, as well as what properties and methods they may include.
You do not need to accept any user input, when you run your code, the entire game should 
play out instantly without any user input inside of your browser's console.


1. Deal 26 Cards to each Player from a Deck of 52 cards.
2. Iterate through the turns where each Player plays a Card.
3. The Player who played the higher card is awarded a point.
4. Ties result in zero points for both Players.
5. After all cards have been played, display the score and declare the winner.



The following is extra credit (10pts)
Write a Unit Test using Mocha and Chai for at least one of the functions you write.

*/






class Hand {                   // This is our first class I labeled Hand which holds our suit and rank in the constructor
    constructor(suit, rank) {  // to revist constructor,  The purpose of a constructor is to create a new object 
                                // and set values for any existing object properties.
this.suit = suit;
this.rank = rank;
    }
  }
  
   
  
  
class FullDeck {   // This is our second class, making the Deck for the game, and we see that this is where we are using our arrays//
    constructor() {
      this.hands = [];
      let cardTypes = ['Clubs', 'Spades', 'Hearts', 'Diamonds']; // array holding our card types
      let numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // array holding the total cards in the deck
  
      for (let suit of cardTypes) {
        for (let rank of numbers) {
          this.hands.push(new Hand(suit, rank)); // we see a .push see we know we are gonna be adding on
        }
      }
  
      this.newCards(); // this.newcards created using top down design as it has not been coded yet
    }
  
    newCards() {  // Shuffle feature for our game of WAR
      for (let i = this.hands.length - 1; i > 0; i--) {
        let m = Math.floor(Math.random() * (i + 1)); // we see math which will be providing basic mathemmatics followed by .floor which 
                                                    //  means we always return a whole intenger and .random so we can always return a new card 
                                                    //  so each game will be randomized
        [this.hands[i], this.hands[m]] = [this.hands[m], this.hands[i]];
      }
    }
  }
  
  class letsPlayWar { // This is our third class
    constructor() {
      this.cards = new FullDeck();
      this.contestants = {
        firstPlayer: [], // an array for the first player
        secondPlayer: [],  // an array for our second player
      };
      this.total = {
        firstPlayer: 0, // set them to 0
        secondPlayer: 0, // set to 0
      };
    }
  
    showCards() { // this is how we are going to deal the cards to each players for 26 hands
      for (let i = 0; i < 26; i++) {
        this.contestants.firstPlayer.push(this.cards.hands.pop()); // push so we will be adding on and pop so  we will be removing and returning a card 
        this.contestants.secondPlayer.push(this.cards.hands.pop()); // push so we will be adding on and pop so we will be a removing and returning a card
      }
    }
  
    beginHand() {  // this is how we can see how the round plays out and what cards our players have
      let firstCard = this.contestants.firstPlayer.pop();
      let secondCard = this.contestants.secondPlayer.pop();
  
      console.log(`Player 1 has: ${firstCard.rank} of ${firstCard.suit}`); // printing to the console what card player 1 has
      console.log(`Player 2 has: ${secondCard.rank} of ${secondCard.suit}`); // printing to the console what card player 2 has
  
      if (firstCard.rank > secondCard.rank) { // we see what happens if player 1 has the greater card
        this.total.firstPlayer++;
        console.log('Player 1:   Takes the Hand!'); // print to the console that player1 one won the hand
      } else if (firstCard.rank < secondCard.rank) { // else if statement if player 2 has the greater hand
        this.total.secondPlayer++;
        console.log('Player 2:   Takes the Hand!'); // print to the console that the player2 won the hand 
      } else {
        console.log(' *** Tie No Points Awarded! ***'); // in the event of a tie then no winner, so no points awarded
      }
    }
  
    runApp() {   // start of the game 
      this.showCards();
      console.log('------   LETS PLAY WAR!  ------ '); // right at the top  we see the game has started in the console
  
      for (let i = 0; i < 26; i++) {
        console.log(`<><><><> Hand ${i + 1} <><><><>`); // this will gives the number of hands we are on 
        this.beginHand();
      }
  
      console.log(' ------ End OF GAME! ------ '); // end of the game printed to the console, once 26 hands have been dealt
      console.log('Lets see the Big Winner!!'); // checking to see who won the game
      console.log(`Player 1: ${this.total.firstPlayer} points`); // displays player1 total points
      console.log(`Player 2: ${this.total.secondPlayer} points`); // displays player2 total points
  
      if (this.total.firstPlayer > this.total.secondPlayer) { // this will check the winner of the game
        console.log('Player 1 is the Winner Winner Chicken Dinner!!!'); // if player1 total is > then player2, then chicken dinner
      } else if (this.total.firstPlayer < this.total.secondPlayer) {
        console.log('Player 2 is the Winner Winner Chicken Dinner!!!'); // if player2 total is > then player1, then chicken dinner
      } else {
        console.log('Tie No Points Awarded!!!'); // if both players have the same amount of points then we have a tie
      }
    }
  }
  
  let cardGame = new letsPlayWar(); // running our game of war, Now lets open this up in a live server
  cardGame.runApp();
  