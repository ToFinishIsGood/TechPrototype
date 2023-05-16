import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import CinemaCard from "../component/CinemaCard";
import CinemaMovies from "../component/CinemaMovies";
import "../css/MovieTimeSelectView.css";
import {Layout} from "antd";
import {cinemaData} from "../data/CinemaData";
import {filmDateCur} from "../data/FilmData";



function MovieTimeSelectView() {
    const {id} = useParams();  //cinema_id

    const [cinema, setCinema] = useState(cinemaData[0]);
    const [movies, setMovies] = useState(filmDateCur);

    useEffect(() => {
        //get cinema info from backend
    })

    return (
        <div className="MovieTimeSelectView">
            {/*header*/}
            <Layout className="middle-body">
                {/*Cinema Card*/}
                <CinemaCard cinema={cinema}/>
                {/*Movies in this Cinema and times of this movie*/}
                <CinemaMovies movies={movies} cinema={id}/>
            </Layout>
        </div>
    )


}

export default MovieTimeSelectView;