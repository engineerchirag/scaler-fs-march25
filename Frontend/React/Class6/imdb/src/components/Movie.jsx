const Movie = ({movie}) => {
    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.title}</h4>
        </div>
    )
}

export default Movie;