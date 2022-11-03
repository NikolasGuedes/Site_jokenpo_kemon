const botaoJogar = document.getElementById('botao_jogar')
const transicao = document.getElementById('transicao')

const menu_principal = document.getElementById('menu_principal')
const selecao_personagens = document.getElementById('selecao_personagens')


botaoJogar.addEventListener("click", chamaTransicaoPersonagens)


function chamaTransicaoPersonagens() {

    console.log("Iniciou o jogo")

    transicao.classList.remove('desativa')
    transicao.classList.add('ativa')

    setTimeout(chamaMenuPersonagens, 1500);
    setTimeout(resetaTransicao, 3000);

}

function chamaMenuPersonagens() {

    console.log("As informacoes foram substituidas em 1.5s")

    fundo_bloqueia_tela.classList.add('ativa')

    menu_principal.classList.add('desativa')
    selecao_personagens.classList.add('ativa')


}

function resetaTransicao() {

    console.log("Transicao Restaurada")

    fundo_bloqueia_tela.classList.remove('ativa')

    transicao.classList.remove('ativa')
    transicao.classList.add('desativa')
}