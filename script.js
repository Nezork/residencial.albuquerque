function showContent(optionId) {
    // Esconde todos os elementos com a classe 'content-display'
    const contents = document.querySelectorAll('.content-display');
    contents.forEach(content => content.classList.add('hidden'));

    // Mostra o elemento correspondente ao ID fornecido
    const selectedContent = document.getElementById(optionId);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    } else {
        // Se nenhuma opção for selecionada, mostra o conteúdo padrão
        document.getElementById('default-content').classList.remove('hidden');
    }
}

// Exibe o conteúdo padrão ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    showContent('default-content');
});

function showTabContent(tab, event) {
    document.querySelectorAll('#option3 .tab-content').forEach(function(content) {
        content.classList.add('hidden');
    });
    document.querySelectorAll('#option3 .tab-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    document.getElementById(tab + '-content').classList.remove('hidden');
    if (event) {
        event.target.classList.add('active');
    }
}