function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`); // Aqui pegamos a ID
    let imagem = gameClicado.querySelector('.dashboard__item__img'); // Aqui pegamos a classe
    let botao = gameClicado.querySelector('.dashboard__item__button'); // Aqui pegamos a outra classe
    // ficando
    // Game-1 > dentro da classe x > que esta na classe y
    // Agora podemos alterar a classe Y que o javascript vai saber exatamente aonde alterar.
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name'); // Aqui podemos imprimir o nome do jogo caso precise para testes.


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Adiciona uma confirmação antes de devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}
