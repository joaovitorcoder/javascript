function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var p = document.getElementById('p')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.jpg'
        p.innerHTML = 'Bom dia!'
        document.body.style.background = '#845A10'
    }else if (hora < 18){
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#4E1F19'
        p.innerHTML = 'Boa tarde!'
    }else{
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#5A4D83'
        p.innerHTML = 'Boa noite!'
    }
}