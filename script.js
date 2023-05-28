const form = document.getElementById('form')
form.addEventListener('submit', submit)

const inputValue = document.getElementById('value-real')
const selectedCurrency = document.getElementById('currency')
const result = document.getElementById('result')
let valorConvertido = 0

function submit(e){
    e.preventDefault()

    if(!inputValue.value || inputValue.value <= 0){
        alert('Informe um valor correto!')
        return
    } else if(!selectedCurrency.value){
        alert('Escolha uma moeda!')
        return
    }

    converter()

}

function converter(){
    if(selectedCurrency.value === 'eur'){
        valorConvertido = inputValue.value / 5.36
        result.innerHTML = formatarValor('pt-BR', 'EUR')

        animarResultado()
    } else if(selectedCurrency.value === 'dol'){
        valorConvertido = inputValue.value / 4.99
        result.innerHTML = formatarValor('pt-BR', 'USD')

        animarResultado()
    }

    inputValue.value = ''
    selectedCurrency.value = ''
}

function formatarValor(local, currency){
    const value = valorConvertido.toLocaleString(`${local}`, {style: 'currency', currency: `${currency}` })
    return `<span>🤑</span> ${value} <span>🤑</span>`
}

function animarResultado(){
    return result.animate([
    { transform: 'translateY(-150px)'},
    { transform: 'translateX(0px)'},
    ], {duration: 600})
}
