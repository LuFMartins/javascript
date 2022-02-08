function carregar(){
  var msg = document.querySelector('div#msg');
  var img = document.querySelector('img#imagem');
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas`;
  if(hora >= 0 && hora < 12){
    img.src = "imagens/manha.png";
    window.alert('Bom Dia!')
    document.body.style.background = 'rgb(213, 196, 48)';
  } else if(hora >= 12 && hora < 18){
    img.src = "imagens/tarde.png";
    window.alert('Boa Tarde!')
    document.body.style.background = 'rgb(172, 99, 27)';
  } else {
    img.src = "imagens/noite.png";
    document.body.style.background = 'rgb(27, 43, 90)';
    window.alert('Boa Noite!');
  }
}