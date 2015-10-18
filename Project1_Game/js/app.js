window.onload = function() {

  var players = [];

  var waitingForKeypress = true;

  var categories =
    [
      "Comedic TV Partners", "Writing", "Women in History","Disney Movies", "Music", "Classic Ads & Jingles"
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
        "Conan O'Brien",
        "\'He was like an eagle chained to the ground\' is an example of this type of comparison",
        "In 1860 she established a school for nurses at St. Thomas' hospital",
        "Ruling the box office in 2011 was the re-release of this film with Simba and Mufasa in 3D",
        "\'I\'m in trouble deep,\' Madonna tells her dad in this 1986 hit.",
        "It\'s finger lickin\' good!",
        "Carrie Brownstein",
        "It\'s a passing reference in a story to a familiar person, place or thing that the writer expects to be recognized",
        "This 18th-century Russian ruler hinted that none of her three children was fathered by her husband--ouch",
        "Dane Cook is the voice of Dusty Cropper in this 2013 release",
        "This group's 1972 no. 1 hit \'Papa Was a Rollin\' Stone isn\'t about Mick or Keith",
        "When it absolutely, positively has to be there overnight",
        "(Keegan-Michael) Key",
        "A category like Westerns, romance or pulp; literary fiction is often contrasted with this type of fiction",
        "Lucrezia Borgia was the daughter of a corrupt man who got this title in 1492",
        "This live-action favorite with versions in 1961 & 1998 was based on a German novel, \'Das doppette Lottchen\'",
        "In 1965 we learned from him that Papa had acquired a \'Brand new Bag\'; in 1974, that he \'Don't Take No Mess\'",
        "\'Is it live or is it\' this?",
        "(Dan) Rowan",
        "In grammar, to inflect a verb in its various forms to denote number, person, voice, mood & tense",
        "The Ken Burns documentary \'Not For Ourselves Alone\' explored the lives of Susan B. Anthony & Elizabeth Cady Stanton, 2 of our country's greatest these:",
        "\'Colors of the Wind\' from this 1995 film won a Golden Globe for Best Song as well as an Oscar",
        "I\'m gonna be like you, Dad/ You know I'm gonna be like you\', he sang in the 1974 hit \'Cat\'s in the Cradle\'",
        "The ultimate driving machine",
        "Cindy Williams, from 1976 to 1982",
        "Publishing a short excerpt in a review doesn't violate copyright & is considered this 2-word phrase",
        "In 1914 she began distributing a pamphlet called \'Family Limitation\' that outlined her views",
        "Back in the day he starred in \'The Computer Wore Tennis Shoes\' & \'The Strongest Man in the World\'",
        "This group had some words for absentee dads: \'Father of mine, tell me where have you been/ You know I just close my eyes, my whole world disappeared\'",
        "Solutions for a small planet",
      ];

    var answers =
      [
        "andy richter",
        "simile",
        "florence nightingale",
        "lion king",
        "papa don\'t preach",
        "kentucky fried chicken",
        "fred armisen",
        "allusion",
        "catherine the great",
        "planes",
        "temptations",
        "fedex",
        "peele",
        "genre",
        "pope",
        "parent trap",
        "james brown",
        "memorex",
        "(dick) martin",
        "conjugate",
        "suffragettes",
        "pocahontas",
        "harry chapin",
        "bmw",
        "penny marshall",
        "fair use",
        "margaret sanger",
        "kurt russell",
        "everclear",
        "ibm"
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
            var playerGuessLc = playerGuess.toLowerCase();
            var answerUc = answer.toUpperCase();
            var playerOneBoard = document.getElementsByClassName('score')[0];
            var playerTwoBoard = document.getElementsByClassName('score')[1];
            //to tally clicked cards for checkWin function

           var getScore = function() {
            if ((playerGuessLc === answer) && (player === 'playerOne')) {
              window.alert('You are correct!');
              playerOneScore += cardAmount;
              playerOneBoard.innerHTML = '<h5>' + playerOneScore + '</h5>'
            } else if ((playerGuessLc === answer) && (player === 'playerTwo')) {
              window.alert('You are correct!');
              playerTwoScore += cardAmount;
              playerTwoBoard.innerHTML = '<h5>' + playerTwoScore + '</h5>'
            } else if ((playerGuessLc !== answer) && (player === 'playerOne')) {
              window.alert('Sorry, wrong answer. The correct answer was ' + answerUc);
              playerOneScore -= cardAmount;
              playerOneBoard.innerHTML = '<h5>' + playerOneScore + '</h5>'
            } else if ((playerGuessLc !== answer) && (player === 'playerTwo')) {
              window.alert('Sorry, wrong answer. The correct answer was ' + answerUc);
              playerTwoScore -= cardAmount;
              playerTwoBoard.innerHTML = '<h5>' + playerTwoScore + '</h5>'
            }
          };
          //ends getScore function



          getScore();

          }
          //ends if waitingForKeypress statement
        }, 1000)
          //ends setTimeout

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

              isGameOver();
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
