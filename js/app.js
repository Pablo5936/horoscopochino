const signos = [
  'Mono',
  'Gallo',
  'Perro',
  'Cerdo',
  'Rata',
  'Buey',
  'Tigre',
  'Conejo',
  'Dragón',
  'Serpiente',
  'Caballo',
  'Cabra'
]
const MENSAJE = document.querySelector('#mensaje')
const MONTH = document.querySelector('#month')
const YEAR = document.querySelector('#year')
const IMGSIGNO = document.querySelector('#imgsigno')

function calcular() {
  console.log(calcular)
  const monthTexto = MONTH.value.trim()
  const yearTexto = YEAR.value.trim()
  let monthNac = parseInt(monthTexto)
  let yearNac = parseInt(yearTexto)

  if (
    isNaN(monthNac) ||
    isNaN(yearNac) ||
    monthNac < 1 ||
    monthNac > 12 ||
    yearTexto.length !== 4
  ) {
    MENSAJE.innerHTML = 'Formato de fecha incorrecto'
    MENSAJE.style.fontSize = '1.5em'
    return
  }

  if (monthNac == 1) {
    yearNac -= 1
  }

  let signo = yearNac % 12
  let resultado = signos[signo]

  MENSAJE.innerHTML = `Tu signo es <b> ${resultado} </b>`
  IMGSIGNO.src = './img/' + resultado.toLowerCase() + '.png'
  IMGSIGNO.alt = signo
  MENSAJE.style.fontSize = '1.5em'
  IMGSIGNO.style.borderRadius = '10px'
}
