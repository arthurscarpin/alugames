function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let botao = jogo.querySelector('.dashboard__item__button');
    let nomeDoJogo = jogo.querySelector('.dashboard__item__name').textContent;

    let status = botao.textContent;
    
    if (status == 'Alugar') {
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    } else {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeDoJogo}?`)) {
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
        }
    }
}