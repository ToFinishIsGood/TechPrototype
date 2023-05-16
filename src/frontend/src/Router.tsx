import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Register from "./view/Register";
import MovieTimeSelectView from "./view/MovieTimeSelectView";
import {CinemaListView} from "./view/CinemaListView";
import {AllFilmsView} from "./view/AllFilmsView";
import {HomeView} from "./view/HomeView";
import {FilmDetailView} from "./view/FilmDetailView";
import LogView from "./view/LogView";
import {LayoutView} from "./view/LayoutView";
import {SeatSelectionView} from "./view/SeatSelectionView";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={"/login"}/>}></Route>
                <Route path="/login" element={<LogView/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/ticketBooking" element={<LayoutView/>}>
                    <Route index element={<Navigate to="/ticketBooking/home"/>}/>
                    <Route path="home" element={<HomeView/>}></Route>
                    <Route path="film" element={<AllFilmsView/>}></Route>
                    <Route path="film/detail/:id" element={<FilmDetailView/>}/>
                    <Route path="cinema" element={<CinemaListView/>}></Route>
                    <Route path="cinema/:id" element={<MovieTimeSelectView/>}></Route>
                    <Route path="seat/:id" element={<SeatSelectionView/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
