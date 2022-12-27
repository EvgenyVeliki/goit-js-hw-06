
const negativeNumber = document.querySelector('button[data-action="decrement"]')
const positiveNumber = document.querySelector('button[data-action="increment"]')
const renewNumber = document.querySelector('#value')

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








