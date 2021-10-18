const Buttons = {
    somaButton(){
        //Ativando classe active na soma
        document.querySelector('.soma').classList.add('active')
        document.querySelector('.home').classList.add('soma-body')

        //Desativando nos outros
        document.querySelector('.subtracao').classList.remove('active')
        document.querySelector('.multiplicacao').classList.remove('active')
        document.querySelector('.divisao').classList.remove('active')

        //Mudando cor do body
        document.querySelector('.home').classList.remove('subtracao-body')
        document.querySelector('.home').classList.remove('multiplicacao-body')
        document.querySelector('.home').classList.remove('divisao-body')

        //Ativar botão
        if (!document.querySelector('.butao-resultado').classList.contains('active')) {
            document.querySelector('.butao-resultado').classList.add('active')
        }
    },
    subtracaoButton(){
        //Ativando classe active na subtração
        document.querySelector('.subtracao').classList.add('active')
        document.querySelector('.home').classList.add('subtracao-body')

        //Desativando nos outros
        document.querySelector('.soma').classList.remove('active')
        document.querySelector('.multiplicacao').classList.remove('active')
        document.querySelector('.divisao').classList.remove('active')

        //Mudando cor do body
        document.querySelector('.home').classList.remove('soma-body')
        document.querySelector('.home').classList.remove('multiplicacao-body')
        document.querySelector('.home').classList.remove('divisao-body')

        //Ativar botão
        if (!document.querySelector('.butao-resultado').classList.contains('active')) {
            document.querySelector('.butao-resultado').classList.add('active')
        }
    },
    multiplicacaoButton(){
        //Ativando classe active na multiplicação
        document.querySelector('.multiplicacao').classList.add('active')
        document.querySelector('.home').classList.add('multiplicacao-body')

        //Desativando nos outros
        document.querySelector('.soma').classList.remove('active')
        document.querySelector('.subtracao').classList.remove('active')
        document.querySelector('.divisao').classList.remove('active')

        //Mudando cor do body
        document.querySelector('.home').classList.remove('soma-body')
        document.querySelector('.home').classList.remove('subtracao-body')
        document.querySelector('.home').classList.remove('divisao-body')

        //Ativar botão
        if (!document.querySelector('.butao-resultado').classList.contains('active')) {
            document.querySelector('.butao-resultado').classList.add('active')
        }
    },
    divisaoButton(){
        //Ativando classe active na divisão
        document.querySelector('.divisao').classList.add('active')
        document.querySelector('.home').classList.add('divisao-body')

        //Desativando nos outros
        document.querySelector('.soma').classList.remove('active')
        document.querySelector('.subtracao').classList.remove('active')
        document.querySelector('.multiplicacao').classList.remove('active')

        //Mudando cor do body
        document.querySelector('.home').classList.remove('subtracao-body')
        document.querySelector('.home').classList.remove('multiplicacao-body')
        document.querySelector('.home').classList.remove('soma-body')

        //Ativar botão
        if (!document.querySelector('.butao-resultado').classList.contains('active')) {
            document.querySelector('.butao-resultado').classList.add('active')
        }
    },
}

const Resultado = {
    addValores() {
        let numeros = [document.getElementById('number1').value, document.getElementById('number2').value]

        return numeros
    },

    validacao(valores){
        if (valores[0] === '' || valores[1] === '') {
            window.alert("Por favor, informe os dois valores a serem calculados")
            return false
        } else {return true}
    },

    validarOperacao(valores){
        if (document.querySelector('.soma').classList.contains('active')) {
            window.location.href = `http://localhost:3000/soma/${valores[0]}/${valores[1]}`
        } else if (document.querySelector('.subtracao').classList.contains('active')) {
            window.location.href = `http://localhost:3000/subtracao/${valores[0]}/${valores[1]}`
        } else if (document.querySelector('.multiplicacao').classList.contains('active')) {
            window.location.href = `http://localhost:3000/multiplicacao/${valores[0]}/${valores[1]}`
        } else if (document.querySelector('.divisao').classList.contains('active')) {
            window.location.href = `http://localhost:3000/divisao/${valores[0]}/${valores[1]}`
        }
    },

    resultado() {
        const valores = Resultado.addValores()

        //verificar se tudo foi preenchido
        const validado = Resultado.validacao(valores)
        
        //verificar e realizar operação
        if (validado) {Resultado.validarOperacao(valores)}
    }
}