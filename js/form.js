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
    imcTd.textContent = calculaImc(peso, altura);

    pacienteTr.appendChild (nomeTd);
    pacienteTr.appendChild (pesoTd);
    pacienteTr.appendChild (alturaTd);
    pacienteTr.appendChild (gorduraTd);
    pacienteTr.appendChild (imcTd);
  
    tabelaPacientes.appendChild(pacienteTr);

}
