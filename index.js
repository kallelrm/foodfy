const modal = document.querySelector('.modal-overlay');
const receitas = document.querySelectorAll('.receita');

for (let receita of receitas){
  receita.addEventListener('click', () => {
    const receitaId = receita.getAttribute('id');
    const titulo = receita.querySelector('div > h3').textContent;
    const autor = receita.querySelector('div > p').textContent;

    modal.classList.add('active');
    modal.querySelector('img').src = `/assets/${receitaId}.png`
    modal.querySelector('h3').textContent = titulo;
    modal.querySelector('p').textContent = autor;

  });
}

document.querySelector('.close-modal').addEventListener('click', function () {
  modal.classList.remove('active');
  modal.querySelector('img').src='';
});
