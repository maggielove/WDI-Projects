[Hosted Working Game](http://maggielove.github.io/WDI-Projects/)

# Introduction #
For my game, I made a version of Jeopardy. The game consists of a 6 x 6 board of 30 total questions across 6 categories. (I found all questions and answers on [J! Archive](http://j-archive.com/).) Players click cards to view questions, buzz in, and type their answers. 

#Approach#
Since the majority of the web page consists of these clickable cards, I spent most of my time programming the JavaScript. First I created the board itself by setting a gameBoard array and looping over this array to create a cards (button elements) that are grouped by rows. (Cards are grouped by rows because each row has the same number of points.) 

I wanted the cards to have their point values on them at the start of the game, and for this value to be replaced with a question at the end of the game, so next I added event listeners to each card. I eventually disabled each card-button after a click so that players would not be able to score twice on one question. 

Assigning the points to the correct players required creating separate div elements for the scores of each player, then adding or subtracting points to the right box by matching player input to the answer and the player to the current player. 

One of the trickiest parts of this project was the key press function I used to allow players to 'buzz in.' When I initially set it up, the way my program was written, it only registered the last player to buzz in--a problem when the chance to answer the question should go to the first to buzz in. I ended up creating a "players" array that clears each time a card-button is clicked. As soon as players hit keys, they are entered into the array, and the first player is given the chance to type in the answer. I also realized that if no one buzzed in when a card was clicked, an answer prompt would still pop up, so I created a variable called waitingForKeypress and used it inside my setListeners function to require a key press in order for an answer box to pop up. 

To determine the winner, I added the class of '1' to the class list of a card button each time it was clicked, and then set my checkForWin function to determine the winner when the number of cards with a class of 1 reached 30. 

My last steps were making the Start Game function, which allows players to refresh the board without refreshing the page, styling the page with CSS, and adding instructions. 

# Potential Next Steps #
* In order to fit the entire board within the window (so players don't have to scroll), I ended up making the text for the questions a little small. A potential improvement on this would be having the card 'magnify' when users click on it. 
* The way my setTimeout is currently set, there are 6 seconds between when a player buzzes and when the answer box pops up, whether s/he buzzes after 1 milliseconds or after 5 seconds. Presumably the player would need to read the question, but this is not the most responsive set-up. Having the answer box pop up as soon as the first player buzzes would be ideal. 
* I've written my checkForWin function so that Player Two wins by default, which means if neither player answered a question the entire game, Player Two would win. (Although it would defeat the purpose of 'playing' for neither player to click.) 
* I would like to make a modular version of this game.
