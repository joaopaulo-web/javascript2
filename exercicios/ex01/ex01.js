function clickToAdd() {

    var paragrafoContador = document.getElementById('contador')

    var contadorAtual = parseInt(paragrafoContador.innerText)

    contadorAtual++

    paragrafoContador.innerText = contadorAtual
    
}

function reset() {

    var paragrafoContador = document.getElementById('contador')

    var contadorAtual = parseInt(paragrafoContador.innerText)

    contadorAtual = 0

    paragrafoContador.innerText = contadorAtual

}

// var intervalID = setInterval(clickToStart, 1000)

// function clickToStart(){

//     var paragrafoAutomatico = document.getElementById('contador-automatico')
//     var contadorAutomatico = parseInt(paragrafoAutomatico.innerText)

//     contadorAutomatico = contadorAutomatico + 1 

//     paragrafoAutomatico.innerText = contadorAutomatico

//     if(contadorAutomatico === 999) {
//         clearInterval(intervalID)
//         intervalID = null;
//     }
// }

function resetar() {

    var paragrafoAutomatico = document.getElementById('contador-automatico')

    var contadorAutomatico = parseInt(paragrafoAutomatico.innerText)

    contadorAutomatico = 0

    paragrafoAutomatico.innerText = contadorAutomatico
}

function changeColor(){

    function gerarNumerosELetras() {

        var numeros = Array.from({length: 9}, (_, i) => i + 1); 

        var letras = Array.from({length: 6}, (_, i) => String.fromCharCode(65 + i)); 

        return numeros.concat(letras); 
        
    }

    function embaralharArray(array) {

        for (let i = array.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];

        }

    }

    var resultadoArray = gerarNumerosELetras();

    embaralharArray(resultadoArray);

    var resultadoFinal = resultadoArray.slice(0, 6);

    var resultadoConcatenado = '#' + resultadoFinal.join('');

    var square = document.getElementById('color')
    
    square.style.backgroundColor = resultadoConcatenado

    var button = document.getElementById('add')

    button.addEventListener('click', changeInnerText())

    function changeInnerText() {

        button.innerText = 'Alterar Cor'
        
    }

}

function backToOrigin(){

    var square = document.getElementById('color')

    square.style.backgroundColor = 'transparent'

    var button = document.getElementById('add')

    button.innerText = 'Adicionar Cor'

}

function somar() {
    var valorInput1 = parseFloat(document.getElementById('input1').value)

    var valorInput2 = parseFloat(document.getElementById('input2').value)

    var resultado = valorInput1 + valorInput2

    var alterarP = document.getElementById('resultado')
    
    alterarP.innerText = 'A soma dos valores escolhidos é: ' + resultado
}

function zerarValores(){
    var valorInput1 = document.getElementById('input1')

    var valorInput2 = document.getElementById('input2')

    var alterarP = document.getElementById('resultado')

    valorInput1.value = ''

    valorInput2.value = ''

    alterarP.innerText = ''
    
}

function buttonClick() {
    alert('Botão clicado com sucesso!')
}

function showMessage() {
    var promptName = prompt('Qual o seu nome?')

    var showResult = document.getElementById('resultadoNome')

    showResult.innerText = 'Olá ' + promptName + '. Seja muito bem vindo(a).'

}

function calcMedia() {
    var nomeAluno = prompt('Qual o nome do aluno?')

    var nota1 = parseFloat(prompt('Digite a primeira nota do aluno'))

    var nota2 = parseFloat(prompt('Digite a segunda nota do aluno'))

    var media = parseFloat((nota1 + nota2) / 2)

    var result1 = document.getElementById('result1')
    var result2 = document.getElementById('result2')
    var result3 = document.getElementById('result3')

    result1.innerText = `Calculando a média final de ${nomeAluno}.`

    result2.innerText = `As notas obtidas foram ${nota1} e ${nota2}.`

    result3.innerText = `A média final será ${media}.`
}

function register() {
    var showAction = document.getElementById('getAction')

    var btn1 = document.getElementById('btn1')
    
    btn1.addEventListener('click', showAction.innerText = 'Clicou no primeiro botão')
}

function calcMedia2() {

    var nomeAluno = prompt('Qual o nome do aluno?')

    var nota1 = parseFloat(prompt('Digite a primeira nota do aluno'))

    var nota2 = parseFloat(prompt('Digite a segunda nota do aluno'))

    var media = parseFloat((nota1 + nota2) / 2)

    var result1 = document.getElementById('result1.2')
    var result2 = document.getElementById('result2.2')
    var result3 = document.getElementById('result3.2')
    var result4 = document.getElementById('result4.2')

    result1.innerText = `Calculando a média final de ${nomeAluno}.`

    result2.innerText = `As notas obtidas foram ${nota1} e ${nota2}.`

    result3.innerText = `A média final será ${media}.`

    if ( media < 6 ) {
        result4.innerText = `Estude mais!`
    }else {
        result4.innerText = `Parabéns!`
    }

}

function parOuImpar(){
    
    var numero = parseFloat(prompt('Qual o número deseja descobrir?'))

    var calcNumero = numero % 2

    var paragrafoResult = document.getElementById('resultadoParagrafo')

    
    if (calcNumero === 0) {
        
        var par = ' PAR'

        paragrafoResult.innerText = 'O número ' + numero + ' é ' + par
        
    } else {

        var impar = ' ÍMPAR'

        paragrafoResult.innerText = 'O número ' + numero + ' é' + impar

    }

}

function systemInfos() {

    const date = new Date()

    const weekDay = date.getDay()

    const month = date.getMonth()

    const data = date.getDate()

    const time = date.getTime()

    const fuso = date.getTimezoneOffset()

    console.log(weekDay,month, data, time, fuso)

}

