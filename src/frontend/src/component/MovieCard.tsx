import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;



function MovieCard(props: any) {
    // console.log(props.item.id);
    return (
        <Card
            hoverable
            cover={
                <img
                    src={props.item.image}
                    alt={props.item.image}
                    style={{ height: "250px", width: "100%", borderRadius: "10px" }}
                />
            }
            onClick={props.updateMovieId(props.item.id)}
        />
    )
}

export default MovieCard;