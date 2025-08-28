function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano || fano.value < 0){
        alert('verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'pequenomacho.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'machojovem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'machoadulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'machoidoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'pequenafemea.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'femeajovem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'femeaadulta.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'femeaidosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}