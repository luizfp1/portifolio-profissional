botao = document.getElementById('btn-enviar');
email = document.getElementById('ed-email');

botaoCEP = document.getElementById('btn-CEP');
inputCEP = document.getElementById('inputCEP');



botaoCEP.addEventListener("click",
async function() {
    const cep = inputCEP.value;

    const response = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${cep}`
    )
    
    const resposta = await response.json();

    const divresposta = document.getElementById('respostaCEP');
    divresposta.innerHTML =
    `
    CEP: ${resposta.cep}<br>
    Rua: ${resposta.street}<br>
    Cidade: ${resposta.city}<br>
    Serviço: ${resposta.service}<br>
    Bairro: ${resposta.neighborhood}<br>
    Estado: ${resposta.state}<br>
    `;

  

    console.log(resposta);
}
)

botaoDDD = document.getElementById('btn-DDD');
inputDDD = document.getElementById('inputDDD');

botaoDDD.addEventListener("click",
    async function() {
       const ddd = inputDDD.value;
       
       const response = await fetch(
        `https://brasilapi.com.br/api/ddd/v1/${ddd}`
       )

       const resposta = await response.json();

       const divresposta = document.getElementById('respostaDDD');
       divresposta.innerHTML =
       `
       Cidades: ${resposta.cities.join(', ')}<br>
       Estado: ${resposta.state}<br>
       
       `; 
       
       console.log(resposta);
    }
)


