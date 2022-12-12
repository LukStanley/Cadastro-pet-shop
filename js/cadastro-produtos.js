const inputs = document.querySelectorAll('input')

inputs.forEach(input =>{
if(input.dataset.tipo === 'preco'){
    SimpleMaskMoney.setMask(input, {
        prefix: 'R$ ',
        fixed: true,
        fractionDigits: 2,
        decimalSeparator: ',',
        thousandsSeparator: '.',
        cursor: 'end',
    })
}})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
]
 
const mensagensDeErro ={
    nome:{
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    preco:{
        valueMissing: 'O campo de preço não pode estar vazio.'
    },
}



