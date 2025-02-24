const form = document.querySelector('form')
form.addEventListener("submit", function(event){
    event.preventDefault();
    var nome = form.user_name.value;
    var email = form.user_email.value;
    var msg = form.user_msg.value;
    console.log(nome, email, msg);
    let enviar = confirm("Enviar formulario?");
    if(enviar){
        form.submit();
    }
});