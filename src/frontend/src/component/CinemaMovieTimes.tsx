import React, {useEffect, useState} from 'react';
import {Button, Menu, Table} from "antd";
import {IScreening} from "../interface";
import {Link} from "react-router-dom";

const {Column} = Table;

const screens: IScreening[] = [{
    id: 1,
    seatOccupation: new Set([1, 3]),
    startTime: new Date(2010, 1, 1, 10, 10, 10),
    endTime: new Date(2010, 1, 1, 10, 10, 30),
    price: 10,
    filmId: 1,
    filmTitle: 'test film',
    filmImage: '',
    cinemaId: 1,
    cinemaName: 'test cinema',
    hallId: 1,
    hallName: 'some hall'
}, {
    id: 2,
    seatOccupation: new Set([1, 3]),
    startTime: new Date(2010, 1, 1, 10, 10, 10),
    endTime: new Date(2010, 1, 1, 10, 10, 30),
    price: 10,
    filmId: 1,
    filmTitle: 'test film',
    filmImage: '',
    cinemaId: 1,
    cinemaName: 'test cinema',
    hallId: 1,
    hallName: 'some hall'
}]

function
CinemaMovieTimes(props: any) {

    const [times, setTimes] = useState([]);

    const [date, setDate] = useState(times[0]);  //date

    const [timesOnSpecificDay, setTimesOnSpecificDay] = useState<IScreening[]>([]);  //times on specific day
    useEffect(() => {
        //movie id & cinema id -> get times
        setTimesOnSpecificDay(screens);
    })


    function handleClick(e: any) {
        setDate(e.date);
        //get times on specific day
        //set times on specific day
    }


    return (
        <div>
            <div>
                <h3>场次列表</h3>
            </div>
            <div>
                {/*time select bar*/}
                <Menu items={times} onClick={handleClick} selectedKeys={[date]} mode="horizontal"/>
                {/*times on specific day*/}
                <Table dataSource={timesOnSpecificDay} showHeader={false} pagination={false}>
                    <Column
                        title="放映时间"
                        dataIndex="startTime"
                        key="startTime"
                    />
                    <Column
                        title="放映厅"
                        dataIndex="hallName"
                        key="hallName"
                    />
                    <Column
                        title="售价"
                        dataIndex="price"
                        key="price"
                    />
                    <Column
                        title="选座购票"
                        dataIndex="id"
                        key="id"
                        render={(key) => (
                            <Link to={"/ticketBooking/seat/" + key}>
                                <Button type="text">
                                    选座
                                </Button>
                            </Link>
                        )}
                    />
                </Table>
            </div>
        </div>
    )
}

export default CinemaMovieTimes;