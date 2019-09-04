const movieList = [
  {
    name: "Joker",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/220px-Joker_%282019_film%29_poster.jpg",
    url: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
  },
  {
    name: "Once upon a time in Hollywood",
    picture:
      "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    url: "https://www.youtube.com/watch?v=ELeMaP8EPAA"
  },
  {
    name: "Star Wars",
    picture:
      "https://m.media-amazon.com/images/M/MV5BZWU1NDI3YjEtZTlmMy00Y2FmLWI1ZDYtMjYwNDUxYTdlODllXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    url: "https://www.youtube.com/watch?v=D-dj_cwdVYg"
  },
  {
    name: "Terminator",
    picture:
      "https://m.media-amazon.com/images/M/MV5BNzhlYjE5MjMtZDJmYy00MGZmLTgwN2MtZGM0NTk2ZTczNmU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX640_CR0,0,640,999_AL_.jpg",
    url: "https://www.youtube.com/watch?v=rVy1BPd4A0I"
  },
  {
    name: "The lion king",
    picture:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    url: "https://www.youtube.com/watch?v=7TavVZMewpY"
  },
  {
    name: "Rambo: Last blood",
    picture:
      "https://m.media-amazon.com/images/M/MV5BNTAxZWM2OTgtOTQzOC00ZTI5LTgyYjktZTRhYWM4YWQxNWI0XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
    url: "https://www.youtube.com/watch?v=YPuhNtG47M0"
  },
  {
    name: "Abominable",
    picture:
      "https://m.media-amazon.com/images/M/MV5BZjg0MWExYjQtNGQ5OS00M2ZkLTg0NjItZjllOWI1YTRjZmE5XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
    url: "https://www.youtube.com/watch?v=Ap0NRJD-2ts"
  },
  {
    name: "IT Ends",
    picture:
      "https://m.media-amazon.com/images/M/MV5BYTJlNjlkZTktNjEwOS00NzI5LTlkNDAtZmEwZDFmYmM2MjU2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    url: "https://www.youtube.com/watch?v=xhJ5P7Up3jA"
  },
  {
    name: "Gemini Man",
    picture:
      "https://m.media-amazon.com/images/M/MV5BZDNjMzEwY2EtYjMwZS00OWQ0LWI4YmUtZThjZWE5NDcyYWZmXkEyXkFqcGdeQXVyODM2Njg2OTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    url: "https://www.youtube.com/watch?v=AbyJignbSj0"
  }
];

export default function allMovies(state = movieList, action = {}) {
  switch (action.type) {
    case "ALL_MOVIES":
      return action.payload;
    default:
      return state;
  }
}
