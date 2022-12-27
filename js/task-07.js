const input = document.querySelector('#font-size-control')
const span = document.querySelector('#text')


input.addEventListener('input', changeFrontZise)

function changeFrontZise () {
    const frontZise = input.value
    span.style.fontSize = frontZise + "px" 
    
console.dir(span.style.fontSize)
}


