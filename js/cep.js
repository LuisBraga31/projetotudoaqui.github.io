const cepRef = document.querySelector('#cep');
const cidadeRef = document.querySelector('.cidade-result')
const bairroRef = document.querySelector('.bairro-result');

function preencherEndereco(address) {
    cidadeRef.innerText = ` ${address.localidade}`;
    bairroRef.innerText = ` ${address.bairro}`;
}

function validarCep() {
    const cep = cepRef.value;

    if(cep.length === 8) {
        
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(  
            response => {
                response.json().then(
                    data => {
                        
                        if (data.erro === undefined) {
                            preencherEndereco(data);
                        } else {
                            alert('Cep informado não existe');
                            cepRef.value = '';
                        }
            
                    }
                );
            }

        )

    } else {

        cidadeRef.value = '';
        bairroRef.value = '';

    }

}

cepRef.addEventListener('keyup', validarCep); 
