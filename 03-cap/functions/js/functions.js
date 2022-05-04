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

// Exemplo 3
function calculaComissaoTurno(salario, turno) {
    const comissao = calculaComissao(salario);
    let msg = '';
    if (turno == 'Noite') {
        msg = `Turno ${turno} recebe adicional de 100 reais. Comissao = ${(comissao + 100)}`;
        console.log(msg)
    } else {
        msg = `Turno ${turno} recebe valor normal. Comissao = ${comissao}`;
        console.log(msg)
    }
    return msg;
}

console.log('Exemplo 3')
const co1 = calculaComissaoTurno(1000, 'Noite');
const co2 = calculaComissaoTurno(6500, 'Dia');
const co3 = calculaComissaoTurno(8000, 'Noite');

const resultado3 = document.getElementById("resultado3");
resultado3.innerHTML = `<h1>Exemplo 03</h1><p>${co1}</p><p>${co2}</p><p>${co3}</p>`;



