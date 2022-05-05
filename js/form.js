btnEnviar = document.querySelector('.btnEnviar');
btnEnviar.addEventListener('click', form);

//Coleta as informações do formulário
function form (event) {
    event.preventDefault();
    var formulario = document.querySelector('#form-adiciona');
    var tabelaPacientes = document.querySelector('#tabela-pacientes');

    var paciente = coletarDadosPaciente(formulario); // Desmembra o objeto Paciente e coleta todos os values do formulário

    var pacienteTr = montaTr(paciente); //Monta o tr com os dados do paciente

    var erros = validaPaciente(paciente) //Pegando o retorno da validação e conferir se os dados são válidos

    if (erros.length > 0) {
        limpaErros();
        exibeErros(erros);
        return ;
    }

    tabelaPacientes.appendChild(pacienteTr); //adiciona o pacienteTr como filho da tabela de pacientes

    limpaFormulario();
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

function validaPaciente (paciente) {

    var erros = [];
    if (!validarAltura(paciente.altura) || isNaN(paciente.altura)) {
        erros.push('Altura inválida');

    } if (!validarPeso(paciente.peso || isNaN(paciente.peso))) {
        erros.push('Peso inválido');

    } if (paciente.nome.length <= 0 || !isNaN(paciente.nome)) {
        erros.push('Nome inválido');
    }
   return erros
}

function exibeErros (erro) {
    var ul = document.querySelector('#mensagens-erro');
    erro.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li)
    });
}
function limpaErros() {
    document.querySelector('#mensagens-erro').innerHTML = '';
}
function limpaFormulario() {
    var formulario = document.querySelector('#form-adiciona');
    limpaErros();
    formulario.reset();
}