function calcAge() {

    const date = new Date()

    var anoUsuario = parseFloat(prompt('Em que ano você nbasceu?'))

    var anoAtual = parseFloat(date.getFullYear())

    var idadeUsuario = parseFloat(anoAtual - anoUsuario)

    var mostrarResposta = document.getElementById('resultadoIdade')

    mostrarResposta.innerText = `Quem nasceu em ${anoUsuario}, vai completar ${idadeUsuario} anos em ${anoAtual}.`

}

function randomizeNumber() {

    var randomNumber = Math.floor(Math.random() * 101)

    var numberResultado = document.getElementById('numeroResultado')

    numberResultado.innerText = 'Acabei de pensar no número ' + randomNumber + '.'

}

function cleanNumber() {

    var numberResultado = document.getElementById('numeroResultado')

    numberResultado.innerText = ''
}



let numberPC = 0
let jogador = 0

function sortear() {

    let sorteadoPC = Math.floor(Math.random() * 101)
    numberPC = sorteadoPC

}

function jogar() {

    let res = document.querySelector('#secaoResultado')
    
    jogador = Number(window.prompt('Qual o seu palpite?'))

    if (jogador < numberPC) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (jogador > numberPC) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
    } else if (jogador == numberPC) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${numberPC}!</p>`
        document.getElementById('btnToHide').style.visibility = 'hidden'
    }

}

function multiplasAcoes() {

    var paraResult = document.querySelector('#showCalc')
    var mostrarCalculo = document.querySelector('#multiplasResultado')

    var valor1 = parseFloat(prompt('Digite o primeiro número.'))
    var valor2 = parseFloat(prompt('Digite o segundo número.'))

    var escolhaUser = parseFloat(prompt(`Valores informados: ${valor1} e ${valor2}.\n O que vamos fazer?\n [1]Somar\n [2]Subtrair\n [3]Multiplicar\n [4]Dividir`))

    if (escolhaUser == 1) {
        var resultFinal = valor1 + valor2
        
        paraResult.innerHTML = 'Carregando...'
        mostrarCalculo.innerHTML = `${valor1} + ${valor2} = <strong>${resultFinal}</strong>`
    } else if (escolhaUser == 2) {
        var resultFinal = valor1 - valor2

        paraResult.innerHTML = 'Carregando...'
        mostrarCalculo.innerHTML = `${valor1} - ${valor2} = <strong>${resultFinal}</strong>`
    } else if (escolhaUser == 3) {
        var resultFinal = valor1 * valor2

        paraResult.innerHTML = 'Carregando...'
        mostrarCalculo.innerHTML = `${valor1} x ${valor2} = <strong>${resultFinal}</strong>`
    } else if (escolhaUser == 4) {
        var resultFinal = valor1 / valor2

        paraResult.innerHTML = 'Carregando...'
        mostrarCalculo.innerHTML = `${valor1} / ${valor2} = <strong>${resultFinal}</strong>`
    }

}

function contandoAteDez() {

    var paragrafoContador = document.querySelector('#showContagem')
    var contadora = 1

    while (contadora < 11) {
        paragrafoContador.innerHTML += contadora + ', '
        contadora++
    }

}

function contandoAteDezPar() {

    var paragrafoContadorPar = document.querySelector('#showContagemPar')
    var contadoraPar = 0

    while (contadoraPar < 11) {

        var checaPar = contadoraPar % 2

        if(checaPar == 0){
            paragrafoContadorPar.innerHTML += `<strong>${contadoraPar}</strong>, `
            contadoraPar++
        } else {
            paragrafoContadorPar.innerHTML += contadoraPar + ', '
            contadoraPar++  
        }
        
    }
}

function contaForm() {

    document.querySelector('#btn-to-reset').style.visibility = 'visible'

    var escolhaUserForm = parseFloat(document.querySelector('#escolhaForm').value)

    var contadoraForm = 0 

    if(escolhaUserForm <= 0) {

        alert('O valor precisa ser maior que 0. Tente novamente.')
        document.querySelector('#btn-to-reset').style.visibility = 'hidden'

    } else {

        while(contadoraForm <= escolhaUserForm) {

            showContagemForm.innerHTML += contadoraForm + ', '
    
            contadoraForm++
    
        }

    }

}

function resetForm(){

    var escolhaUserForm = document.getElementById('escolhaForm')

    showContagemForm.innerHTML = ' '

    escolhaUserForm.value = ''

    document.querySelector('#btn-to-reset').style.visibility = 'hidden'

}

function hideButtonForm() {

    document.querySelector('#btn-to-reset').style.visibility = 'hidden'

}

function welcome() {

    var userName = prompt('Qual o seu nome?')

    var userAge = prompt(`Olá ${userName}, quantos anos você tem?`)

    alert(`Acabei de conhecer ${userName}, que tem ${userAge} anos de idade!`)

}

function prevAndSuc() {

    var mainNumber = parseFloat(prompt('Digite um número inteiro qualquer'))

    var sucessor = mainNumber + 1

    var antecessor = mainNumber - 1
    
    alert(`Antes do ${mainNumber}, temos o número ${antecessor}.\nDepois do ${mainNumber}, temos o número ${sucessor}.`)

}

function troco() {

    var produto = prompt('Qual o produto você está comprando?')

    var valorProduto = parseFloat(prompt(`Quando custa o ${produto} que você está comprando?`))

    var valorEntregue = parseFloat(prompt(`Quanto você deu para pagar o ${produto}?`))

    var troco = valorEntregue - valorProduto

    alert(`Você comprou ${produto} que custou R$ ${valorProduto}. \nEntregou R$ ${valorEntregue} em dinheiro e vai receber R$ ${troco} de troco.\nVolte Sempre!`)

}