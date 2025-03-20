function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let botao = jogo.querySelector('.dashboard__item__button');

    let status = botao.textContent;
    
    if (status == 'Alugar') {
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    } else {
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
    }
}