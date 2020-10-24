/* Tipos de acesso:

tag: getElementByTagName()
id: getElementById()
nome: getElementByNome()
classe: getElementByClassName()
seletor: querySelector()

e é uma linguagem case sensitive - que reconhece
letras maisculas e minusculas e é feito dessa maneira
CamelCase. 
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let telefone = document.querySelector("#telefone")
let assunto = document.querySelector("#assunto")

let nomeOk = false
let emailOK = false
let telefoneOk = false
let assuntoOK = false /*Todos esses metodos que estão declarados como falso serve, para fazer envio de formulário fake, sem a necessidade de um banco de dados*/

let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width ="100%"
telefone.style.width="100%"
assunto.style.width="100%"

function validaNome(){
    let txt = document.querySelector("#txtNome")
   if(nome.value.length < 3){
       txt.innerHTML = "Nome inválido"
       txt.style.backgroundColor = 'red'
   }else{
    txt.innerHTML ="Nome válido!!"
    txt.style.backgroundColor ="green"
    nomeOk = true
}
   }


function validaEmail(){
    let txt = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txt.innerHTML = "Pô cara/moça, coloque o email certo kk!"
        txt.style.backgroundColor ="red"
    }else{
        txt.innerHTML ="Ahh agora você acertou!!"
        txt.style.backgroundColor = "green"
        emailOK = true
    }
    
}

function validaTelefone(){
    let txt = document.querySelector("#txtTelefone")
    if(telefone.value.length < 12){
        txt.innerHTML = "Telefone inválido, por favor digite novamente. Número menor que 12"
        txt.style.backgroundColor ='red'
    }else{
        txt.innerHTML ="Muito bem o telefone contém 12 e é um número válido"
        txt.style.backgroundColor ="green"
        telefoneOk = true
    }
}

function validaAssunto(){
    let txt = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
       txt.innerHTML ="Eita texto muito grande, o limite é 100. Diminua e tente novamente!"
        txt.style.backgroundColor ='red'
        txt.style.display ='block'
    }else{
        /* essa é outra forma de mostra mensagem para o usuário:
        txt.innerHTML ="Muito bem, texto válido"
        txt.style.backgroundColor ='green'*/ 

        txt.style.display ='none'
        assuntoOK = true
        
    }
}

function enviar(){
    if(nomeOk == true && emailOK == true && telefoneOk && assuntoOK == true){
        alert("Parábens seu formulário foi enviado com sucesso ;D.")
    }else{
        alert("Eita, faltou preencher o formulário. corrija e envie novamente, sua mensagem!!")
    }

}

function mapaZoom(){

    mapa.style.width = '800px'
    mapa.style.height = '600px'

}

function mapaNormal(){

    mapa.style.width = '400px'
    mapa.style.height = '250px'

}



