
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
