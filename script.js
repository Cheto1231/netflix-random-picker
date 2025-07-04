const shows = [
  {
    title: "Stranger Things",
    type: "TV Show",
    genre: "Science Fiction",
    year: 2016,
    description: "A group of young friends witness supernatural forces and secret government exploits."
  },
  {
    title: "The Irishman",
    type: "Movie",
    genre: "Crime",
    year: 2019,
    description: "An aging hitman recalls his past with the mob and his involvement with Jimmy Hoffa."
  },
  {
    title: "The Queen's Gambit",
    type: "TV Show",
    genre: "Drama",
    year: 2020,
    description: "Orphaned chess prodigy Beth Harmon struggles with addiction in a quest to become the best."
  },
  {
    title: "Extraction",
    type: "Movie",
    genre: "Action",
    year: 2020,
    description: "A mercenary’s mission to rescue a kidnapped boy turns into a soul-searching escape mission."
  },
  {
    title: "BoJack Horseman",
    type: "TV Show",
    genre: "Animation, Comedy, Drama",
    year: 2014,
    description: "A washed-up actor from a 90s sitcom navigates fame, depression, and addiction."
  }
];

let history = [];

function pickRandom() {
  const genreFilter = document.getElementById("genreSelect").value;
  let filteredShows = shows;

  if (genreFilter !== "All") {
    filteredShows = shows.filter(show =>
      show.genre.toLowerCase().includes(genreFilter.toLowerCase())
    );
  }

  if (filteredShows.length === 0) {
    alert("No shows found for this genre.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredShows.length);
  const show = filteredShows[randomIndex];

  // Update content
  document.getElementById("title").textContent = show.title;
  document.getElementById("type").textContent = show.type;
  document.getElementById("genre").textContent = show.genre;
  document.getElementById("year").textContent = show.year;
  document.getElementById("description").textContent = show.description;

  const resultCard = document.getElementById("result");
  resultCard.classList.remove("hidden");
  setTimeout(() => resultCard.classList.add("fade-in"), 10);

  // Add to history
  addToHistory(show.title);
}

function addToHistory(title) {
  history.unshift(title);
  if (history.length > 5) history.pop(); // keep only last 5
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = history.map(item => `<li>${item}</li>`).join("");
}
