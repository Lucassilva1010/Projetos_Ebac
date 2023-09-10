const form = document.getElementById("form-agenda");
const imgAmigo = '<img src="Icones/amigo.png" alt="Emotion Amigos"/>';
const imgfamilia = '<img src="Icones/familia.png"" alt="Emotion Triste"/>';
const imgEmpresa = '<img src="Icones/empresa.png"" alt="Emotion Triste"/>';
const imgDesconhecido = '<img src="Icones/desconhecido.png"" alt="Emotion Triste"/>';
const nomesContato = [];
const numeroContato = [];
const emailContato =[];
const aproximacaoContato =[];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

   adicinaLinha();
   atualizaTabela();
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
       

        //Adicionando novas Linhas
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputEmailContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${inputAproximacao.value}</td>`;
        // linha += `<td>${inputAproximacao.value >= 'Familia' ? imgfamilia : imgEmpresa}</td>`;

        if(inputAproximacao.value == 'família' || inputAproximacao.value == 'Família' || inputAproximacao.value == 'Familia' || inputAproximacao.value == 'familia'){
            linha += `<td>${inputAproximacao.value = imgfamilia}</td>`;

        }else if(inputAproximacao.value == 'amigo'|| inputAproximacao.value == 'Amigo'){
            linha += `<td>${inputAproximacao.value = imgAmigo}</td>`;
        }else if(inputAproximacao.value == 'empresa' || inputAproximacao.value == 'Empresa' ){
            linha += `<td>${inputAproximacao.value = imgEmpresa}</td>`;
        }else{
            linha += `<td>${inputAproximacao.value = imgDesconhecido}</td>`;
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

//Chamando a tabela  
function atualizaTabela(){
    const corpoTabela  = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



