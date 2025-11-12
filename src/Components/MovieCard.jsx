function MovieCard({ movie }) {
    function onclickFavorite() { alert("clicked the favorite button") }

    return <div className="movie-card">
        <div className="move-poster">
            <img src={movie.imgurl} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onclickFavorite}>❤︎</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}
export default MovieCard