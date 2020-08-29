console.log('it works');

const movies = 'https://ghibliapi.herokuapp.com/films';
const container = document.querySelector('.wrapper');
// fetch the data from the url
async function fetchMovies() {
    const response = await fetch(`${movies}`);
    // This will parse the data from a string into an object
    const data = await response.json();
    console.log(data);
    return data;
}
fetchMovies();

// turn the object into a number
async function fetchObject() {
    const myMovies = await fetchMovies();
    displayMovies(myMovies);
}
fetchObject();

// gearate the movies in the html
function displayMovies(myMovies) {
    const html = myMovies
        .sort((a, b) => b.rt_score - a.rt_score) // sort by score
        .map(movie => {
            return `
        <div>
            <div class="movies">
                <div class="heading">
                    <h2>${movie.title}</h2>
                    <p> Realese date: <b>${movie.release_date}</b></p>
                    <p>Rt_score: <b>${movie.rt_score}</b></p>
                </div>
                <div>
                    <p>
                    ${movie.description}
                    </p>
                    <ul>
                        <li>
                        Director:
                         <b>${movie.director}</b>
                         </li>
                        <li>
                        Producer:
                        <b>${movie.producer}</b>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
        }).join(' ');
    container.innerHTML = html;
}

displayMovies();