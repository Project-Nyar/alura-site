const form = document.getElementById("form");
const username = document.getElementById("usuario");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    checkForm();
  })

  function checkInputUsername(){
    const usernameValue = username.value; 
    if(usernameValue === ""){
        errorInput(username,"Nome é obrigatório!");
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-conteudo";
    }
}

function checkInputEmail(){
    const emailValue = email.value;
  
    if(emailValue === ""){
      errorInput(email, "O email é obrigatório.")
    }else if(!isEmailValid(emailValue)){
      errorInput(email,"escreva um email válido");
    }else{
      const formItem = email.parentElement;
      formItem.className = "form-conteudo";
    }
  }
  
  function isEmailValid(email){
      const emailRegex = new RegExp(
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
      );
      if(emailRegex.test(email)){
          return true;
      }
      return false;
  }

  function checkInputassunto(){
    const assuntoValue = assunto.value;
    if(assuntoValue === ""){
        errorInput(assunto,"escreva um assunto!");
    }else{
        const formItem = assunto.parentElement;
        formItem.className = "form-conteudo";
    }
}

function checkInputmensagem(){
    const mensagemValue = mensagem.value; 
    if(mensagemValue === ""){
        errorInput(mensagem,"escreva uma mensagem!");
    }else{
        const formItem = mensagem.parentElement;
        formItem.className = "form-conteudo";
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputassunto();
    checkInputmensagem();

    const formItems = form.querySelectorAll(".form-conteudo");
    const isValid = [...formItems].every( (item) => {
        return item.className === "form-conteudo";
    });

    if(isValid){
        alert("EMAIL ENVIADO COM SUCESSO");
    }
}


function errorInput(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = message;
    formItem.className = "form-conteudo error"
}