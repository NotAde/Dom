function changeText(elementId, newText) {
    var element = document.getElementById(elementId);
    element.textContent = newText;
  }
  
scroll

function changeColor() {
    const colors = ['red', 'green', 'blue', 'purple', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;   

}