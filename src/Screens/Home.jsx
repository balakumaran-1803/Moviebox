import MovieCard from "../Components/MovieCard";
function Home() {
    const movies = [
        {
            id: 1,
            title: "Inception",
            release_date: "2010-07-16"
        },
        {
            id: 2,
            title: "Interstellar",
            release_date: "2014-11-07"
        },
        {
            id: 3,
            title: "The Dark Knight",
            release_date: "2008-07-18"
        },
        {
            id: 4,
            title: "Avatar",
            release_date: "2009-12-18"
        },
        {
            id: 5,
            title: "Avengers: Endgame",
            release_date: "2019-04-26"
        }
    ];

    const handlesearch = () => { alert("submited") }
    return <div className="home">
        <form onSubmit={handlesearch}>
            <input type="text" placeholder="Search for movies"
                className="search-form" />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) =>
                (<MovieCard movie={movie} key={movie.id} />))}
        </div>


    </div>

}
export default Home