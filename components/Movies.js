import React, { useState ,useEffect} from 'react';
import 'style.css';

function Movies() {
    const [allMovies,setAllMovies] = useState([])

   async function fetchMovies() {
    const result = await fetch("https://ghibliapi.herokuapp.com/films")
    const response = await result.json()
    setAllMovies(response)
    console.log(response);
    }

    useEffect(() => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
		fetchMovies();
    }, []);

    return(
       <div className="container">
           <header>
                <h1>Studio Ghibli Movies</h1>
                <p>Ranked from best, to worst</p>
            </header>
            <div className="wrapper">
           {
             allMovies.map(movie => {
              return(
                <div className="movies" key={movie.id}>
                    <div className="heading">
                        <h2>{movie.title}</h2>
                        <p> Realese date: <b>{movie.release_date}</b></p>
                        <p>Rt_score: <b>{movie.rt_score}</b></p>
                    </div>
                    <div>
                        <p>
                        {movie.description}
                        </p>
                        <ul>
                            <li>
                            Director:
                             <b>{movie.director}</b>
                             </li>
                            <li>
                            Producer:
                            <b>{movie.producer}</b>
                            </li>
                        </ul>
                    </div>
                </div>
              )
             })
           }
           </div>
       </div>
    )
}

export default Movies;