var numberToFind = 0;
var attemps = 0;

function refresh(){
          //gera um numero aleatorio 
           attemps = 0 
          numberToFind = parseInt (Math.random() * 100 ); 

          console.log( numberToFind)

}

   function verifyNumber(){

       var bet = document.getElementById('bet').value;

       if(bet > 100 || bet < 1)
       {
        alert('Aposta inválida');
        return;
       }

       if(bet > numberToFind)
       {
        attemps++;
        alert ('O número para ser encontrado é MENOR');
       }
          else if (bet < numberToFind)
       {

        attemps++;
        alert ('O número para ser encontrado é MAIOR');
       }
       else
       {
        alert('Parabéns voce acertou!! Com '+attemps+' erros');
        refresh();
       }

       
   }


refresh ();