const botao_pedra = document.querySelectorAll('[data-botao-pedra]')
const botao_papel = document.querySelectorAll('[data-botao-papel]')
const botao_tesoura = document.querySelectorAll('[data-botao-tesoura]')

const sessao_info_jogada = document.getElementById('sessao_info_jogada')
const sessao_info_jogada_celular = document.getElementById('sessao_info_jogada_celular')

const contador_vitorias_player = document.querySelectorAll("[data-contador-vitorias-player]")
const contador_vitorias_cpu = document.querySelectorAll('[data-contador-vitorias-cpu]')

var total_vitorias_player = 0
var total_vitorias_cpu = 0
var total_jogadas = 0

botao_pedra.forEach((elemento) => {

    elemento.addEventListener("click", botaoPedraAcionado)

})

botao_papel.forEach((elemento) => {

    elemento.addEventListener("click", botaoPapelAcionado)

})

botao_tesoura.forEach((elemento) => {

    elemento.addEventListener("click", botaoTesouraAcionado)

})



const menu_score = document.getElementById('menu_score')


function botaoPedraAcionado() {

    console.log("selecionou pedra")

    opcao_jogador = "Pedra"

    escondeBotoes()


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

   escondeBotoes()

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

    escondeBotoes()

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

    if (valorAleatorio === 0) {

        opcao_cpu = "Pedra"

    }

    if (valorAleatorio === 1) {

        opcao_cpu = "Papel"

    }

    if (valorAleatorio === 2) {

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

    sessao_info_jogada_celular.innerHTML =

        ` 
    <div class="infos_jogada_resultado_cima_celular">

        <p class="texto__titulo--jogada-celular">resultado</p>
        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola-celular">

    </div>

    <div class="infos_jogada_resultado_divisao_celular">

        <div class="infos_jogada_resultado" id="jogada_player">

            <p class="texto_jogada_celular">${opcao_jogador}</p>

            <img src="./imgs/Icone_${opcao_jogador}.png" alt="" class="tamanho_icone_opcao_batalha_player_celular">

        </div>


        <div class="infos_jogada_resultado" id="jogada_npc">

            <p class="texto_jogada_celular">${opcao_cpu}</p>

            <img src="./imgs/Icone_${opcao_cpu}.png" alt="" class="tamanho_icone_opcao_batalha_cpu_celular">

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


    if (total_vitorias_player === 3 || total_vitorias_cpu === 3) {

        setTimeout(chamaTransicaoScore, 2500)
        setTimeout(geraScore, 2500)

        setTimeout(chamaModal, 7000)

    } else {

        setTimeout(RetornaMenuBatalha, 2000)

    }

}

function RetornaMenuBatalha() {

    console.log("Retorna Opcoes")

    opcao_jogador == "a definir"

    retornaBotoes()


    sessao_info_jogada.innerHTML =

        `
    <div class="infos_jogada">

        <p class="texto__titulo--jogada">Escolha sua ação</p>
        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola">

    </div>

    `

    sessao_info_jogada_celular.innerHTML =

        `
    <div class="infos_jogada_celular">

        <p class="texto__titulo--jogada-celular">Escolha sua ação</p>
        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola-celular">

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

    sessao_info_jogada_celular.innerHTML =

        ` 
    <div class="infos_jogada_resultado_cima_celular">

        <p class="texto__titulo--jogada-celular">resultado</p>
        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola-celular">

    </div>

    <div class="infos_jogada_resultado_divisao_celular">

        <div class="infos_jogada_resultado" id="jogada_player">

            <p class="texto_jogada-resultado_celular texto_fundo_amarelo">empate</p>

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

    sessao_info_jogada_celular.innerHTML =

        ` 
    <div class="infos_jogada_resultado_cima_celular">

        <p class="texto__titulo--jogada-celular">resultado</p>
        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola-celular">

    </div>

    <div class="infos_jogada_resultado_divisao_celular">

        <div class="infos_jogada_resultado" id="jogada_player">

            <p class="texto_jogada-resultado_celular texto_fundo_verde">vencedor</p>

        </div>

    </div>
    `

    contador_vitorias_player.forEach((elemento) => {

        elemento.innerHTML = ` ${total_vitorias_player} / 3 `

    })

    //contador_vitorias_player.innerHTML = ` ${total_vitorias_player} / 3 `

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

    sessao_info_jogada_celular.innerHTML =

        ` 
    <div class="infos_jogada_resultado_cima_celular">

        <p class="texto__titulo--jogada-celular">resultado</p>
        <img src="./imgs/Icone_Pokebola.png" alt="Icone Pokebola" class="tamanho__imagem--icone-pokebola-celular">

    </div>

    <div class="infos_jogada_resultado_divisao_celular">

        <div class="infos_jogada_resultado" id="jogada_player">

            <p class="texto_jogada-resultado_celular texto_fundo_vermelho">perdedor</p>

        </div>

    </div>
    `

    contador_vitorias_cpu.forEach((elemento) => {

        elemento.innerHTML = ` ${total_vitorias_cpu} / 3 `

    })

    //contador_vitorias_cpu.innerHTML = ` ${total_vitorias_cpu} / 3 `

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

function escondeBotoes(){

    botao_pedra.forEach((elemento) => {

        elemento.classList.add('desativa')
    
    })

    botao_papel.forEach((elemento) => {

        elemento.classList.add('desativa')
    
    })

    botao_tesoura.forEach((elemento) => {

        elemento.classList.add('desativa')
    
    })
    
}

function retornaBotoes(){

    botao_pedra.forEach((elemento) => {

        elemento.classList.remove('desativa')
    
    })

    botao_papel.forEach((elemento) => {

        elemento.classList.remove('desativa')
    
    })

    botao_tesoura.forEach((elemento) => {

        elemento.classList.remove('desativa')
    
    })
    
}