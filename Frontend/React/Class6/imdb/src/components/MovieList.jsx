import { useEffect } from "react";
import { useState } from "react";
import Movie from "./Movie";
import Pagination from "./Pagination";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = (pageNo=1) => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`)
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
            <Pagination changePage={fetchMovies} />
        </div>
    )
}

export default MovieList;