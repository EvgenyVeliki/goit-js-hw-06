const widget = document.querySelector('.widget')
const button = widget.lastElementChild
const span = widget.firstElementChild.children[0]
const body = widget.parentElement






button.addEventListener('click', onClickButton)

function onClickButton () {
 const newColor = body.style.backgroundColor = getRandomHexColor()
  
 span.textContent = newColor


  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }  
}
