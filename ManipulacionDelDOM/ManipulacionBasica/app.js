/*
EVENT
Target
Trigger
Event Handler
Event Listener
*/

const items = document.querySelectorAll('#conteiner ul li.item')
items.forEach(item =>
  item.addEventListener('click', event => alert(event.currentTarget.innerText))
)

/*
// getElementBy... and getElementsBy...
const conteiner = document.getElementById('conteiner')
const itemsByClassName = document.getElementsByClassName('item')
const itemsByTagName = document.getElementsByTagName('li')
// console.log(conteiner.tagName)
// console.log(conteiner.innerHTML)
console.log(conteiner.innerText) // Elimina espacios del HTML
// console.log(conteiner.textContent) // Mantiene los espacios HTML
*/

/*
// querySelector
const conteiner = document.querySelector('#conteiner')
const liItem = document.querySelector('ul li.item')
const liItemNaranja = document.querySelector('ul li.item.item-naranja')
const liItemsMarron = document.querySelectorAll('ul li.item:not(.item-naranja)')
const itemsByClassName = document.querySelectorAll('.item')
const itemsByTagName = document.querySelectorAll('li')
console.log(liItemsMarron)
*/

/*
// style
const item = document.querySelector('#conteiner ul li.item')
item.style.color = '#000'
item.style.backgroundColor = 'orange'
item.style.textTransform = 'uppercase'
*/

/*
// getAttribute, removeAttribute and setAttribute
const enlace = document.querySelector('#conteiner > a')
console.log(enlace.getAttribute('href'))
enlace.removeAttribute('href')
enlace.setAttribute('href', 'https://freecodecamp.org/espanol')
enlace.setAttribute('target', '__black')
*/

/*
// classList
const item = document.querySelector('#conteiner ul li.item')
item.classList.remove('item-marron')
item.classList.add('item-verde')
console.log(item.classList.contains('item-marron'))
*/

/*
// createElement
const ul = document.querySelector('#conteiner ul')
const newLi = document.createElement('li')
newLi.classList.add('item', 'item-verde')
newLi.innerText = '💩💩💩💩💩'
ul.appendChild(newLi) // Agrega un elemento 
ul.append('Hola Mundo') // Agrega texto y elementos.
*/

/*
// removeElement
const item = document.querySelector('#conteiner ul li.item')
item.remove()
*/

/*
// parent, children and sibling
const item = document.querySelector('#conteiner ul li.item')
const parent = item.parentElement // parentNode
// console.log(item.closest('#conteiner'))
// console.log(parent.children)
// console.log(parent.firstChild) // Primer nodo
// console.log(parent.lastChild) // Último nodo
// console.log(parent.firstElementChild) // Primer elemento
// console.log(parent.lastElementChild) // Último elemento
console.log(item.nextSibling)
console.log(item.nextElementSibling)
console.log(item.previousSibling)
console.log(item.previousElementSibling)
*/
