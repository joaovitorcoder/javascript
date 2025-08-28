function calc(){
    let inp = document.getElementById('n')
    let txta = document.getElementById('txt')

    if(inp.value.length == 0){
        alert('por favor digite um numero')
    }else{
        let tab = document.getElementById('seltab')
        let ip = Number(inp.value)
        let c = 0
        let i = 0
        tab.innerHTML = ''
        for(c = 0;c <= 10; c++){
            i = ip*c
            let item = document.createElement('option')
            item.text = `${ip} x ${c} = ${i}`
            tab.appendChild(item)
        }
    }
}