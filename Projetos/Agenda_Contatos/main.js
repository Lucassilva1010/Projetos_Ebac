const form = document.getElementById("form-agenda");
const imgAmigo = '<img src="Icones/amigo.png" alt="Emotion Amigos"/>';
const imgfamilia = '<img src="Icones/familia.png"" alt="Emotion Triste"/>';
const imgEmpresa = '<img src="Icones/empresa.png"" alt="Emotion Triste"/>';
const nomesContato = [];
const numeroContato = [];
const emailContato =[];
const aproximacaoContato =[];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
//const valorMedia = parseFloat(prompt('Qual  valor mínimo da Média? '));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

   adicinaLinha();
   atualizaTabela();
//    atualizaMediaFinal();

});

function adicinaLinha(){
    //Buscando as informações nos Fomularios
    const inputNomeContato = document.getElementById('nome-Contato');
    const inputEmailContato = document.getElementById('email-Contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    const inputAproximacao = document.getElementById('aproximacao-contato');
   
    if(nomesContato.includes(inputNomeContato.value) && numeroContato.includes(inputNumeroContato.value) ){
        alert(`Essa pessoa ${inputNomeContato.value}, já é cadastrada na Agenda`)
    }else{
        //Criando um arrai de notas e Atividades
        nomesContato.push(inputNomeContato.value);    
        emailContato.push(inputEmailContato.value);    
        numeroContato.push(parseInt(inputNumeroContato.value)); 
        aproximacaoContato.push(inputAproximacao.value);    
         console.log("olá")

        //Adicionando novas Linhas
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputEmailContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${inputAproximacao.value}</td>`;
        // linha += `<td>${inputAproximacao.value >= 'Familia' ? imgfamilia : imgEmpresa}</td>`;

        if(inputAproximacao.value == 'Familia'){
            linha += `<td>${inputAproximacao.value = imgfamilia}</td>`;

        }else if(inputAproximacao.value == 'Amigo'){
            linha += `<td>${inputAproximacao.value = imgAmigo}</td>`;
        }else{
            linha += `<td>${inputAproximacao.value = imgEmpresa}</td>`;
        }

        linha += `</tr>`;
        
        linhas += linha;// atualizando linhas e Acrescentando uma nova linha
           //reseta os valores dos inputs
    }  
    
    inputNomeContato.value = '';
    inputEmailContato.value = '';
    inputNumeroContato.value = '';
    inputAproximacao.value = '';

}

function atualizaTabela(){
    const corpoTabela  = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

// function atualizaMediaFinal(){
//     const mediaFinal = calculaMedia();
//     document.getElementById('mediaFinal-valor').innerHTML = mediaFinal.toFixed(2);
//     document.getElementById('mediaFinal-resultado').innerHTML = mediaFinal > valorMedia ? spanAprovado: spanReprovado;
    
//     //console.log(atualizaMedia);
// }

function calculaMedia(){
    
    let soma = 0;
    for(i=0; i<notas.length;i++){
        soma += notas[i];
    }
    return soma / notas.length;
}

