import { useEffect } from "react";
import { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1')
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(() => {});
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="movie-list-page">
            <h2>Movies</h2>
            <div className="movie-list">
                {
                    movies.map(movie => (
                        <Movie movie={movie}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;