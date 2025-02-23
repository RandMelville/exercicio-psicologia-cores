document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert(`Formulário enviado com sucesso, ${document.getElementById("formnome").value}!`);

   this.reset();
});


function toggleMenu() {
    const categorias = document.getElementById("categorias");
    categorias.classList.toggle("active"); // Alterna a visibilidade do menu
}