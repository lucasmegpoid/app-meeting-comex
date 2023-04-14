var dados = [];
var botao = document.querySelectorAll('.p');
botao.forEach(element => {
    element.addEventListener('click', function() {
        const parent = this.closest('.notas');
        const children = parent.querySelectorAll('.active');
        children.forEach(child => child.classList.remove('active'));
        this.classList.add('active');

        if(this.classList.contains('active')){
        }
        if(parent.classList[1] == 'p1'){
            dados['primeira'] = this.value;
        } else if(parent.classList[1] == 'p2'){
            dados['segunda'] = this.value;
        } else if(parent.classList[1] == 'p3'){
            dados['terceira'] = this.value;
        }
    });
});

const queryString = window.location.search;
const parametro = new URLSearchParams(queryString);
const id = parametro.get('id');
dados['id'] = id;

function ativarSmile(smile){
    var classe = document.querySelectorAll('.smile');
    classe.forEach(element => {
        element.classList.remove('active');
    });
    smile.classList.remove('active');
    smile.classList.add('active');
    if(smile.classList.contains('active')){
        dados['smile'] = smile.id;
    }
    if(smile.id == 'satisfeito'){
        document.body.style.backgroundColor = "rgba(103, 255, 154, 0.479)";
        document.body.style.transition = "0.7s";
    } else if(smile.id == 'insatisfeito'){
        document.body.style.backgroundColor = "rgba(255, 235, 59, 0.479)";
        document.body.style.transition = "0.7s";
    }
}

function confirmar(){
    const retorno = document.getElementById("details");
    const feedback = retorno.value;
    dados['quinta'] = feedback;
    Swal.fire({
        title: 'Agradecemos a sua participação!',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
    });
    setTimeout(function() {
        window.location.href = "https://conlinebr.com.br/";
    }, 2100);
    console.log(dados);
}