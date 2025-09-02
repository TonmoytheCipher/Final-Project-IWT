const trendingMovies = [
  {title: "Interstellar", img: "/Tonmoy/images/17.jpeg"},
  {title: "Game of Thrones", img: "/Tonmoy/images/8.jpg"},
  {title: "Star Wars", img: "/Tonmoy/images/30.jpg"},
  {title: "Inception", img: "/Tonmoy/images/29.jpeg"},
  {title: "Avengers: Endgame", img: "/Tonmoy/images/12.jpg"},
  {title: "Joker", img: "/Tonmoy/images/13.jpg"},
  {title: "Black Panther", img: "/Tonmoy/images/9.jpg"},
  {title: "The Dark Knight", img: "/Tonmoy/images/10.jpgg"},
  {title: "Tenet", img: "/Tonmoy/images/20.jpg"},
  {title: "Dune", img: "/Tonmoy/images/22.jpg"}
];

const upcomingMovies = [
  {title: "Avatar 3", img: "/Tonmoy/images/57.jpg"},
  {title: "Mission Impossible 8", img: "/Tonmoy/images/58.jpeg"},
  {title: "Frozen 3", img: "/Tonmoy/images/59.jpg"},
  {title: "Zootopia 2", img: "/Tonmoy/images/59.jpg"},
  {title: "Fast X", img: "/Tonmoy/images/56.jpg"},
  {title: "Spider-Man 4", img: "/Tonmoy/images/60.webp"},
  {title: "Avengers : Doomsday", img: "/Tonmoy/images/62.webp"},
  {title: "The Batman Part 2", img: "/Tonmoy/images/63.jpeg"},
  {title: "Spiderman : Beyond the Spiderverse ", img: "/Tonmoy/images/64.webp"},
  {title: "Tron : Ares", img: "/Tonmoy/images/65.jpg"},
];

const recentMovies = [
  {title: "Oppenheimer", img: "/Tonmoy/images/img1.png"},
  {title: "Barbie", img: "/Tonmoy/images/44.jpg"},
  {title: "Deamon Slayer: Infinity Castle", img: "/Tonmoy/images/67.jpeg"},
  {title: "John Wick 4", img: "/Tonmoy/images/42.jpeg"},
  {title: "The Marvels", img: "/Tonmoy/images/43.jpeg"},
  {title: "Mission Impossible 7", img: "/Tonmoy/images/24.jpeg"},
  {title: "Indiana Jones 5", img: "/Tonmoy/images/22.jpeg"},
  {title: "A Haunting in Venice", img: "/Tonmoy/images/66.jpg"},
  {title: "Wonka", img: "/Tonmoy/images/67.jpeg"},
  {title: "Elemental", img: "/Tonmoy/images/68.jpg"},
  {title: "Spider-Man: Across the Spider-Verse", img: "/Tonmoy/images/39.jpg"}
];

// Create movie cards
function loadMovies(movies, containerId) {
  const container = document.getElementById(containerId);
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}">
      <div class="overlay">
        <button>Watch Trailer</button>
        <button>Add to Watchlist</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Horizontal scroll
function scrollLeft(containerId) {
  const container = document.getElementById(containerId);
  container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight(containerId) {
  const container = document.getElementById(containerId);
  container.scrollBy({ left: 300, behavior: 'smooth' });
}

// Load all movies
loadMovies(trendingMovies, 'trending-movies');
loadMovies(upcomingMovies, 'upcoming-movies');
loadMovies(recentMovies, 'recent-movies');
