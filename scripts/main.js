const films = [{
  poster: 'vampires-kiss',
  title: 'Vampire\'s Kiss',
  director: 'Robert Bierman',
  year: 1988,
  deck: 'A publishing executive is visited and bitten by a vampire and starts exhibiting erratic behavior. He pushes his secretary to extremes as he tries to come to terms with his affliction. The vampire continues to visit and drink his blood, and as his madness deepens, it begins to look as if some of the events he\'s experiencing may be hallucinations.',
  language: 'English',
  genre: 'Comedy, Horror',
  runtime: '1h 43m',
}, {
  poster: 'the-cranes-are-flying',
  title: 'The Cranes Are Flying',
  director: 'Mikhail Kalatozov',
  year: 1957,
  deck: 'Veronika and Boris come together in Moscow shortly before World War II. Walking along the river, they watch cranes fly overhead, and promise to rendezvous before Boris leaves to fight. Boris misses the meeting and is off to the front lines, while Veronika waits patiently, sending letters faithfully.',
  language: 'Russian',
  genre: 'Drama, Romance, War',
  runtime: '1h 37m',
}, {
  poster: 'the-shining',
  title: 'The Shining',
  director: 'Stanley Kubrick',
  year: 1980,
  deck: 'Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren\'t prepared for the madness that lurks within.',
  language: 'English',
  genre: 'Horror, Thriller',
  runtime: '2h 24m',
}, {
  poster: 'an-autumn-afternoon',
  title: 'An Autumn Afternoon',
  director: 'Yasujiro Ozu',
  year: 1962,
  deck: 'Shuhei Hirayama is a widower with a 24-year-old daughter. Gradually, he comes to realize that she should not be obliged to look after him for the rest of his life, so he arranges a marriage for her.',
  language: 'Japanese',
  genre: 'Drama',
  runtime: '1h 54m',
}, {
  poster: 'la-haine',
  title: 'La Haine',
  director: 'Mathieu Kassovitz',
  year: 1995,
  deck: 'After a chaotic night of rioting in a marginal suburb of Paris, three young friends, Vinz, Hubert and Said, wander around unoccupied waiting for news about the state of health of a mutual friend who has been seriously injured when confronting the police.',
  language: 'French',
  genre: 'Drama',
  runtime: '1h 38m',
}, {
  poster: 'mambo',
  title: 'Millennium Mambo',
  director: 'Hou Hsiao-hsien',
  year: 2001,
  deck: 'Working as a hostess in a trendy bar, a young beauty finds herself mercilessly torn between two men. Set against the intoxicating and decadent background of modern day Hong Kong, Millennium Mambo chronicles the fleeting, finite blooming of a young woman.',
  language: 'Chinese',
  genre: 'Drama, Romance',
  runtime: '1h 46m',
}, {
  poster: 'breathless',
  title: 'Breathless',
  director: 'Jean-Luc Godard',
  year: 1960,
  deck: 'A small-time thief steals a car and impulsively murders a motorcycle policeman. Wanted by the authorities, he attempts to persuade a girl to run away to Italy with him.',
  language: 'French',
  genre: 'Drama, Crime',
  runtime: '1h 30m',
}, {
  poster: 'hanabi',
  title: 'Hanabi',
  director: 'Takeshi Kitano',
  year: 1997,
  deck: 'Detective Nishi is relieved from a stakeout to visit his sick wife in hospital. He is informed that she is terminally ill, and is advised to take her home. During his visit, a suspect shoots one detective dead and leaves Nishi\'s partner, Horibe, paralyzed. Nishi leaves the police force to spend time with his wife at home, and must find a way to pay off his debts to the yakuza.',
  language: 'Japanese',
  genre: 'Crime, Drama',
  runtime: '1h 43m',
}]

let html = ''

for (let i = 0; i < films.length; i++) {
  html += `
  <div class="film">
    <div class="film-backdrop" style="background-image: url('./images/${films[i].poster}-backdrop.jpg')"></div>

    <div class="film-header">
      <div class="film-info">
        <div class="film-title">${films[i].title}</div>
        <div class="film-meta">Directed by <span>${films[i].director}</span> (${films[i].year})</div>
      </div>

      <div class="film-poster" style="background-image: url('./images/${films[i].poster}.jpg')">
        <div class="film-poster-inner"></div>
      </div>
    </div>

    <p class="film-deck">${films[i].deck}</p>

    <div class="film-footer">
      <div>Runtime: <span>${films[i].runtime}</span></div>
      <div>Genre: <span>${films[i].genre}</span></div>
      <div>Language: <span>${films[i].language}</span></div>
    </div>
  </div>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('films-inner').innerHTML = html
})