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
