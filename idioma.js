function platzom(str){
    let translation = str

     //Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayuscula uy minuscula
     const reverse = (str) => str.split('').reverse().join('')

     function minMay(str){
         const length = str.length
         let translation = ''
         let capitalize = true
 
         for (let i = 0; i< length; i++){
             const char = str.charAt(i)
             translation += capitalize ? char.toUpperCase() : char.toLowerCase()
             capitalize = !capitalize
         }
 
         return translation
     }
     
     if (str.toLowerCase() == reverse(str).toLowerCase()){
         return minMay(str)
     }

    // Si la palabra termina en "ar", se le quitan esos dos caracteres
    if (str.toLowerCase().endsWith("ar")){
        translation = str.slice(0, -2)
    }

    // Si la palabra inicia con Z, se le añade "pe" al final
    if (str.toLowerCase().startsWith('z')){
        translation += 'pe'
    }

    //Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión medio
    if(str.length >= 10){
        const firstHalf = translation.slice(0, Math.round(translation.length / 2))
        const secondHalf = translation.slice(Math.round(translation.length / 2))

        translation = `${firstHalf}-${secondHalf}`
    }

    return translation
}

console.log(platzom("programar")) //program
console.log(platzom("zorro")) //zorrope
console.log(platzom("zarpar")) //zarppe
console.log(platzom("abecedario")) //abece-dario
console.log(platzom("sometemos")) //SoMeTeMoS