btnEnviar = document.querySelector('.btnEnviar');
btnEnviar.addEventListener('click', form);

//Coleta as informações do formulário
function form (event) {
    event.preventDefault();
    var formulario = document.querySelector('#form-adiciona');
    var tabelaPacientes = document.querySelector('#tabela-pacientes');

    var paciente = coletarDadosPaciente(formulario); // Desmembra o objeto Paciente e coleta todos os values do formulário

    var pacienteTr = montaTr(paciente); //Monta o tr com os dados do paciente

    if (validarDados(paciente.peso, paciente.altura)) { // Conferir se os dados são válidos
    console.log('teste');
    return;
    }

    tabelaPacientes.appendChild(pacienteTr); //adiciona o pacienteTr como filho da tabela de pacientes


}

function coletarDadosPaciente(formulario) {

    var paciente = {
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        nome: formulario.nome.value,
        imc: calculaImc(peso.value, altura.value)
    }
    return paciente;
}

function montaTr (paciente) {

    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    //Adicionando os filhos do PacienteTr
    pacienteTr.appendChild (montaTd (paciente.nome, 'info-nome'));
    pacienteTr.appendChild (montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild (montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild (montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild (montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd (dado, classe) {
    var td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}