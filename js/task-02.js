const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const list = document.querySelector('#ingredients')
// const li = document.createElement('li')
//  const nameClass = li.classList.add('js-item')

const arr = []

for (let i = 0; i < ingredients.length; i += 1) {
  const newItem = document.createElement('li')
  newItem.textContent = ingredients[i]
  newItem.classList.add('js-item')
  console.log(newItem)
  arr.push(newItem)
}

console.log(arr)

list.append(...arr)


