import React, {useState} from "react";
import MovieCard from "./MovieCard";

function SearchMovies() {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        

        // const query = "Jurassic Park"

        const url = `https://api.themoviedb.org/3/search/movie?api_key=ec600c302d27132b9fb5bf1617ffd8d8&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results)
        } catch(err) {
            console.error(err);
        }

        
    }

    return(
        <React.Fragment>
            <form className={`form`} onSubmit={searchMovies}>
                <label className={`label`} htmlFor="query">Movie Name</label>
                <input className={`input`} type="text" name="query" placeholder="Search a movie..." onChange={(e) => setQuery(e.target.value)} value={query} />
                <button className={`button`} type="submit">Search</button>
            </form>
            <MovieCard movies={movies}/>
        </React.Fragment>
    )
}

export default SearchMovies;