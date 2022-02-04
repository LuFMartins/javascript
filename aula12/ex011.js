var idade = 59;
if(idade < 16){
  console.log('Não vota');
} else if(idade >= 16 && idade < 18 || idade >= 60){
  console.log('Voto opcional');
}else{
  console.log('Voto obrigatorio');
}