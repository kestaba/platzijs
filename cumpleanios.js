const nacimiento = new Date(1991, 0, 26)

const hoy = new Date()

const tiempo = hoy - nacimiento

const tiempoSegundos = tiempo / 1000

const tiempoMin = tiempoSegundos / 60

const tiempoHoras = tiempoMin / 60

const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDay())

const diasSemana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
]

console.log(diasSemana[proximoCumple.getDay()])