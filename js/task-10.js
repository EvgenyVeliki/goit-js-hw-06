// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// .................................onChildChick...............
// const refs = {
//   parent:document.querySelector("#parent"),
//   child:document.querySelector("#child"),
//   innerChild:document.querySelector("#inner-child") 
// }


// refs.parent.addEventListener('click',onRarentClick)
// refs.child.addEventListener('click',onChildChick)
// refs.innerChild.addEventListener('click',onInnerChildClick)

// function onRarentClick (evt) {
//   console.log('onRarentClick')
//   console.log('onRarentClick ->evt.target', evt.target)
//   console.log('onRarentClick -> evt.currentTarget', evt.currentTarget)
// }

// function onChildChick (evt) {
//   console.log('onChildChick')
//   console.log('onChildChick ->evt.target', evt.target)
//   console.log('onChildChick -> evt.currentTarget', evt.currentTarget)
// }

// function onInnerChildClick (evt) {
//   console.log('onInnerChildClick')
//   console.log('onInnerChildClick ->evt.target', evt.target)
//   console.log('onInnerChildClick -> evt.currentTarget', evt.currentTarget)
// }
// ////////////////////////////////////////////////

// const container = document.querySelector('.js-container')

// container.addEventListener('click', onClick)

// function onClick (evt) {
// if (evt.target.nodeName !== 'BUTTON') {
//   return
// }


//   // console.log(evt.target.nodeName)
//   console.log(evt.target.textContent)
// }

// ///////////////////////////////////////////////////

// const tagsContainer = document.querySelector('.js-tags')
// // let selectedTag = null
// const selectedTags = new Set()


// tagsContainer.addEventListener('click', onTagsContainerClick)

// function onTagsContainerClick (evt) {

//   if (evt.target.nodeName !== 'BUTTON') {
//     return
//   }
//   const btn = evt.target
//   const tag = btn.dataset.value
//   const isActiveBtn = btn.classList.contains('tags__btn--active')

// if (isActiveBtn) {
//   selectedTags.delete(tag)
// }else {
//   selectedTags.add(tag)
// }

// btn.classList.toggle('tags__btn--active')

// console.log(isActiveBtn)

// console.log(selectedTags)

//  ////////////////////////////////////////////////////
// selectedTags.add(btn.dataset.value)

// console.log(selectedTags)
  
//   if (evt.target.nodeName !== "BUTTON") {
//     return
//   }


//   const currentActiveBtn = document.querySelector('.tags__btn--active')

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active')
//   }

//   const nextActiveBtn = evt.target



// evt.target.classList.add("tags__btn--active")

// selectedTag = nextActiveBtn.dataset.value




const colors = [
  {hex: '#f44336', rgb: '244,67,54'},
  {hex: '#e91e63', rgb: '230,30,99'},
  {hex: '#9c27b0', rgb: '156,39,176'},
  {hex: '#673ab7', rgb: '103,58,183'},
  {hex: '#3f51b5', rgb: '63,81,181'},
  {hex: '#2196f3', rgb: '33,150,243'},
  {hex: '#00bc4', rgb: '0,188,212'},
  {hex: '#009688', rgb: '0,150,136'},
  {hex: '#4caf50', rgb: '76,175,80'},
  {hex: '#ffeb3b', rgb: '255,235,59'},
]


const paletteContainor = document.querySelector('.js-palette')
const cardsMarkup = createColorCardsMarkup(colors)
paletteContainor.insertAdjacentHTML('beforeend',cardsMarkup)

// console.log(createColorCardsMarkup(colors))


paletteContainor.addEventListener('click',onPaletteContainerClick)

function onPaletteContainerClick(evt) {
const isColorSwatch = evt.target.classList.contains('color-swatch')
  if (!isColorSwatch) {
    return
  }



 

const currentActiveCard = document.querySelector('.color-card.is-active')

if (currentActiveCard) {
  currentActiveCard.classList.remove('is-active')
}

const swatchEl = evt.target

const parentColorCard = swatchEl.closest('.color-card')

parentColorCard.classList.add('is-active')

console.log(evt.target.dataset.hex)


document.body.style.backgroundColor = evt.target.dataset.hex 
}

function createColorCardsMarkup (colors) {


   return colors.map( ({hex, rgb}) => {
    return `<div class="color-card">
    <div 
    class="color-swatch"
    data-hex="${hex}"
    data-rgb="${rgb}"
    style="background-color: ${hex};">
    </div>
    <dir class="color-meta">
<p>HEX: ${hex}</p>
<p>RGB: ${rgb}</p>
    </dir>
  </div> `
  }).join('')
} 

