const corFundo = document.getElementById("selecao_personagens")
const fundoAnimado = document.getElementById("fundo_animado")

const cartaBulbassauro = document.getElementById("card-bulbassauro")
const cartaSquirtle = document.getElementById("card-squirtle")
const cartacharmander = document.getElementById("card-charmander")

const modo_batalha = document.getElementById('modo_batalha')

const fundo_bloqueia_tela = document.getElementById('bloqueia_tela')

const imagem_pokemon = document.getElementById('imagem-pokemon')
const nome_pokemon = document.getElementById('nome-pokemon')
const efeito_bolha_bulbassauro = document.getElementById('bolha-bulbassauro')
const efeito_bolha_squirlte = document.getElementById('bolha-squirtle')
const efeito_bolha_charmander = document.getElementById('bolha-charmander')
const fundo_batalha = document.getElementById('fundo-batalha')

const fundo_contador_vitorias = document.querySelectorAll('.texto__contador--vitorias')


cartaBulbassauro.addEventListener("mouseover", () => {

    corFundo.style.background = "#33CC33";
    fundoAnimado.classList.add("fundo_animado_bulbassauro")

})

cartaBulbassauro.addEventListener("mouseout", () => {

    corFundo.style.background = "#FFCC96";
    fundoAnimado.classList.remove("fundo_animado_bulbassauro")


})

cartaBulbassauro.addEventListener("click", chamaTransicaoBatalha)

cartaBulbassauro.addEventListener("click", () =>{

    console.log("Player escolheu Bulbassauro")

    imagem_pokemon.classList.add('personagem_bulbassauro')
    nome_pokemon.textContent = "Bulbassauro"
    efeito_bolha_bulbassauro.classList.add('ativa')
    fundo_batalha.classList.add('fundo_bulbassauro')

    fundo_contador_vitorias.forEach((elemento) => {

        elemento.classList.add("contador_bulbassauro")
    })

})



cartaSquirtle.addEventListener("mouseover", () => {

    fundoAnimado.classList.add("fundo_animado_squirtle")
    corFundo.style.background = "#7DDFFF";

})

cartaSquirtle.addEventListener("mouseout", () => {

    fundoAnimado.classList.remove("fundo_animado_squirtle")
    corFundo.style.background = "#FFCC96";

})

cartaSquirtle.addEventListener("click", chamaTransicaoBatalha)

cartaSquirtle.addEventListener("click", () =>{

    console.log("Player escolheu Squirtle")

    imagem_pokemon.classList.add('personagem_squirtle')
    nome_pokemon.textContent = "squirtle"
    efeito_bolha_squirlte.classList.add('ativa')
    fundo_batalha.classList.add('fundo_squirtle')

    fundo_contador_vitorias.forEach((elemento) => {

        elemento.classList.add("contador_squirtle")
    })
    
})



cartacharmander.addEventListener("mouseover", () => {

    fundoAnimado.classList.add("fundo_animado_charmander") 
    corFundo.style.background = "#FF8700";

})

cartacharmander.addEventListener("mouseout", () => {

    fundoAnimado.classList.remove("fundo_animado_charmander") 
    corFundo.style.background = "#FFCC96";

})

cartacharmander.addEventListener("click", chamaTransicaoBatalha)

cartacharmander.addEventListener("click", () =>{

    console.log("Player escolheu Charmander")

    imagem_pokemon.classList.add('personagem_charmander')
    nome_pokemon.textContent = "charmander"
    efeito_bolha_charmander.classList.add('ativa')
    fundo_batalha.classList.add('fundo_charmander')

    fundo_contador_vitorias.forEach((elemento) => {

        elemento.classList.add("contador_charmander")
    })
    
})



function chamaTransicaoBatalha() {

    console.log("Escolheu o personagem")

    fundo_bloqueia_tela.classList.add('ativa')

    transicao.classList.remove('desativa')
    transicao.classList.add('ativa')

    setTimeout(chamaMenuBatalha, 1500);
    setTimeout(resetaTransicao, 3000);

}

function chamaMenuBatalha() {

    console.log("As informacoes foram substituidas em 1.5s")

    selecao_personagens.classList.add('desativa')
    modo_batalha.classList.add('ativa')


}