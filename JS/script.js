let btnAdd = document.querySelector("#addBotao");
btnAdd.addEventListener("click", function(){
    let inputValor = document.querySelector("#meuInput").value;
    if(inputValor == ""){
        alert("Preencha o campo");
    }else{
        alert("Login realizado com sucesso");
    }

    document.querySelector("#meuInput").value = "";
})