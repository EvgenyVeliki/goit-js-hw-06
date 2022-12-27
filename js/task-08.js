const form = document.querySelector('.login-form')



form.addEventListener('submit', onFormSubmit)

function onFormSubmit (event) {
    event.preventDefault()
const email = event.currentTarget.elements.email.value
const password = event.currentTarget.elements.password.value

if (email === '') {
    alert('Заполните поле Email')
}
if (password === '') {
    alert('Заполните поле Password')
}

const forData =  {
    Email: email,
    password: password
}
console.log(forData)

event.currentTarget.reset()
}