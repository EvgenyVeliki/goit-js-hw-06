const form = document.querySelector('#name-input')
const nameSpan = document.querySelector('#name-output')
 
form.addEventListener('input', nameTitle)


function nameTitle (event) {
nameSpan.textContent = event.currentTarget.value


if (form.value === '') {
    nameSpan.textContent = 'Anonymous'
} else {
    nameSpan.textContent = event.currentTarget.value
}
}

