document.getElementById("gerarCampos")
    .addEventListener("click", () => {

        let qtdCampos = parseInt(document.getElementById('qtdCampos').value);

        for (let index = 1; index <= qtdCampos; index++) {
            let template = `<input type="number" class="form-control" id="novoValor${index}"
                placeholder="Informe o valor para o ${index} campo: " required>`;

            document.getElementById('resultados').innerHTML += template;
        }

        document.getElementById('btnSomar').removeAttribute('hidden');
    });

document.getElementById('btnSomar')
    .addEventListener('click', () => {

        let campos = document.getElementById('resultados').getElementsByTagName('input');

        let somatorio = 0;

        for (const iterator of campos) {
            somatorio += parseInt(iterator.value);
        }

        document.getElementById('resultadoSomatorio').append(somatorio);
    });

document.getElementById('apagarCampos')
    .addEventListener('click', () => {
        let campos = document.getElementById('resultados').getElementsByTagName('input');
        
        for (const it of campos) {
            it.remove();
        }
    })