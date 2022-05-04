/*

Funcções

*/
// Exemplo 1
function square(x) {
    return x + x;
}

const resultado1 = document.getElementById("resultado1");
const s = square(4);
resultado1.innerHTML = `<h1>Exemplo 01</h1><p>${s}</p>`;
console.log('Exemplo 1');
console.log(s);

// Exemplo 2
function calculaComissao(salario) {
    return salario * 0.15;
}

const func1Comissao = calculaComissao(4000);
const func2Comissao = calculaComissao(3500);
const func3Comissao = calculaComissao(1000);

const resultado2 = document.getElementById("resultado2");

resultado2.innerHTML = `<h1>Exemplo 02</h1><p>${func1Comissao}, ${func2Comissao}, ${func3Comissao}</p>`;
console.log('Exemplo 1');
console.log(func1Comissao, func2Comissao, func3Comissao);