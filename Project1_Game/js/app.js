var gameBoard =
[
  "&nbsp", "&nbsp", "&nbsp","&nbsp", "&nbsp", "&nbsp",
  "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp",
  "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp",
  "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp",
  "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp",
  "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp"
];

var turn = "Player 1";

var renderBoard = function() {
  for (var i = 0; i < gameBoard.length; i++) {
    if (i% 6 === 0) {
      var row = document.createElement('div');
      document.body.appendChild(row)
    }
  }
}
