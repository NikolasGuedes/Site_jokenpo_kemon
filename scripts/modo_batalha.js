const botao_pedra = document.getElementById('opcao_pedra')
const botao_papel = document.getElementById('opcao_papel')
const botao_tesoura = document.getElementById('opcao_tesoura')

const sessao_info_jogada = document.getElementById('sessao_info_jogada')

const contador_vitorias_player = document.getElementById('contador_vitorias_player')
const contador_vitorias_cpu = document.getElementById('contador_vitorias_cpu')

var total_vitorias_player = 0
var total_vitorias_cpu = 0
var total_jogadas = 0

botao_pedra.addEventListener("click", botaoPedraAcionado)
botao_papel.addEventListener("click", botaoPapelAcionado)
botao_tesoura.addEventListener("click", botaoTesouraAcionado)

const menu_score = document.getElementById('menu_score')



function botaoPedraAcionado() {

    console.log("selecionou pedra")

    opcao_jogador = "Pedra"

    botao_pedra.classList.add('desativa')
    botao_papel.classList.add('desativa')
    botao_tesoura.classList.add('desativa')

    sessao_info_jogada.innerHTML =

        `
    <div class="infos_jogada_aguarde" id="sessao_info_jogada">

        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola_aguarde">
        <p class="texto__titulo--jogada">Aguarde...</p>

    </div>
    
    `

    setTimeout(chamaResultadoBatalha, 1500);

}

function botaoPapelAcionado() {

    console.log("selecionou papel")

    opcao_jogador = "Papel"

    botao_pedra.classList.add('desativa')
    botao_papel.classList.add('desativa')
    botao_tesoura.classList.add('desativa')

    sessao_info_jogada.innerHTML =

        `
    <div class="infos_jogada_aguarde" id="sessao_info_jogada">

        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola_aguarde">
        <p class="texto__titulo--jogada">Aguarde...</p>

    </div>
    
    `

    setTimeout(chamaResultadoBatalha, 1500);

}

function botaoTesouraAcionado() {

    console.log("selecionou tesoura")

    opcao_jogador = "Tesoura"

    botao_pedra.classList.add('desativa')
    botao_papel.classList.add('desativa')
    botao_tesoura.classList.add('desativa')

    sessao_info_jogada.innerHTML =

        `
    <div class="infos_jogada_aguarde" id="sessao_info_jogada">

        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola_aguarde">
        <p class="texto__titulo--jogada">Aguarde...</p>

    </div>
    
    `

    setTimeout(chamaResultadoBatalha, 1500);

}

function SorteiaOpcaoCpu() {

    valorAleatorio = parseInt(Math.random() * 3)

    if(valorAleatorio === 0){

        opcao_cpu = "Pedra"

    }

    if(valorAleatorio === 1){

        opcao_cpu = "Papel"

    }

    if(valorAleatorio === 2){

        opcao_cpu = "Tesoura"

    }

}

function chamaResultadoBatalha() {

    console.log("Mostra Opcao Escolhida")

    SorteiaOpcaoCpu()

    sessao_info_jogada.innerHTML =

        ` 
    <div class="infos_jogada_resultado_cima">

        <p class="texto__titulo--jogada">resultado</p>
        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola">

    </div>

    <div class="infos_jogada_resultado_divisao">

        <div class="infos_jogada_resultado" id="jogada_player">

            <p class="texto_jogada">${opcao_jogador}</p>

            <img src="./imgs/Icone_${opcao_jogador}.png" alt="" class="tamanho_icone_opcao_batalha_player">

        </div>

        <img src="./imgs/divisao_resultado.png" alt="Divisao Resultado" class="tamanho__imagem--divisao_resultado">

        <div class="infos_jogada_resultado" id="jogada_npc">

            <p class="texto_jogada">${opcao_cpu}</p>

            <img src="./imgs/Icone_${opcao_cpu}.png" alt="" class="tamanho_icone_opcao_batalha_cpu">

        </div>

    </div>
    `

    setTimeout(MonstraResultadoBatalha, 2000);

}

