var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");
    tabela.addEventListener('dblclick', function(event){
        nome = event.target.parentNode.querySelector(".info-nome").textContent;
        if (confirmAction = confirm ("Deseja remover o(a) paciente "+ nome +"?")) {
            event.target.parentNode.classList.add("fadeOut");

            setTimeout((function (){
                event.target.parentNode.remove()
            }),600);

        };

        
    })

/* pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
       if (confirmAction = confirm ("Deseja remover este paciente?")) this.remove();
        console.log(confirmAction);
        console.log('Fui clicado');
    })    
}); */