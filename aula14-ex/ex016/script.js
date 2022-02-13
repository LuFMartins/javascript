function contar(){
  var começo = document.querySelector('input#nmb1');
  var final = document.querySelector('input#nmb2');
  var passo = document.querySelector('input#nmb3');
  var res = document.querySelector('div.res');

  if(começo.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
    alert('[ERRO] - FALTAM DADOS!');
    res.innerHTML = 'POR FAVOR, PREENCHA TODAS AS CAIXAS!'
    
  } else {
    res.innerHTML = 'Contando: <br>'
    var i = Number(começo.value);
    var f = Number(final.value);
    var p = Number(passo.value);

    if(p == 0){
      alert('Passo 0 não existe, consideramos o passo 1');
      p = 1;
    }

    if( i < f ){
      for(i; i <= f; i += p) {
        res.innerHTML += `${i} - `;
      }
    } else{
      for(i; i > f; i-=p){
        res.innerHTML += `${i} - `;
      }
    }
    
    res.innerHTML += '*';
  }
}
