var sair = false;       // A var sair ganhou um valor falso"false"
var digitado;           // Vai receber o valor digitado pelo usuario
const nomes = [];       // Vai receber os nomes na var nomes

while( sair == false ){     //Esse comando vai ser repitido até que a var sair seja verdadeira
    digitado = window.prompt("Digite um nome ou s para sair.");     // Esse comando vai receber os comandos da var digitado
    if( digitado == "s" ){      // O comando if vai ser repitido até que a var sair receba true
        sair = true;        // Se a var sair for verdadeira o comando finaliza
    }else{      // Se as condições acima não forem verdadeira o comando abaixo vai se repitir
        nomes.push( digitado );     // O comando push vai armazenar os comandos da var digitado na var nomes
    }
}
document.write( "Os nomes digitados foram: " + nomes );     //  Vai documentar ao usuario os comandos armazenados na var nomes