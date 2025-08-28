var idade = 67
console.log(`voce tem ${idade}`)
if(idade < 16){
    console.log(`nao vota`)
}else if(idade < 18){
    console.log('voto opcional')
}if(idade > 18 && idade < 67){
    console.log('voto obrigatorio')
}else if(idade >= 67){
    console.log('voto opcional')
}