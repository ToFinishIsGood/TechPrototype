import React from 'react';
import {Rate} from "antd";

interface CinameCardProps {
    cinema: any;
}

function CinemaCard(props : CinameCardProps) {
    const cinemaInfo = props.cinema;

    return (
        <div style={{ display: 'flex', backgroundColor: "#f0f1f2" }} className="movie-card">
            <div style={{width: "50%"}}>
                <img src={cinemaInfo.image} className="cinema-img" />
            </div>
            <div className="cinema-info">
                <h2>{cinemaInfo.name}</h2>
                <p>地址：{cinemaInfo.address}</p>
                <p>电话：{cinemaInfo.phone}</p>
                <Rate allowHalf disabled  defaultValue={cinemaInfo.rating} />
            </div>
        </div>
    )
}

export default CinemaCard;