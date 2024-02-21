let numeroLimite = 10;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function verificarChute () {
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1','Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`
        exibirTextoNaTela ('p',mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute('disabled');

    } else {
        
        limparCampo ();

        if (chute > numeroSecreto ) {
            exibirTextoNaTela ('p','O Numero Secreto é Menor');
            
        } else {
            exibirTextoNaTela ('p','O Numero Secreto é Maior');
        
        }
    } tentativas++
    
     limparCampo ();
}; 
   
 
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}



function exibirTextoNaTela (tag,texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})};

function exibirMensagemInicial () {
    exibirTextoNaTela ('h1','Jogo do Numero Secreto');
    exibirTextoNaTela ('p','Escolha um Numero de 1 a 10')
    }
exibirMensagemInicial ()

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random ()* numeroLimite + 1 );
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
if (quantidadeDeElementosNaLista == 10){

listaDeNumerosSorteados = []

}

 if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio ();
 } 
 else {

    listaDeNumerosSorteados.push(numeroEscolhido);
  console.log (listaDeNumerosSorteados)
    return numeroEscolhido;

 }
      
};


let mensagemTentativas = `Você descobriu o número secreto com 5 tentativas!`;


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo;
    tentativas =1;
    exibirMensagemInicial ()
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

