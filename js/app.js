let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let botao = jogo.querySelector('.dashboard__item__button');
    let nomeDoJogo = jogo.querySelector('.dashboard__item__name').textContent;
    let status = botao.textContent;
    
    if (status == 'Alugar') {
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        jogosAlugados++;
    } else {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeDoJogo}?`)) {
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
            jogosAlugados--;
        }
    }
    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});