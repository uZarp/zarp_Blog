document.addEventListener('DOMContentLoaded', function () {
  const ratings = document.querySelectorAll('.rating');

  ratings.forEach(rating => {
      const stars = rating.querySelectorAll('.star');
      const ratingInput = rating.querySelector('.rating-input');
      const ratingId = rating.getAttribute('data-id');
      const storedRating = localStorage.getItem(`rating_${ratingId}`);

      if (storedRating) {
          highlightStars(storedRating, stars, ratingInput);
      }

      stars.forEach(star => {
          star.addEventListener('click', function () {
              const ratingValue = parseInt(this.getAttribute('data-rating'));

              if (star === stars[0] && star.classList.contains('checked')) {
                  // Se a primeira estrela estiver marcada, desmarque todas as estrelas
                  highlightStars(0, stars, ratingInput);
                  localStorage.removeItem(`rating_${ratingId}`);
              } else {
                  highlightStars(ratingValue, stars, ratingInput);
                  localStorage.setItem(`rating_${ratingId}`, ratingValue);
              }
          });
      });
  });

  function highlightStars(rating, stars, ratingInput) {
      stars.forEach(star => {
          if (parseInt(star.getAttribute('data-rating')) <= rating) {
              star.classList.add('checked');
          } else {
              star.classList.remove('checked');
          }
      });
      ratingInput.value = rating;
  }
});