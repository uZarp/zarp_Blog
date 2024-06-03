document.addEventListener('DOMContentLoaded', function () {
  const ratings = document.querySelectorAll('.rating');

  ratings.forEach(rating => {
    const stars = rating.querySelectorAll('.star');
    const ratingInput = rating.querySelector('.rating-input');

    stars.forEach(star => {
      star.addEventListener('click', function () {
        const ratingValue = parseInt(this.getAttribute('data-rating'));

        if (star === stars[0] && star.classList.contains('checked')) {
          // Se a primeira estrela estiver marcada, desmarque todas as estrelas
          stars.forEach(s => {
            s.classList.remove('checked');
          });
          ratingInput.value = 0; // Define a avaliação como zero
        } else {
          stars.forEach(s => {
            if (parseInt(s.getAttribute('data-rating')) <= ratingValue) {
              s.classList.add('checked');
            } else {
              s.classList.remove('checked');
            }
          });
          ratingInput.value = ratingValue;
        }
      });
    });
  });
});
