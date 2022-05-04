/*

Funcções

*/

function square(x) {
    return x + x
}

const resultado = document.getElementById("resultado")
const s = square(4)
resultado.innerHTML = s
console.log(s)