// Get the modal
var modal8 = document.getElementById("modal8");

// Get the button that opens the modal
var btn8 = document.getElementById("modal8-b");

// Get the <span> element that closes the modal
var span8 = document.getElementById("close8");

// When the user clicks on the button, open the modal
btn8.onclick = function modal8display() {
  modal8.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span8.onclick = function() {
  modal8.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
}
