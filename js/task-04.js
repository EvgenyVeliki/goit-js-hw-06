const counter = document.querySelector('#counter')
const negativeNumber = counter.firstElementChild
const positiveNumber = counter.lastElementChild
const renewNumber = counter.children[1]


let counterValue = 0 



const decrement = () => {
    counterValue -= 1
    renewNumber.textContent = counterValue
}

const increment = () => {
    counterValue += 1
    renewNumber.textContent = counterValue
}


negativeNumber.addEventListener('click', decrement)
positiveNumber.addEventListener('click',increment)








