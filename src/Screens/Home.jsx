import MovieCard from "../Components/MovieCard";
import { useState } from "react";
function Home() {
    const [searchQuery, setsearchQuery] = useState("");
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

    const handlesearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }
    return <div className="home">
        <form onSubmit={handlesearch}>
            <input type="text" placeholder="Search for movies"
                className="search-form"
                value={searchQuery}
                onChange={(e) => setsearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) =>
                (movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />))}
        </div>


    </div>

}
export default Home