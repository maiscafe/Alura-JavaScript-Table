var botaoAdicionar = document.querySelector("#importar-paciente");

botaoAdicionar.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.send()
    xhr.addEventListener("load", function (){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        
        pacientes.forEach(function(paciente) {
            adicionaPacientes(paciente)
        })

    });

});