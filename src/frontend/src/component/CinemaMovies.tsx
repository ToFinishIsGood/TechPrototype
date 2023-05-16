import React, {useState} from 'react';
import {List} from "antd";
import MovieCard from "./MovieCard";
import CinemaMovieTimes from "./CinemaMovieTimes";

function CinemaMovies(props: any){
    const position = "bottom",
        align = "center";


    const [movieId, setMovieId] = useState(Number);  //movie_id

    function setMovie(id: React.SetStateAction<number>){
        setMovieId(id);
    }

    return (
        <div className="cinema-movie-list">
            <h3>电影列表</h3>
        <List
            pagination={{
                position,
                align,
                pageSize: 4,
            }}
            grid={{
                gutter: 56,
                column: 4,
            }}
            dataSource={props.movies}
            renderItem={(movie) => (
                <List.Item>
                    <MovieCard item={movie} updateMovieId={setMovie}/>
                </List.Item>
                )
            }
        />
            <CinemaMovieTimes movie={movieId} cinema={props.id}/>
        </div>
    )
}

export default CinemaMovies;