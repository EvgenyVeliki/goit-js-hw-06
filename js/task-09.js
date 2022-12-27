const button = document.querySelector(".change-color")
const span = document.querySelector('.color')
const body = document.querySelector('body')

button.addEventListener('click', onClickButton)

function onClickButton (event) {
 const newColor = body.style.backgroundColor = getRandomHexColor()
  
 span.textContent = newColor


  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }  
}
