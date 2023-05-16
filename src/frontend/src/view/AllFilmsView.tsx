import React from "react";
import {List} from "antd";
import {Film} from "../component/Film";
import {IFilm} from "../interface";

export const film1: IFilm = {
    id: 1,
    name: "三体",
    description: "这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。这个人很懒，没有写简介。",
    releaseDate: new Date(),
    price: 100,
    image: "image/三体.jpg",
}
export const film2: IFilm = {
    id: 2,
    name: "四体",
    description: "无",
    releaseDate: new Date(),
    price: 200,
    image: "image/Effective C++.jpg",
}
const films: IFilm[] = [film1, film1, film1, film1, film1, film1, film2, film2, film2, film2, film2, film2];

export function AllFilmsView() {
    return (
        <div style={{display: "flex", flexFlow: "column"}}>
            <h1>
                正在热映
            </h1>
            <List
                grid={{
                    gutter: 0,
                    column: 6,
                }}
                dataSource={films}
                renderItem={(item) => {
                    return (
                        <List.Item>
                            <Film film={item}/>
                        </List.Item>)
                }}
            />
        </div>
    )
}