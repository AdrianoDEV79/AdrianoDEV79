
function carnePp(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cerverjaPp(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function BebidaPp(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

function calcular() {

    let inpultAdultos = document.getElementById("adultos").value;
    let inpultCriancas = document.getElementById("criancas").value;
    let inpultDuracao = document.getElementById("duracao").value;
    let resultado = document.getElementById("resultado");


    let adulto = inpultAdultos;
    let crianca = inpultCriancas;
    let duracao = inpultDuracao;


    let qtdtCarne = carnePp(duracao) * adulto + (carnePp(duracao) / 2 * crianca);
    let qtdtcerveja = cerverjaPp(duracao) * adulto;
    let qtdtbebida = BebidaPp(duracao) * adulto + (BebidaPp(duracao) / 2 * crianca);


    resultado.innerHTML = ` <style>.container2{
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        max-width: 300px;
        background-color: gold;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        color: black;
        border: solid 3px black;
        box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.548);        
        }</style>`
    resultado.innerHTML += `<h2 class="result-info">Você vai precisar de:</h2>`
    resultado.innerHTML += `<img style="max-width: 200px;" src="https://imagensemoldes.com.br/wp-content/uploads/2020/06/Figura-Carne-PNG.png">`
    resultado.innerHTML += `<p> ${qtdtCarne / 1000} kilos de Carne </p>`;
    resultado.innerHTML += `<img style="max-width: 150px;" src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Ilustra%C3%A7%C3%A3o-Cerveja-PNG-1024x814.png">`
    resultado.innerHTML += `<p> ${Math.ceil(qtdtcerveja / 355)} Latas de Cerveja </p>`;
    resultado.innerHTML += `<img style="max-width: 130px;" src="./refrigerante-e-agua.png">`
    resultado.innerHTML += `<p> ${Math.ceil(qtdtbebida / 2000)} Litros de Bebidas </p>`;

}

function novo() {

    let inpultAdultos = document.getElementById("adultos").value = "";
    let inpultCriancas = document.getElementById("criancas").value = "";
    let inpultDuracao = document.getElementById("duracao").value = "";

    resultado.innerHTML = ""

}

function verificar() {
    let inpultAdultos = document.getElementById("adultos").value;
    let inpultCriancas = document.getElementById("criancas").value;
    let inpultDuracao = document.getElementById("duracao").value;

    let adulto = inpultAdultos;
    let crianca = inpultCriancas;
    let duracao = inpultDuracao;
    if (adulto == "") {
        alert("Informe quantos Adultos iram ao churrasco!");
        Selection.document.getElementById("adultos");
    } else if (crianca == "") {
        alert("Informe quantas Crianças iram ao churrasco!");
        Selection.document.getElementById("adultos");
    } else if (duracao == "") {
        alert("Informe qual a duração do churrasco!");
        Selection.document.getElementById("adultos");
    } else {
        calcular();
    }


}
