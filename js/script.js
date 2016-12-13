$(document).ready(function(){
  createGrid(16 * 16);
  colorUnits();
  resetGrid();
  newGrid();
});

function createGrid(squares) {
  for (i = 0; i < squares; i++) {
      $('#container').append("<div class='unit'></div>");
    }
    newLength = $('#container').height() / Math.sqrt(squares);
    $('.unit').height(newLength);
    $('.unit').width(newLength);
}

function newGrid() {
  $('#userInput').click(function() {
    input = prompt("Pick a grid size! (48max)");
    while (input > 48) {
      alert("KEEP IT UNDER 48!");
      input = prompt("Try again.  Keep it 48 or under!");
    }
    $('#container').empty();
    createGrid(Math.pow(input,2));
    colorUnits();
    return false;
  });
}

function colorUnits() {
  $('.unit').mouseenter(function() {
    $(this).css('background-color', '#3D3D3D');
  })
}

function resetGrid() {
  $('#userReset').click(function() {
    $('.unit').css('background-color', 'white');
    return false;
  });
}
