import React, {JSX} from "react";
import {Card} from "antd";
import {IFilm} from "../interface";

const {Meta} = Card;

interface FilmProps {
    film: IFilm;
}

export function Film(props: FilmProps): JSX.Element {
    return (
        // TODO:跳转到电影详情界面，修改为正确的路径
        <a href={`/ticketBooking/film/detail/${props.film.id.toString()}`}>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="" src={require("../" + props.film.image)}/>}//TODO:补充图片路径
            >
                <Meta title={props.film.name} description={"评分"}/>
            </Card>
        </a>
    )
}