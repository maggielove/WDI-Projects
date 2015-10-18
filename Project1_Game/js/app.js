window.onload = function() {

  var players = [];

  var waitingForKeypress = true;

  var categories =
    [
      "Y Before E", "Cat2", "Cat3","Cat4", "Cat5", "Cat6"
    ]

  var gameBoard =
    [
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

  window.addEventListener('keyup', function(e) {
      if (e.which === 65) {
        document.getElementById('ding').play();
        players.push('playerOne');
        player = players[0];
        waitingForKeypress = false;
      } else if (e.which === 76) {
        document.getElementById('ding-2').play();
        players.push('playerTwo');
        player = players[0];
        waitingForKeypress = false;
        // }
      } else {
        alert('Please press A or L.');
      }
      console.log(player);
      // console.log(e);
      // return players[this.length - 2];
  })
  //ends keyup function

  var renderCategories = function() {
    var categoryRow = document.createElement('div');
    categoryRow.id = 'category-row';
    document.body.appendChild(categoryRow);
    for (var i = 0; i < categories.length; i++) {
      var category = document.createElement('div');
      category.className = 'category';
      category.setAttribute('id', i);
      category.innerHTML = categories[i];
      categoryRow.appendChild(category);
      console.log(category);
    }
  };
  // ends renderCategories();

  renderCategories(); 

  var renderBoard = function() {
    // var container = document.createElement('div');
    // container.id = 'container';
    // document.body.appendChild(container);

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
         row.id = '100-question';
         card.value = 100;
         var cardLabel = document.createElement('h2');
         cardLabel.innerHTML = '100';
         card.appendChild(cardLabel);
       }
       else if ((i >= 6) && (i <=11)) {
         row.id = '200-question';
         card.value = 200;
         var cardLabel = document.createElement('h2');
         cardLabel.innerHTML = '200';
         card.appendChild(cardLabel);
      } else if ((i >= 12) && (i <= 17)) {
        row.id = '300-question';
        card.value = 300;
        var cardLabel = document.createElement('h2');
        cardLabel.innerHTML = '300';
        card.appendChild(cardLabel);
      } else if ((i >= 18) && (i <= 23)) {
        row.id = '400-question';
        card.value = 400;
        var cardLabel = document.createElement('h2');
        cardLabel.innerHTML = '400';
        card.appendChild(cardLabel);
      } else if ((i >= 24) && (i <= 29)) {
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
    var playerOneScore = 0;
    var playerTwoScore = 0;
    var playerGuess;

    for ( var i = 0; i < gameBoard.length; i++) {
      cards[i].addEventListener('click', function() {
        waitingForKeypress = true;
        players = [];
        //clears players array so each time you click a card, you only have max of two players in the array
        // console.log(players);
        this.disabled = true;
        //once you click a card, you can't click it again.
        var cardAmount = parseInt(this.value);
        this.classList.add(1);
        var cardLabel = this.children[0];
        var question = document.createElement('div');
        var answer = answers[this.id];
        question.className = 'question';
        question.innerHTML = questions[this.id]
        this.appendChild(question);
        question.style.display = '';
        cardLabel.style.display = 'none';

        setTimeout(function(){

           if (waitingForKeypress === false) {
            var playerGuess = window.prompt(player + ', type your answer here:');
            var playerOneBoard = document.getElementsByClassName('score')[0];
            var playerTwoBoard = document.getElementsByClassName('score')[1];
            //to tally clicked cards for checkWin function

           var getScore = function() {
            if ((playerGuess === answer) && (player === 'playerOne')) {
              window.alert('You are correct!');
              playerOneScore += cardAmount;
              playerOneBoard.innerHTML = '<h5>' + playerOneScore + '</h5>'
            } else if ((playerGuess === answer) && (player === 'playerTwo')) {
              window.alert('You are correct!');
              playerTwoScore += cardAmount;
              playerTwoBoard.innerHTML = '<h5>' + playerTwoScore + '</h5>'
            } else if ((playerGuess !== answer) && (player === 'playerOne')) {
              window.alert('Sorry, wrong answer.');
              playerOneScore -= cardAmount;
              playerOneBoard.innerHTML = '<h5>' + playerOneScore + '</h5>'
            } else if ((playerGuess !== answer) && (player === 'playerTwo')) {
              window.alert('Sorry, wrong answer.');
              playerTwoScore -= cardAmount;
              playerTwoBoard.innerHTML = '<h5>' + playerTwoScore + '</h5>'
            }
          };
          //ends getScore function

          var checkForWin = function() {
            console.log('checking for win.');
            if ( playerOneScore > playerTwoScore ) {
              alert('Player One Wins!!');
            } else {
              alert('Player Two Wins!!')
            }
          };

          var isGameOver = function() {
            var clickedCards = document.getElementsByClassName(1);
            console.log(clickedCards);
            if (clickedCards.length === 30) {
              checkForWin();
              }
            };

          getScore();
          isGameOver();
          }
          //ends if waitingForKeypress statement
        }, 1000)
          //ends setTimeout

      });
      //ends cards[i].addEventListener
    }
    //ends for loop
  };
  //ends setListeners function

  renderBoard();
  setListeners();

  // var startGame = function() {
    var newGameButton = document.getElementById('start');
    console.log(newGameButton);
    newGameButton.addEventListener('click', function() {
      // var cards = document.getElementsByClassName('card');
      var categoryRow = document.getElementById('category-row');
      document.body.removeChild(categoryRow);
      var rows = document.getElementsByClassName('row');
      for (i = rows.length; i > 0; i --) {
        console.log(rows);
        document.body.removeChild(rows[0]);
        //clear cards currently in board by removing rows one by one.
      }
      var playerOneBoard = document.getElementsByClassName('score')[0];
      var playerTwoBoard = document.getElementsByClassName('score')[1];
      var playerOneScore = 0;
      var playerTwoScore = 0;
      playerOneBoard.innerHTML = '<h5>' + playerOneScore + '</h5>';
      playerTwoBoard.innerHTML = '<h5>' + playerTwoScore + '</h5>';
      renderCategories();
      renderBoard();
      setListeners();
    });
  // };

  // startGame();


};
//ends window.onload
