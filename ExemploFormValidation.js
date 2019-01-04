function validar() {
    var nome = document.getElementById("campo-nome").value;
    var sobrenome = document.getElementById("campo-sobrenome").value;
    var idade = document.getElementById("campo-idade").value;

    if (nome.length < 3 ) {
        alert("Nome deve conter mais letras");
        event.preventDefault();
        return;
    }

    if (nome.length > 200) {
        alert("Nome deve conter menos que 200 caracteres");
        event.preventDefault();
        return;
    }

    if (idade < 0) {
        alert("Idade tem que ser maior que 0");
        event.preventDefault();
        return;
    }

    if (idade > 130) {
        alert("idade deve menor que 130 anos")
    }
}