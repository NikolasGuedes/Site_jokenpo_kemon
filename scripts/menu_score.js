const texto_resultado_partida = document.getElementById('texto_resultado_partida')
const texto_total_jogadas = document.getElementById('texto_total_jogadas')
const texto_batalha = document.getElementById('texto_batalha')
const nota_batalha = document.getElementById('nota_batalha')

const botao_jogar_novamente = document.getElementById('botao_jogar_novamente')

const modal_perfil = document.getElementById('janela_perfil')
const btn_fechar_modal = document.getElementById('btn_fechar_modal')


btn_fechar_modal.addEventListener('click', () => {

    modal_perfil.close()
    modal_perfil.classList.remove('ativa')
})


function chamaModal() {

    modal_perfil.classList.add('ativa')
    modal_perfil.showModal();    

}



function geraScore() {

    if (total_vitorias_player === 3) {

        texto_resultado_partida.innerText = "Vitória"
        texto_resultado_partida.classList.add('texto_resultado_vitoria')

    } else {

        texto_resultado_partida.innerText = "Derrota"
        texto_resultado_partida.classList.add('texto_resultado_derrota')

        texto_batalha.innerText = "Não foi dessa vez"

        nota_batalha.innerHTML += 
        `  
        <img src="imgs/fundo_Estrela_Batalha.png" alt="logo_jogo" class="imagem__estrela_score">
        <img src="imgs/fundo_Estrela_Batalha.png" alt="logo_jogo" class="imagem__estrela_score">
        <img src="imgs/fundo_Estrela_Batalha.png" alt="logo_jogo" class="imagem__estrela_score">
        `

    }

    texto_total_jogadas.innerText = total_jogadas

    if (total_jogadas === 3 && total_vitorias_player === 3) {

        texto_batalha.innerText = "vitória perfeita"

        nota_batalha.innerHTML += 
        `  
        <img src="imgs/Estrela_Batalha.png" alt="logo_jogo" class="imagem__estrela_score">
        <img src="imgs/Estrela_Batalha.png" alt="logo_jogo" class="imagem__estrela_score">
        <img src="imgs/Estrela_Batalha.png" alt="logo_jogo" class="imagem__estrela_score">
        `

    }else if(total_jogadas > 3 && total_jogadas < 9 && total_vitorias_player === 3){

        texto_batalha.innerText = "partida dificil"

        nota_batalha.innerHTML += 
        `  
        <img src="imgs/Estrela_Batalha.png" alt="logo_jogo" class="imagem__estrela_score">
        <img src="imgs/Estrela_Batalha.png" alt="logo_jogo" class="imagem__estrela_score">
        <img src="imgs/fundo_Estrela_Batalha.png" alt="logo_jogo" class="imagem__estrela_score">
        `

    }else if(total_jogadas >= 9 && total_vitorias_player === 3){

        texto_batalha.innerText = "partida sofrida"

        nota_batalha.innerHTML = 
        `  
        <img src="imgs/Estrela_Batalha.png" alt="logo_jogo" class="imagem__estrela_score">
        <img src="imgs/fundo_Estrela_Batalha.png" alt="logo_jogo" class="imagem__estrela_score">
        <img src="imgs/fundo_Estrela_Batalha.png" alt="logo_jogo" class="imagem__estrela_score">
        `
    }

    setTimeout(geraBotaoJogarNovamente, 5000);

}

function geraBotaoJogarNovamente(){

    botao_jogar_novamente.classList.add('ativa')

}

botao_jogar_novamente.addEventListener('click',  () =>  {

     //recarrega a pagina e reinicia o jogo
     window.location.reload()

})

