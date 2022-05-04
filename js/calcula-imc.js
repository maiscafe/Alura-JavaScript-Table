
btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click',imc);

var paciente = document.querySelectorAll('.paciente');






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
        if (validarDados(peso, true)) {
            imc.textContent = 'Peso Inválido';
            paciente[i].classList.add('paciente-invalido');
        } else if (validarDados(true, altura)) {
            imc.textContent = 'Altura Inválida';
            paciente[i].classList.add('paciente-invalido');
        }
    }
}


function validarDados (peso, altura){
    if (!validarPeso(peso)) {
        return true;
    } else if (!validarAltura(altura)){
        return true;
    }
}
function validarPeso (peso) {
    if (peso > 0 && peso < 300) {
        return true;
    } else {
        return false;
    }
}
function validarAltura (altura) {
    if (altura > 0 && altura < 3) {
        return true;
    } else {
        return false;
    }
}

