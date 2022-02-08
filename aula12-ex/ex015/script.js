function verificar(){
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.getElementById('res');
  if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO]');
  } else{
    
    var fsex = document.getElementsByName('txtsex');
    var idade = ano - Number(fano.value);
    res.innerHTML = `idade calculada: ${idade}`;
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if(fsex[0].checked){
      genero = 'Homem';
  
    } else if (fsex[1].checked){
      genero = 'Mulher';
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
  }
}