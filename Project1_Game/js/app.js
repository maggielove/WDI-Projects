

// function checkAnswer() {
//   if (input answer === "sire") {
//     playerCash += question.value;
//   }
// }

 var player = '';

window.onload = function() {

  var gameBoard =
    [
      "Blahblah", "&nbsp", "&nbsp","&nbsp", "&nbsp", "&nbsp",
      "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp",
      "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp",
      "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp",
      "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp",
      "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp"
    ];

var questions =
  [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
    "Question 6",
    "Question 7",
    "Question 8",
    "Question 9",
    "Question 10",
    "Question 11",
    "Question 12",
    "Question 13",
    "Question 14",
    "Question 15",
    "Question 16",
    "Question 17",
    "Question 18",
    "Question 19",
    "Question 20",
    "Question 21",
    "Question 22",
    "Question 23",
    "Question 24",
    "Question 25",
    "Question 26",
    "Question 27",
    "Question 28",
    "Question 29",
    "Question 30",
  ];

var answers =
  [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "A11",
    "A12",
    "A13",
    "A14",
    "A15",
    "A16",
    "A17",
    "A18",
    "A19",
    "A20",
    "A21",
    "A22",
    "A23",
    "A24",
    "A25",
    "A26",
    "A27",
    "A28",
    "A29",
    "A30"
  ];

  var renderBoard = function() {

    for (var i = 0; i < gameBoard.length; i++) {
      if (i% 6 === 0) {
        var row = document.createElement('div');
        document.body.appendChild(row);
        row.className='row';
      }

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

      window.addEventListener('keyup', function(e) {
        if (e.which === 65) {
          player = 'playerOne';
        } else if (e.which === 76) {
          player = 'playerTwo';
        } else {
          alert('Please press A or L.');
        }
        console.log(player);
        // return player;
      })

    };
  //ends renderBoard function

  var setListeners = function() {
    var cards = document.getElementsByClassName('card');
    var playerCash = 0; 
    var playerGuess;
    for ( var i = 0; i < gameBoard.length; i++) {
      // var label = document.getElementsByClassName()
      cards[i].addEventListener('click', function() {
        var cardAmount = parseInt(this.value);
        console.log(cardAmount);
        var cardLabel = this.children[0];
        var question = document.createElement('div');
        var answer = answers[ this.id - 6];
        question.className = 'question';
        question.innerHTML = questions[ this.id - 6 ]
        this.appendChild(question);
        question.style.display = '';
        cardLabel.style.display = 'none';



        setTimeout(function(){

          var playerGuess = window.prompt('Type your answer here:');
          if ( playerGuess === answer) {
            playerCash += cardAmount;
            window.alert('Well played!');
          } else {
            playerCash -= cardAmount;
            window.alert('I\'m afraid not.');
          }
          console.log(playerCash);

          var getScore = function(player) {
            if (player === 'playerOne') {
              var total = document.getElementsByClassName('score')[0];
              total.innerHTML = '<h5>' + playerCash + '</h5>'
            } else if (player === 'playerTwo') {
              var total = document.getElementsByClassName('score')[1];
              total.innerHTML = '<h5>' + playerCash + '</h5>';
            }
          };

          getScore(player);
          // var playerOneScore = document.getElementById('player-one-score');
          // var playerOneScore = document.getElementById('player-two-score');
        }, 1000)


        // checkAnswer();
        //   for (var f = 0; f < gameBoard.length; f++) {
        //   var cardWorth = document.getElementsByTagName('h2')[f];
        //  };
        //   console.log(cardWorth);
      });
    }
  };

// need to  link to gameboard!
//   var checkAnswer = function() {
//   for ( var i = 0; i < gameBoard.length; i++) {
//
//   }
// }

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
