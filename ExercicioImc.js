var id = 0;

function mostrar() {
    alert("imc:" + calcular());
}
function calcular() {

    var imc = 0;
    var peso = document.getElementById("campo-peso").value;
    var altura = document.getElementById("campo-altura").value;
    peso = parseInt(peso);
    altura = parseFloat(altura);
    imc = peso * 10000 / (altura * altura);
    return imc;

}

function salvar() {
    var peso = document.getElementById("campo-peso").value;
    var altura = document.getElementById("campo-altura").value;
    var nome = document.getElementById("campo-nome").value;
    var idade = document.getElementById("campo-idade").value;


    var linha = document.createElement("tr")

    var colunaCodigo = document.createElement("td");
    colunaCodigo.innerHTML = ++id;

    var colunaNome = document.createElement("td");
    colunaNome.innerHTML = nome;

    var colunaIdade = document.createElement("td");
    colunaIdade.innerHTML = idade;

    var colunaPeso = document.createElement("td");
    colunaPeso.innerHTML = peso;

    var colunaAltura = document.createElement("td");
    colunaAltura.innerHTML = altura;

    var colunaImc = document.createElement("td");
    var imc = parseFloat(calcular());
    colunaImc.innerHTML = imc;

    var colunaSituacao = document.createElement("td");
    colunaSituacao.innerHTML = situacao();

    linha.appendChild(colunaCodigo);
    linha.appendChild(colunaNome);
    linha.appendChild(colunaIdade);
    linha.appendChild(colunaPeso);
    linha.appendChild(colunaAltura);
    linha.appendChild(colunaImc);
    linha.appendChild(colunaSituacao);


    var primeiro = document.getElementById("tabela-main").firstChild;
    document.getElementById("tabela-main").insertBefore(linha, primeiro);



}
function limpar() {
    document.getElementById("campo-nome").value = "";
    document.getElementById("campo-nome").value = "";
    document.getElementById("campo-nome").value = "";
    document.getElementById("campo-nome").value = "";

}
function editar() {

}

function situacao() {
    var imc = calcular();
    if (imc < 10) {
        return "Desnutrição grau V";
    } else if (imc >= 10 && imc < 13) {
        return "Desnutrição grau IV";
    } else if (imc >= 13 && imc < 16) {
        return "Desnutrição grau III ";
    } else if (imc >= 16 && imc < 17) {
        return "Desnutrição grau II";
    } else if (imc >= 17 && imc < 18.5) {
        return "Desnutrição gra I";
    } else if (imc >= 18.5 && imc < 25) {
        return "normal";
    } else if (imc >= 25 && imc < 30) {
        return "Pré-obesidade";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade Grau I";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade Grau II";
    } else if (imc > 40) {
        return "Obesidade Grau III";

    }
}
