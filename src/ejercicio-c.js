
/* EJERCICIO C --------------------------------------------------- */
console.warn('Ejercicio C')

let gato = '🐈'
let gatoNegro = '🐈‍⬛'
let paso = '🐾'

let cantidadDeGatos = 10
let cantidadDePasos = 4

let pasos = ''
let gatos = ''
for (let i = 0; i < cantidadDeGatos; i++) {
  for (let j = 0; j < cantidadDePasos; j++) {
    pasos+=paso
  }
  
  gatos = ((i + 1) % 2) > 0 ? gato : (gato + gatoNegro)

  console.log(`Gato #${i + 1}: ${gatos} ${pasos}`)
  pasos = ''
}

