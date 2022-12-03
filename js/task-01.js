const categories = document.querySelector('#categories').children.length
console.dir(`Number of categories: ${categories}`)

const firstCategories = document.querySelector('.js-list_animals').children.length
const firstCategorie = document.querySelector('.js-firstCategoriesName').textContent

console.dir(`Category: ${firstCategorie}
Elements: ${firstCategories}`)

const secondCategories = document.querySelector('.js-list_products').children.length
const secondCategorie = document.querySelector('.js-secondCategoriesName').textContent
console.dir(`
Category: ${secondCategorie}
Elements: ${secondCategories}`)


const thirdCategories = document.querySelector('.js-list_technologies').children.length
const thirdCategorie = document.querySelector('.js-thirdCategoriesName').textContent
console.dir(`Category: ${thirdCategorie}
Elements: ${thirdCategories}`)