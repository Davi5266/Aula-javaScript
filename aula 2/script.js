var x = 5; // Cria uma variavel e determina seu valor
var y = 15;
const resultado = document.getElementById("resultado");

function mostrarValor(){
    resultado.innerHTML = "Os valores são" + x + "e" + y;
}

function mudarValor(){      //Cria uma função para as variaveis
    x = 18;
    y = 20;
    mostrarValor();
}

 //function mostrarValor(){        // Finalizar comando com ";" sempre que ter um comando.
    //window.alert("Os valores das variáveis são" + x + "e" +y);      //mostra uma caixa de diálogo de aviso com o conteúdo opcionalmente especificado 
    //var total = x + y;
//}

function aumentaCinco(){        // Uma função JavaScript é definida com a palavra- functionchave, seguida por um name , seguido por parênteses () .
    x = x + 5;  // x += 5; outra forma de montar a mesma equação
    y = y + 5;
    mostrarValor();

}