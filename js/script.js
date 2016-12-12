$(document).ready(function(){
  createGrid(16*16);
  pixelate();
  reset();
  toggleOutline();
  newGrid();
});

function createGrid(numBlocks) {
  for (i = 0; i < numBlocks; i++) {
      $('#container').append("<div class='unit'></div>");
    }
    newLength = $('#container').height() / Math.sqrt(numBlocks);
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
    pixelate();
    return false;
  });
}

function pixelate() {
  $('.unit').mouseenter(function() {
    $(this).css('background-color', 'black');
  })
}

function reset() {
  $('#userReset').click(function() {
    $('.unit').css('background-color', 'white');
    return false;
  });
}

function toggleOutline() {
  var state = false;
  $(".toggle").on('click', function() {
      $('.box').css("outline", state ? this.value : 'none');
      state = !state;
      return false;
  });
}
