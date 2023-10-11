document.addEventListener("DOMContentLoaded", function () {
    const featuredMovies = [
        { title: "Movie 1", image: "movie1.jpg" },
        { title: "Movie 2", image: "movie2.jpg" },
        { title: "Movie 3", image: "movie3.jpg" },
        // Add more featured movies here
    ];

    const popularMovies = [
        { title: "Movie 4", image: "movie4.jpg" },
        { title: "Movie 5", image: "movie5.jpg" },
        { title: "Movie 6", image: "movie6.jpg" },
        // Add more popular movies here
    ];

    function createMovieCard(movie) {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
            <div class="movie-card">
                <img src="${movie.image}" alt="${movie.title}" class="img-fluid">
                <h3>${movie.title}</h3>
            </div>
        `;
        return card;
    }

    function renderMovieCards(container, movies) {
        const row = container.querySelector(".row");
        movies.forEach((movie) => {
            const card = createMovieCard(movie);
            row.appendChild(card);
        });
    }

    const featuredMoviesSection = document.querySelector(".featured-movies");
    const popularMoviesSection = document.querySelector(".popular-movies");

    renderMovieCards(featuredMoviesSection, featuredMovies);
    renderMovieCards(popularMoviesSection, popularMovies);
});
