function carregar(){
  var msg = window.document.querySelector('div#msg');
  var foto = window.document.querySelector('div#foto');
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas`;
}