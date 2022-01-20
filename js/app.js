const cardsEls = document.querySelectorAll('.card');

cardsEls.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('card--flip');
    console.log(card);
  });
});
