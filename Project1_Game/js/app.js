

//
// function checkAnswer() {
//   if (input answer === "sire") {
//     playerCash += question.value;
//   }
// }

window.onload = function() {

  var gameBoard =
  [
    "&nbsp", "&nbsp", "&nbsp","&nbsp", "&nbsp", "&nbsp",
    "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp",
    "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp",
    "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp",
    "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp",
    "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp"
  ];

var questions =
  [
    "Do you like dogs?",
    "Do you like cats?",
    "Do you like squids?"
  ];

var answers =
  [
    "yes",
    "no",
    "maybe"
  ];

  // var turn = "Player 1";

  var renderBoard = function() {

    for (var i = 0; i < gameBoard.length; i++) {
      if (i% 6 === 0) {
        var row = document.createElement('div');
        document.body.appendChild(row);
        row.className='row';
      }

      var cardObject = {
        'question': questions[i],
        'answer':   answers[i]
      };

        var card = document.createElement('button');
        card.setAttribute('id', i);
        card.className = 'card';
        card.innerHTML = gameBoard[i];
        row.appendChild(card);

       if ((i >= 0) && (i <= 5)) {
        row.id = 'category-name';
      }
      else if ((i >= 6) && (i <=11)) {
        row.id = '100-question';
        card.value = 100;
        var cardLabel = document.createElement('h2');
        cardLabel.innerHTML = '100';
        card.appendChild(cardLabel);

      } else if ((i >= 12) && (i <= 17)) {
        row.id = '200-question';
        card.value = 200;
        var cardLabel = document.createElement('h2');
        cardLabel.innerHTML = '200';
        card.appendChild(cardLabel);
      } else if ((i >= 18) && (i <= 23)) {
        row.id = '300-question';
        card.value = 300;
        var cardLabel = document.createElement('h2');
        cardLabel.innerHTML = '300';
        card.appendChild(cardLabel);
      } else if ((i >= 24) && (i <= 29)) {
        row.id = '400-question';
        card.value = 400;
        var cardLabel = document.createElement('h2');
        cardLabel.innerHTML = '400';
        card.appendChild(cardLabel);
      } else if ((i >= 30) && (i <= 35)){
        row.id = '500-question';
        card.value = 500;
        var cardLabel = document.createElement('h2');
        cardLabel.innerHTML = '500';
        card.appendChild(cardLabel);
        }

      }
      //ends the for loop

    };
  //ends renderBoard function

  var setListeners = function() {
    var cards = document.getElementsByClassName('card');
    for ( var i = 0; i < gameBoard.length; i++) {
      // var label = document.getElementsByClassName()
      cards[i].addEventListener('click', function() {
        var cardAmount = this.value;
        var cardLabel = this.children[0];
        var  question = document.createElement('p');
        var question = questions[i];
        this.replaceChild(question, cardLabel);
        setTimeout(function(){
        window.prompt('Type your answer here:');
      }, 5000)
        //   for (var f = 0; f < gameBoard.length; f++) {
        //   var cardWorth = document.getElementsByTagName('h2')[f];
        //  };
        //   console.log(cardWorth);
      });
    }
  };

  renderBoard();
  setListeners();

};
//ends window.onload





    //  make a new if (row % 6 === 0) {
    //   row.id = '600-question';
    //   gameBoard[i].value = 600;
    // } else if (row % 5 === 0) {
    //   row.id = '500-question';
    //   gameBoard[i].value = 500;
    // }
