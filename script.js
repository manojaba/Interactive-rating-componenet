const button = document.querySelector('form>button');
const labels = document.querySelectorAll('label');
const rating = document.querySelector('.user-input');
const thankyouCard = document.querySelector('.thankyou-state');
const ratingCard = document.querySelector('.rating-state');



button.addEventListener('click', (event) => {
    event.preventDefault();
    const selectedRating = document.querySelector('input[name=rating]:checked');
    if (selectedRating) {
        ratingCard.style.display = 'none';
        thankyouCard.style.display = 'flex';
        rating.textContent = selectedRating.value;
    }


})


