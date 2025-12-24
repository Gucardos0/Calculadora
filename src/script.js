const teclasNumericas = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRess = document.querySelector('.ress')
const display = document.getElementById("display")
const teclaLimpar = document.getElementById("tlimpar")
const teclaIgual = document.getElementById("tigual")
const teclaCopy = document.getElementById("tcopy")

let sinal = false
let decimal = false

const TirarZero = ()=>{
    if(display.innerHTML == '0'){
        display.innerHTML = ''
    }
}
const addNumero = (num)=>{
    sinal = false
    if (num === ',' && decimal){
        return
    } 

    if (num === ',') {
        decimal = true
    }
    if(display.innerHTML == '0' && num == ','){
        TirarZero()
        display.innerHTML = '0,'
        decimal = true
    
    }else{
        TirarZero()
    display.innerHTML += num
    }
    
}
const addOperador = (op)=>{
    decimal = false
    if(sinal){
        return
    }
    if(op == 'x'){
        display.innerHTML +='*'
    }else{
        
    TirarZero()
    display.innerHTML += op
    }
    decimal = false
    sinal = true

}

teclasNumericas.forEach(e=>{
    e.addEventListener('click',(evt)=>{
        addNumero(evt.target.innerHTML)
    })
})
teclasOp.forEach(e=>{
    e.addEventListener("click",(evt)=>{
        addOperador(evt.target.innerHTML)
    })
})


teclaLimpar.addEventListener('click',()=>{
    display.innerHTML = '0'
})
teclaCopy.addEventListener('click',()=>{
    navigator.clipboard.writeText(display.innerHTML)
})

teclaIgual.addEventListener('click',()=>{
    
    sinal = false
    decimal =false
    const ress = eval(display.innerHTML)
    display.innerHTML = ress

})
