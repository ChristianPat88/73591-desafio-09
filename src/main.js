import './style.css'

/* EJERCICIO A --------------------------------------------------- */
console.warn('Ejercicio A')

let gatos = ['😺', '😸', '😹']

let cantidadDeGatos = 10

let cont = 0
for (let i = 0; i < cantidadDeGatos; i++) {
  console.log(`Gato #${i + 1}: ${gatos[cont]}`)
  cont === 2 ? cont = 0 : cont++
}


/* EJERCICIO B --------------------------------------------------- */
console.warn('Ejercicio B')

let gato = '🐈'
let paso = '🐾'

let cantidadDeGatosB = 5
let cantidadDePasos = 3

let pasos = ''
for (let i = 0; i < cantidadDeGatosB; i++) {
  for (let j = 0; j < cantidadDePasos; j++) {
    pasos+=paso
  }
  console.log(`Gato #${i + 1}: ${gato} ${pasos}`)
  pasos = ''
}
