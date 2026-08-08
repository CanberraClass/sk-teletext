document.getElementById('pgtxt').addEventListener('submit', function(event) {
  // Prevent the form from refreshing the page
  event.preventDefault(); 
  
  // Get the number entered by the user
  const num = document.getElementById('pgin').value;
  
  // Update the image source path
  document.getElementById('pgout').src = `p/${num}.png`;
});


function updateText() {
  // 1. Get the value from the input field
  const inputValue = document.getElementById('pgin').value;
  
  // 2. Assign the value to the text content of the anchor tag
  document.getElementById('red').textContent = inputValue;
  document.getElementById('green').textContent = inputValue;
  document.getElementById('blue').textContent = inputValue;
  document.getElementById('yellow').textContent = inputValue;
  
}
