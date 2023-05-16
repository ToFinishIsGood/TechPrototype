import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {film1, film2} from "./AllFilmsView";
import {IFilm} from "../interface";
import {Button, Rate, Space} from "antd";
import {useNavigate} from "react-router-dom";

const films = [film1, film2];
const stars: number[] = [1, 1, 1, 0, 0];

export function FilmDetailView() {
    const {filmId} = useParams<{ filmId: string }>();
    const [data, setData] = useState<IFilm | null>(null);

    function handleBook() {
        //TODO:传参筛选有这个电影的影院
        navigate("/ticketBooking/cinema");
    }

    const navigate = useNavigate();
    useEffect(() => {
        const foundFilm: IFilm | undefined = films.find((film) => film.id.toString() === filmId);
        if (foundFilm) {
            setData(foundFilm);
        } else {
            setData(null);
        }
        setData(film1);//TODO:实现跳转到正确的电影界面时去掉这行
    }, [filmId]);
    return <>
        <Space>
            <img alt="" src={require("../image/三体.jpg")}/>
            {/*<img alt="" src={require("../" + data?.image)}/>*/}
            <Space align={"start"} direction={"vertical"}>
                <h2>{data?.name}</h2>
                <h3>动作 冒险</h3> {/*TODO:这一部分改为电影对应信息*/}
                <h3>美国/120分钟</h3>
                <h3>2023-02-17中国大陆上映</h3>
                <Button shape={"round"} style={{backgroundColor: "red", color: "white"}}
                        onClick={() => handleBook()}>立即购票</Button>
            </Space>
            <div style={{maxWidth: 500}}>
                <h2 style={{display: 'inline'}}>简介：</h2>
                <p style={{display: 'inline'}}>{data?.description}</p>
                <h2>评分：8.8</h2>
                <Rate></Rate>
            </div>
        </Space>
    </>;
}