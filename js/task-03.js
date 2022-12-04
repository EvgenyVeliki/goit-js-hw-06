const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const list = document.querySelector('.gallery')

const markup = images.map(({url,alt}) => `<li class="js-item"><img alt="${alt}" src="${url}" width = 640 height = 350 ></li>`).join('')


// for (let i = 0; i < images.length; i += 1) {
//   const element = images[i]
  
//   markup += `<li class="js-item"><img alt="${element.alt}" src="${element.url} width = "300px"/>"></li>`
  
// }

list.insertAdjacentHTML("beforeend",markup)

// console.dir(markup)

console.dir(list)