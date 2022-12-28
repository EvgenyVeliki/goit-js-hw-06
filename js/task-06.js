const input = document.querySelector('#validation-input')
const data = document.querySelector('[data-length="6"]')
const dataLength = Number(data.dataset.length)




input.addEventListener('blur', onBlurInput)





function onBlurInput() { 
   
   if (input.value.length === dataLength) {
      input.classList.remove("invalid");
    input.classList.add("valid");
   } else {
      input.classList.add("invalid");
    input.classList.remove("valid");
   }
}




