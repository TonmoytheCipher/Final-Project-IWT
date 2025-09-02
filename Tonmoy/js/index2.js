// Movies by category
const moviesByCategory = {
  industry: [
    {title: "Interstellar", img: "/Tonmoy/images/14.jpg"},
    {title: "Inception", img: "/Tonmoy/images/13.jpg"},
    {title: "Avengers: Endgame", img: "/Tonmoy/images/15.webp"},
    {title: "Black Panther", img: "/Tonmoy/images/16.jpg"},
    {title: "Interstellar", img: "/Tonmoy/images/13.jpg"},
    {title: "Avatar", img: "/Tonmoy/images/17.jpeg"},
    {title: "The Amazing Spider-Man", img: "/Tonmoy/images/18.jpg"},
    {title: "Fight Club", img: "/Tonmoy/images/12.jpg"},
    {title: "Skyscraper 2018", img: "/Tonmoy/images/19.jpg"},
    {title: "Bahubali", img: "/Tonmoy/images/20.jpg"},
    {title: "The Dark Knight", img: "/Tonmoy/images/3.jpeg"},
    {title: "Black Panther", img: "/Tonmoy/images/13.jpg"}
  ],
  imdb: [
    {title: "The Shawshank Redemption", img:"/Tonmoy/images/1.png"},
    {title: "The Godfather", img: "/Tonmoy/images/2.jpg"},
    {title: "The Dark Knight", img: "/Tonmoy/images/3.jpeg"},
    {title: "12 Angry Men", img: "/Tonmoy/images/4.jpg"},
    {title: "The Lord of the Rings: The Return of the King", img: "/Tonmoy/images/5.jpg"},
    {title: "Schindler's List", img: "/Tonmoy/images/6.jpg"},
    {title: "Pulp Fiction", img: "/Tonmoy/images/7.jpg"},
    {title: "The Lord of the Rings: The Fellowship of the Ring", img: "/Tonmoy/images/8.jpg"},
    {title: "The Good, the Bad and the Ugly", img: "/Tonmoy/images/9.jpg"},
    {title: "Forrest Gump", img: "/Tonmoy/images/10.jpg"},
    {title: "The Lord of the Rings: The Two Towers", img: "/Tonmoy/images/11.jpg"},
    {title: " Fight Club", img: "/Tonmoy/images/12.jpg"}
  ],
  animation: [
    {title: "Spirited Away", img: "/Tonmoy/images/21.jpeg"},
    {title: "Coco", img: "/Tonmoy/images/22.jpeg"},
    {title: "Up", img: "/Tonmoy/images/23.jpg"},
    {title: "Inside Out", img: "/Tonmoy/images/24.jpeg"},
    {title: "Megamind", img: "images/25.jpg"},
    {title: "Moana", img: "images/26.jpg"},
    {title: "Toy Story", img: "images/27.jpg"},
    {title: "Frozen", img: "images/28.jpg"},
    {title: "Rango", img: "images/29.jpeg"},
    {title: "Hotel Transylania", img: "images/30.jpg"},
    {title: "Kong Fu Panda", img: "images/31.jpg"},
    {title: "The wild Robot", img: "images/32.jpg"}
  ],
  tv: [
    {title: "Game of Thrones", img: "/Tonmoy/images/34.jpg"},
    {title: "Breaking Bad", img: "images/33.jpeg"},
    {title: "Stranger Things", img: "images/35.jpg"},
    {title: "The Witcher", img: "images/36.jpg"},
    {title: "Money Heist ", img: "images/37.jpg"},
    {title: "Dark", img: "images/38.jpg"},
    {title: "The Lord of the Rings: The Rings of Power", img: "images/39.jpg"},
    {title: "Love Death and Robots", img: "images/41.jpeg"},
    {title: "The Boys", img: "images/40.jpg"},
    {title: "The Sandman", img: "images/42.jpeg"},
    {title: "All of Us are Dead", img: "images/43.jpeg"},
    {title: "Arcane", img: "images/44.jpg"}
  ],
  anime: [
    {title: "Attack on Titan", img: "/Tonmoy/images/46.jpg"},
    {title: "Demon Slayer", img: "images/45.jpeg"},
    {title: "Naruto", img: "images/47.jpg"},
    {title: "One Piece", img: "images/48.jpg"},
    {title: "Solo Leveling", img: "images/49.jpg"},
    {title: "Jujutsu Kaisen", img: "images/50.jpg"},
    {title: "Bleatch", img: "images/51.jpg"},
    {title: " Classroom of the Elite", img: "images/52.jpg"},
    {title: "One Punch man", img: "images/54.jpg"},
    {title: "Sakamoto Says", img: "images/53.jpg"},
  ]
};

// Load selected category
function showCategory(catName) {
  const container = document.getElementById('category-movies');
  const title = document.getElementById('category-title');
  container.innerHTML = '';
  title.innerText = catName.charAt(0).toUpperCase() + catName.slice(1);
  
  moviesByCategory[catName].forEach(movie => {
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
  if (container) {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }
}

function scrollRight(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
}

