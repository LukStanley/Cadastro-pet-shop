export function valida(input){
    const input = input.dataset.tipo

    if (validadores[tiposDeInput]){
        validadores[tiposDeInput](input)
    }

    if (input.validity.valid){
            input.parentElement.classList.remove('input-container--invalido')
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input)
}

function validaDataNascimento(input){
    const dataRecebida = new Date(input.value);
    let mensagem = ''

   if(!maiorQue18(dataRecebida)){
        mensagem = 'Para se cadastrar você deve ser maior de idade';

   };

   input.setCustomValidity(mensagem)
}

function maiorQue18(data){

    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataMais18 <= dataAtual;

}
console.log("hello")