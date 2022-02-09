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
      if(idade >= 0 && idade <= 12){
        //criança
        img.setAttribute('src', 'imagens/menino.png');
      } else if(idade < 21){
        //jovem
        img.setAttribute('src', 'imagens/ojovem.png');
      } else if(idade < 50){
        //adulto
        img.setAttribute('src', 'imagens/adulto.png');
      } else{
        //idoso
        img.setAttribute('src', 'imagens/idoso.png');
      }


    } else if (fsex[1].checked){
      genero = 'Mulher';
      if(idade >= 0 && idade <= 12){
        //criança
        img.setAttribute('src', 'imagens/menina.png');
      } else if(idade < 21){
        //jovem
        img.setAttribute('src', 'imagens/ajovem.png');
      } else if(idade < 50){
        //adulto
        img.setAttribute('src', 'imagens/adulta.png');
      } else{
        //idoso
        img.setAttribute('src', 'imagens/idosa.png');
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}