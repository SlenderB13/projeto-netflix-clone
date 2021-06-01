import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"

function Row({ title, fetchURL, isLargeRow = false }) {

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchURL]);


    return (
        <div className="row">

            <div className="row_title_container">
                <h2 className="row_title">{title}</h2>
            </div>
            

            <div className="row_container">
            
                {movies.map((movie) => (

                    <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                    alt={movie.name} />

                    ))}

            </div>
            
        </div>
    )
}

export default Row
