document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.getElementById('reviewsContainer');
    const loader = document.createElement('div');
    loader.classList.add('loader');
    reviewsContainer.appendChild(loader);

    function fetchReviews() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const randomReviews = getRandomElements(data, 10);
                renderReviews(randomReviews);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error.message);
                reviewsContainer.innerHTML = '<p class="error-message">⚠ Что-то пошло не так. Пожалуйста, попробуйте обновить страницу позже.</p>';
            });
    }

    function getRandomElements(array, count) {
        const shuffledArray = array.sort(() => Math.random() - 0.5);
        return shuffledArray.slice(0, count);
    }

    function renderReviews(reviews) {
        reviewsContainer.innerHTML = '';
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <p class="review__author">${review.name}</p>
                <p class="review__body">${review.body}</p>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    }

    fetchReviews();
});

document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.getElementById('reviewsContainer');
    const refreshReviewsBtn = document.getElementById('refreshReviewsBtn');

    fetchReviews();

    refreshReviewsBtn.addEventListener('click', function () {
        fetchReviews();
    });

    function fetchReviews() {
        reviewsContainer.innerHTML = '';
        const loader = document.createElement('div');
        loader.classList.add('loader');
        reviewsContainer.appendChild(loader);

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const randomReviews = getRandomElements(data, 10);
                renderReviews(randomReviews);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error.message);
                reviewsContainer.innerHTML = '<p class="error-message">⚠ Что-то пошло не так. Пожалуйста, попробуйте обновить страницу позже.</p>';
            });
    }

    function getRandomElements(array, count) {
        const shuffledArray = array.sort(() => Math.random() - 0.5);
        return shuffledArray.slice(0, count);
    }

    function renderReviews(reviews) {
        reviewsContainer.innerHTML = '';
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <p class="review__author">${review.name}</p>
                <p class="review__body">${review.body}</p>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    }
});

