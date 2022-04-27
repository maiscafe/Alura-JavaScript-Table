
btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click',imc)
btnEnviar = document.querySelector('.btnEnviar');
btnEnviar.addEventListener('click', form);


function form (event) {
    event.preventDefault();
    var formulario = document.querySelector('#form-adiciona');
    var  tabelaPacientes = document.querySelector('#tabela-pacientes');
    var peso = formulario.peso.value
    var altura = formulario.altura.value
    var gordura = formulario.gordura.value
    var nome = formulario.nome.value



    var pacienteTr = document.createElement('tr');
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');


    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild (nomeTd);
    pacienteTr.appendChild (pesoTd);
    pacienteTr.appendChild (alturaTd);
    pacienteTr.appendChild (gorduraTd);
    pacienteTr.appendChild (imcTd);
  
    tabelaPacientes.appendChild(pacienteTr);
}


function imc () {
    var paciente = document.querySelectorAll('.paciente');

    for (var i = 0; i <= (paciente.length ); i++) {
        console.log(paciente[i]);

        var tdPeso = paciente[i].querySelector('.info-peso');
        var peso = tdPeso.textContent;
    
        var tdAltura = paciente[i].querySelector('.info-altura');
        var altura = tdAltura.textContent;
    
        var imc = paciente[i].querySelector('.info-imc')
        imc.textContent = (peso / (altura * altura)).toFixed(2);
        
        if (peso <= 0 || peso.length >3) {
            imc.textContent = 'Peso Inválido';
            paciente[i].classList.add('paciente-invalido');
        } else if (altura <= 0 || altura >=3) {
            imc.textContent = 'Altura Inválida';
            paciente.classList.add('paciente-invalido');
        }
    }

}

