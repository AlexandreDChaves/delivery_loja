function consultaEndereco(){
    let cep = document.querySelector("#cep").value;
    if(cep.lenght != 8){
        alert("CEP inválido");
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
        response.json().then(function(data){
            //console.log(data);
            mostrarEndereco(data);
        })
    })
}

function mostrarEndereco(dados){
    let nomelocalizacao =  document.querySelector(".nome-localizacao");
    nomelocalizacao.innerHTML = dados.localidade;
}