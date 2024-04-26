const colores = document.querySelectorAll('.conteiner > .color')

colores.forEach(color => {
  const input = color.querySelector('[type=range]')

  input.addEventListener('input', event => {
    const thisColor = event.currentTarget
    const parent = thisColor.parentElement
    const conteiner = thisColor.closest('.conteiner')
    const rojo = conteiner.querySelector('#rojo [type=range]').value
    const verde = conteiner.querySelector('#verde [type=range]').value
    const azul = conteiner.querySelector('#azul [type=range]').value

    parent.querySelector('p').innerText = thisColor.value

    document.body.style.setProperty(
      'background-color',
      `rgb(${rojo}, ${verde}, ${azul})`
    )
  })
})
