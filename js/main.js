async function endereco(cep){
    const error = document.querySelector('#erro');
    error.innerHTML = "";
    try{
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const CEPconvertido = await consultaCEP.json();
        if(CEPconvertido.erro){
            throw Error('CEP invalido')
        }
        const cidade = document.querySelector('#cidade');
        const rua = document.querySelector('#endereco');
        const estado = document.querySelector('#estado');
        const bairro = document.querySelector('#bairro');

        cidade.value = CEPconvertido.localidade;
        rua.value = CEPconvertido.logradouro;
        estado.value = CEPconvertido.uf;
        bairro.value = CEPconvertido.bairro;
        console.log(CEPconvertido);
        return CEPconvertido;
    } catch(erro){
        error.innerHTML = `<p>CEP invalido, tente novamente</p>`;
        console.log(erro)
    }
}

const CEP = document.querySelector('#cep');

CEP.addEventListener('focusout', ()=>endereco(CEP.value));