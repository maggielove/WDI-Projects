*Item 
*Item 


Project 1: Jeopardy

**Game Rules:**

*Round 1 - Jeopardy*
User stories: 

-If I am the randomly selected first user, I want to pick a category.

-As the randomly selected first user, I want to select a question. 

-As a user (randomly selected or not), if I’m the first one to buzz in, I want to be able to answer the question. 

   **Buzz in by assigning each player a key—use javascript to register who hit the key first—assign the player to the key that was hit. 
   
-As a user, I want to input the answer (“What is” beside input field) within the allotted time. 

-As a user, if I’ve entered the correct answer, I want the amount the question is worth added to my score and I want to be able to select the next category and question. 
	(Optionally, could make it so user has to enter “What is” or “Who is,” they get it wrong. Case sensitive or insensitive?) 
-As a user, if I get the wrong answer, the amount the question is worth should be subtracted from my score and I should not get to choose the next question. 

-The floor should open up again for anyone to buzz and answer the question I got wrong. 

-If no one gets the answer right, the player who answered the last correct question gets to choose the next question. 

-As a user, I want to see my score each time I answer a question, as well as the current score of my opponent. 
(Daily double.)

-As a user, I want to be able to see when a card is no longer available to guess. 

-As a user, when I click on the Daily Double card, I want to be able to select how much to wager (up to $500 or however much money I’ve accumulated, whichever is greater).

-If I get the question correct, the amount I wagered should be added to my score. 

-If I don’t get the answer correct, the amount I wagered is subtracted and no one else can answer the question. 

-As a user, I want to play three rounds of Jeopardy. 

   	-The round is over when either the timer has run out or the players have answered 30 questions. 
   	
-As a user, I want to know who has won when all the cards have been guessed/ at the end of the third round. 

*Round 2 - Double Jeopardy*

-For Double Jeopardy: Players can wager up to $1000 or their maximum cash amount, whichever is greater. 


*Round 3 - Final Jeopardy*

-As a user, if I’m in the negative or have no cash, I can’t play. 

-If I do have cash, I make a secret wager. (hmm…would you need two monitors?) 

-Once the question shows, I have 30 seconds to write down an answer in the form of a question. (Maybe pass the computer so players can do this separately.)

-(From player with least money to player with highest,) inputs of players are shown. 

-If player is correct, amount is added to player’s cash. 

-If player is wrong, amount is subtracted from player’s cash. 

THE WINNER is the one with the most cash. 


**Design:**

The board- Round 1/ Jeopardy: 

    -6 categories
    
    -5 questions per category, worth $100 to $500 
    
	      *one Daily Double card. 
	      
    -Daily Double sound and purple color. 


The board- Round 2/ Double Jeopardy: 
    -6 categories
    -5 questions per category, worth $200 to $1,0000 (double what they are in the jeopardy round). 
	      *two Daily Double cards. 
    -this should have the Daily Double sound and a different (purple?) style.


The board- Round 3/ Final Jeopardy: 
    -A single category. 

Get the questions/ categories from: [http://www.j-archive.com/] (for now). (Cite source.) 




