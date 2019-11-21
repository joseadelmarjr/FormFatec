function Enviar() {
 
    var nome = document.getElementById("nomeid");
    var cpf = document.getElementById("CPFid");
    var endereco = document.getElementById("enderecoid");
    var telefone = document.getElementById("telefoneid");
    var dataNasc = document.getElementById("dataNascid");
    var price = document.getElementById("priceid");
    var email = document.getElementById("emailid");
    var model = document.getElementById("modelid");
    var manufacturer = document.getElementById("manufacturerid");
    var feature = document.getElementById("featureid");
    var string_envio_certa = '{"nome": "string ","cpf": "42121963871","endereco": "Rua Teste -  São Paulo - SP","telefone": "(11) 984221950","email": "email@teste.com","dataNascimento": "23/10/2019","price": "9000","model": "BMW Alguma coisa","manufacturer": "BMW","feature": "Tem tudoo"}'
    var string_envio = '{"nome": "'+ nome.value + '","cpf": "42121963871","endereco": "Rua Teste -  São Paulo - SP","telefone": "(11) 984221950","email": "email@teste.com","dataNascimento": "23/10/2019","price": "9000","model": "BMW Alguma coisa","manufacturer": "BMW","feature": "Tem tudoo"}'

  //  alert (string_envio_certa + '|' + string_envio)
    $.ajax({
        type: 'POST',
        url:  'https://9bzcb7twu0.execute-api.sa-east-1.amazonaws.com/v1/cadastro',
        data: string_envio,
        success: function(data) { alert("Oi"); },
        contentType: "application/json",
        dataType: 'json'
    });


    }