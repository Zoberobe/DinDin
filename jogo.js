    var altura = 0
    var largura = 0
    var vidas = 1
    var tempo = 15
    var dinheiroTempo = 1500

    var nivel = window.location.search
    nivel = nivel.replace('?', '')


    if(nivel === 'normal') {
        //1500
        criaMosquitoTempo = 1500
    } else if(nivel === 'dificil') {
        //1000
        criaMosquitoTempo = 1000
    }


function TamanhoAtual() {
     altura = window.innerHeight
     largura = window.innerWidth
    console.log (altura, largura,Mudanca())
}

    TamanhoAtual()

    var cronometro = setInterval(function(){
        tempo -= 1

        if(tempo<0){
            clearInterval(cronometro)
            clearInterval(iniciodojogo)
            window.location.href = 'vitoria.html'


        }else{
            document.getElementById('cronometro').innerHTML = tempo
        }

    }, 1000)

function NascimentoDinDin() {

    if (document.getElementById('dinheiro')) {
        document.getElementById('dinheiro').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        
        }else{
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

        vidas++
        }

    }

    var posiTyon = Math.floor(Math.random() * altura) - 90
    var posiTxon = Math.floor(Math.random() * largura) - 90
    
    posiTxon = posiTxon < 0 ? 0 : posiTxon
    posiTyon = posiTyon < 0 ? 0 : posiTyon

     
    console.log(posiTyon, posiTxon)
    var dinheiro = document.createElement('img')
    dinheiro.src = 'imagens/dinheiro.png'
    dinheiro.className = Mudanca() + ' ' + Gira()
    dinheiro.style.left = posiTxon + 'px'
    dinheiro.style.top = posiTyon + 'px'
    dinheiro.style.position = 'absolute'
    dinheiro.id = 'dinheiro'
    dinheiro.style.cursor = "pointer"
    dinheiro.onclick = function(){
        this.remove()

    }

    document.body.appendChild(dinheiro)
}


function Mudanca(){
    var tamanho = Math.floor(Math.random() * 3)

    switch(tamanho){
        case 0:
            return 'dinheiro'
        
        case 1:
            return 'dinheiro1'

        case 2:
            return 'dinheiro2'
    }
}

function Gira(){
    var tamanho = Math.floor(Math.random() * 2)

    switch(tamanho){
        case 0:
            return 'esquerda'
        
        case 1:
            return 'direita'

    }
}