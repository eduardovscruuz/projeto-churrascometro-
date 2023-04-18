// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let inputButtons = document.getElementById("inputButtons");

let resultado = document.getElementById("resultado");

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
  
    if (adultos === '' || criancas === '' || duracao === '') {
        alert('Por favor, preencha todos os campos antes de calcular.');
        return;
    }
  
    let qdtTotalCarne = carnePP(duracao) * adultos + carnePP(duracao) / 2 * criancas;
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + bebidasPP(duracao) / 2 * criancas;
  
    resultado.innerHTML = `<strong><p>Para um churrasco de ${duracao} horas, com ${adultos} adultos e ${criancas} crianças, você irá precisar de:</p></strong>`;
    resultado.innerHTML += `<li>${qdtTotalCarne / 1000}Kg de carne</li>`;
    resultado.innerHTML += `<li>${Math.ceil(qdtTotalCerveja / 355)} Latas de cerveja</li>`;
    resultado.innerHTML += `<li>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de 2L de refrigerantes</li>`;
    resultado.innerHTML += `<i>Aproveite seu churrasco! &#10084 </i>`;
  
    resultado.style.opacity = "1";
    resultado.style.transform = "translateY(0)";
    inputButtons.style.transform = "translateY(0)";
    resultado.style.height = "30%";
    inputButtons.style.height = "70%";
  }
  

new CircleType(document.getElementById('demo1'))
  .radius(440);