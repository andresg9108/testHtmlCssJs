const text = document.querySelector('.conteiner p')
const button = document.querySelector('.conteiner button')

button.addEventListener('click', () => {
  const R = Math.floor(Math.random() * 256).toString(16)
  const G = Math.floor(Math.random() * 256).toString(16)
  const B = Math.floor(Math.random() * 256).toString(16)
  const RGB = `#${R}${G}${B}`.toUpperCase()

  // document.body.style.backgroundColor = RGB
  document.body.style.setProperty('background-color', RGB)
  text.innerText = RGB
})