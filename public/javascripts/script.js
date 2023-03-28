function cadastrar(){

    var checkbox = document.getElementById('flexSwitchCheckDefault');
    if (!checkbox.checked){
        swal.fire(
            '',
            'Confirme o aceite da coleta de dados para seguir com o cadastro.',
            'error'
        );
        return;
    } else{
        Swal.fire(
            '',
            'Cadastro efetuado com sucesso!',
            'success'
          );
    }

    var novoCNPJ = document.getElementById("cnpj").value;
    var novoEmpresa = document.getElementById("razao").value;
    var novoNome = document.getElementById("nome").value;
    var novoTel = document.getElementById("tel").value;
    var novoEmail = document.getElementById("email").value;

    var dados = {
        CNPJ: novoCNPJ,
        Razao: novoEmpresa,
        Nome: novoNome,
        Tel: novoTel,
        Email: novoEmail
    }

    console.log(dados);
}

const form = document.querySelector('#formulario');
form.addEventListener('submit', function(event) {
event.preventDefault();
cadastrar();
});

// FUNÇÃO DE REQUISIÇÃO PADRÃO
function ThefetchAPI(url, method) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: method,
        headers: {'Content-Type': 'application/json'},
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

$(document).on('keyup', '#cnpj', function () {
    let cnpj = $(this).val()
    let cnpjCount = cnpj.length
    if(cnpjCount == 18){
        let cnpjNumber = parseInt(cnpj. split(/\D+/). join(""))
        ThefetchAPI('https://receitaws.com.br/v1/cnpj/'+cnpjNumber, 'GET').then(response => {
            document.getElementById("razao").value = response.nome
            console.log(response)
        })
    }
});

$('#cnpj').mask('00.000.000/0000-00', {reverse: true});
$('#tel').mask('(00) 00000-0000');