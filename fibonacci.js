let contadorRec = 0

function fibonacciRecursivo(num){
    if (num == 1) return 0
    if (num == 2) return 1

    contadorRec++    
    return fibonacciRecursivo(num - 1) + fibonacciRecursivo(num -2)
}

let contadorMemo = 1

function fibonacciMemo(num, memoria ={}){
    if (memoria[num]) return memoria[num]
    if (num == 1) return 0
    if (num == 2) return 1

    contadorMemo++
    return memoria[num] = fibonacciMemo(num - 1, memoria) + fibonacciMemo(num -2, memoria)
}

function fibonacciListas(){
    let a = 0, b = 1

    return{
        next: function(){
            let f = a
            a = b
            b = f + a

            return { value: f, done: false }
        }
    }
}

const fibolistas = {}
fibolistas[Symbol.iterator] = fibonacciListas

let i = 0

for (let value of fibolistas){
    console.log(value)
    i++
    if (i > 20) break
}

function* fibonacciGenerador(){
    let a = 0, b = 1

    while (true){
        let f=a
        a = b
        b = f + a
        let reset = yield f
        if (reset) a = b, b = 1
    }
}

const fibo = fibonacciGenerador()

fibogenerador
fibogenerador.next()
fibo.next(reset)