function MonstraResultadoBatalha() {

    total_jogadas++

    console.log("Avalia Resultado")

    if (opcao_jogador === opcao_cpu) {

        EmpatouRodada()

    } else if (opcao_jogador === "Pedra" && opcao_cpu === "Papel") {

        PerdeuRodada()

    } else if (opcao_jogador === "Pedra" && opcao_cpu === "Tesoura") {

        VenceuRodada()

    } else if (opcao_jogador === "Papel" && opcao_cpu === "Pedra") {

        VenceuRodada()

    } else if (opcao_jogador === "Papel" && opcao_cpu === "Tesoura") {

        PerdeuRodada()

    } else if (opcao_jogador === "Tesoura" && opcao_cpu === "Pedra") {

        PerdeuRodada()

    } else if (opcao_jogador === "Tesoura" && opcao_cpu === "Papel") {

        VenceuRodada()

    }


    if(total_vitorias_player === 3 || total_vitorias_cpu === 3){

        setTimeout(chamaTransicaoScore, 2500)
        setTimeout(geraScore, 2500)

        setTimeout(chamaModal,7000)

    }else{

        setTimeout(RetornaMenuBatalha, 2000)

    }

}

function RetornaMenuBatalha() {

    console.log("Retorna Opcoes")

    opcao_jogador == "a definir"

    botao_pedra.classList.remove('desativa')
    botao_papel.classList.remove('desativa')
    botao_tesoura.classList.remove('desativa')


    sessao_info_jogada.innerHTML =

        `
    <div class="infos_jogada">

        <p class="texto__titulo--jogada">Escolha sua ação</p>
        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola">

    </div>

    `

}


function EmpatouRodada() {

    sessao_info_jogada.innerHTML =

        ` 
    <div class="infos_jogada_resultado_cima">

        <p class="texto__titulo--jogada">resultado</p>
        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola">

    </div>

    <div class="infos_jogada_resultado_divisao">

        <div class="infos_jogada_resultado" id="jogada_player">

            <p class="texto_jogada-resultado texto_fundo_amarelo">empate</p>

        </div>

        <img src="./imgs/divisao_resultado.png" alt="Divisao Resultado" class="tamanho__imagem--divisao_resultado">

        <div class="infos_jogada_resultado" id="jogada_npc">

            <p class="texto_jogada-resultado texto_fundo_amarelo">empate</p>

        </div>

    </div>
    `

}

function VenceuRodada() {

    total_vitorias_player++ 

    sessao_info_jogada.innerHTML =

        ` 
    <div class="infos_jogada_resultado_cima">

        <p class="texto__titulo--jogada">resultado</p>
        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola">

    </div>

    <div class="infos_jogada_resultado_divisao">

        <div class="infos_jogada_resultado" id="jogada_player">

            <p class="texto_jogada-resultado texto_fundo_verde">vencedor</p>

        </div>

        <img src="./imgs/divisao_resultado.png" alt="Divisao Resultado" class="tamanho__imagem--divisao_resultado">

        <div class="infos_jogada_resultado" id="jogada_npc">

            <p class="texto_jogada-resultado texto_fundo_vermelho">perdedor</p>

        </div>

    </div>
    `

    contador_vitorias_player.innerHTML = ` ${total_vitorias_player} / 3 `

}

function PerdeuRodada() {

    total_vitorias_cpu++ 

    sessao_info_jogada.innerHTML =

        ` 
    <div class="infos_jogada_resultado_cima">

        <p class="texto__titulo--jogada">resultado</p>
        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola">

    </div>

    <div class="infos_jogada_resultado_divisao">

        <div class="infos_jogada_resultado" id="jogada_player">

            <p class="texto_jogada-resultado texto_fundo_vermelho">perdedor</p>

        </div>

        <img src="./imgs/divisao_resultado.png" alt="Divisao Resultado" class="tamanho__imagem--divisao_resultado">

        <div class="infos_jogada_resultado" id="jogada_npc">

            <p class="texto_jogada-resultado texto_fundo_verde">vencedor</p>

        </div>

    </div>
    `

    contador_vitorias_cpu.innerHTML = ` ${total_vitorias_cpu} / 3 `

}


function chamaTransicaoScore() {

    console.log("Acabou Partida")

    transicao.classList.remove('desativa')
    transicao.classList.add('ativa')

    setTimeout(chamaMenuScore, 1500);
    setTimeout(resetaTransicao, 3000);

}

function chamaMenuScore() {

    console.log("As informacoes foram substituidas em 1.5s")

    
    modo_batalha.classList.add('desativa')
    menu_score.classList.add('ativa')

}