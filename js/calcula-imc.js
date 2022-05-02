
btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click',imc);

var paciente = document.querySelectorAll('.paciente');

function validarDados (peso, altura, i){
    if (peso <= 0 || peso.length >3) {
        imc.textContent = 'Peso Inválido';
        paciente[i].classList.add('paciente-invalido');
    } else if (altura <= 0 || altura >=3) {
        imc.textContent = 'Altura Inválida';
        paciente.classList.add('paciente-invalido');
    }
}
function calculaImc (peso, altura){
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
function imc () {
    var paciente = document.querySelectorAll('.paciente');

    for (var i = 0; i < (paciente.length); i++) {
        console.log(paciente[i]);

        var tdPeso = paciente[i].querySelector('.info-peso');
        var peso = tdPeso.textContent;
    
        var tdAltura = paciente[i].querySelector('.info-altura');
        var altura = tdAltura.textContent;
        
        var imc = paciente[i].querySelector('.info-imc')
        imc.textContent = calculaImc(peso, altura);
        
        validarDados(peso, altura, i);
    }

}

