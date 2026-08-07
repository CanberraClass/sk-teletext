function insertNewImage(imageNumber) {
    if (imageNumber >= 100 && imageNumber <= 899) {
        const newImg = document.createElement('pgout');
        newImg.src = `p/${imageNumber}.png`;
        newImg.alt = `Image ${imageNumber}`;
        
        document.body.appendChild(newImg);
    }
}

// Example usage: Inserts <img src="p/500.png"> directly into the body
insertNewImage(500);

// Example usage: Changes the image to p/250.png
updateImage(250);

function updateText() {
  // 1. Get the value from the input field
  const inputValue = document.getElementById('pgin').value;
  
  // 2. Assign the value to the text content of the anchor tag
  document.getElementById('red').textContent = inputValue;
  document.getElementById('green').textContent = inputValue;
  document.getElementById('blue').textContent = inputValue;
  document.getElementById('yellow').textContent = inputValue;
  
}
