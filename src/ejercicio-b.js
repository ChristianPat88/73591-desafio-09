
/* EJERCICIO B --------------------------------------------------- */
console.warn('Ejercicio B')

let gato = '🐈'
let paso = '🐾'

let cantidadDeGatos = 5
let cantidadDePasos = 3

let pasos = ''

for (let j = 0; j < cantidadDePasos; j++) {
    pasos+=paso
}

for (let i = 0; i < cantidadDeGatos; i++) {
  console.log(`Gato #${i + 1}: ${gato} ${pasos}`)
}
