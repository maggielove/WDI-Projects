

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

// var turn = "Player 1";

var renderBoard = function() {

   console.log('attempting to render board.');

  for (var i = 0; i < gameBoard.length; i++) {
    if (i% 6 === 0) {
      var row = document.createElement('div');
      document.body.appendChild(row);
      row.className="row";
    }

      var card = document.createElement('button');
      card.setAttribute('id', i);
      card.className = 'card';
      card.innerHTML = gameBoard[i];
      row.appendChild(card);

     if ((i>= 0) && (i <= 5)) {
      row.id = 'category-name';
    }
    else if ((i >= 6) && (i <=11)) {
      row.id = '100-question';
      card.value = 100;
    } else if ((i >= 12) && (i <= 17)) {
      row.id = '200-question';
      card.value = 200;
    } else if ((i >= 18) && (i <= 23)) {
      row.id = '300-question';
      card.value = 300;
    } else if ((i >= 24) && (i <= 29)) {
      row.id = '400-question';
      card.value = 400;
    } else {
      row.id = '500-question';
      card.value = 500;
    }
  }

  };
  //ends renderBoard function

  renderBoard();

};
//ends window.onload



    //  make a new if (row % 6 === 0) {
    //   row.id = '600-question';
    //   gameBoard[i].value = 600;
    // } else if (row % 5 === 0) {
    //   row.id = '500-question';
    //   gameBoard[i].value = 500;
    // }
