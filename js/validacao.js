export function valida(input){
    const input = input.dataset.tipo

    if (validadores[tiposDeInput]){
        validadores[tiposDeInput](input)
    }

    if (input.validity.valid){
            input.parentElement.classList.remove('input-container--invalido')
    }else{
            input.parentElement.classList.add('input-container--invalido')
    }
}

const mensagemDeErro = {
    nome:{
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    senha:{ 
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter 6 a 12 caracteres, pelo menos uma letra maiúscula, um número e não deve conter símbolos'
    },  
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError:  'Você deve ter mais de 18 anos para efetuar o cadastro.'
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