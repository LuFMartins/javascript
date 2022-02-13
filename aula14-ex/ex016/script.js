function contar(){
  var começo = document.querySelector('input#nmb1');
  var final = document.querySelector('input#nmb2');
  var passo = document.querySelector('input#nmb3');
  var res = document.querySelector('div.res');

  if(começo.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
    alert('[ERRO] - FALTAM DADOS!');
  } else {
    res.innerHTML = 'Contando: '
    var i = Number(começo.value);
    var f = Number(final.value);
    var p = Number(passo.value);

    for(var c = i; i <= f; i += p) {
      res.innerHTML += `${i} < `;
    }
  }
}
