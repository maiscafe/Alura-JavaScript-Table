btnEnviar = document.querySelector('.btnEnviar');
btnEnviar.addEventListener('click', form);

function form (event) {
    event.preventDefault();
    var formulario = document.querySelector('#form-adiciona');
    var tabelaPacientes = document.querySelector('#tabela-pacientes');

    var paciente = coletarDadosPaciente(formulario);
    console.log(paciente);

    var pacienteTr = document.createElement('tr');
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');


    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = calculaImc(paciente.peso, paciente.altura);

    pacienteTr.appendChild (nomeTd);
    pacienteTr.appendChild (pesoTd);
    pacienteTr.appendChild (alturaTd);
    pacienteTr.appendChild (gorduraTd);
    pacienteTr.appendChild (imcTd);
  
    tabelaPacientes.appendChild(pacienteTr);
}

function coletarDadosPaciente(formulario) {

    var paciente = {
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        nome: formulario.nome.value
    }

    return paciente;
}