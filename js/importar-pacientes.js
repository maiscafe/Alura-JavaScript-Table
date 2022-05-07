var botaoAdicionar = document.querySelector("#importar-paciente");

botaoAdicionar.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.send()
    xhr.addEventListener("load", function (){
        var erroAjax = xhr.status
        if (erroAjax == 200) {
            
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente) {
                adicionaPacientes(paciente)
            })
        } else {
            var exibeErros = document.querySelector("#exibe-erro");
            exibeErros.classList.remove("invisivel");
            exibeErros.textContent = "Erro ao importar os pacientes";
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
        


    });

});