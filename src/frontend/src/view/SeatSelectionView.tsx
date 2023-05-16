import { useEffect, useState } from "react";
import { IScreening, IHall } from "../interface";
import { SeatSelector } from "../component/SeatSelector";
import { Image, Space, Spin, Typography } from "antd";
import Title from "antd/es/typography/Title";
import "../css/SeatSelectionView.css";

export function SeatSelectionView() {
    // load data. TODO: change into fetch
    const loadHall = async (hallId: number) => {
        return {
            id: 1,
            name: 'test hall',
            seats: [[null, { id: 1, name: '1排1座' }, { id: 2, name: '1排2座' }],
            [{ id: 3, name: '2排1座' }, null, { id: 4, name: '2排2座' }],
            [{ id: 5, name: '3排1座' }, { id: 6, name: '3排2座' }, { id: 7, name: '3排3座' }]],
        };
    }
    const loadScreening = async () => {
        return {
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
        };
    }
    useEffect(() => {
        const loadData = async () => {
            const screening: IScreening = await loadScreening();
            setScreening(screening);
            const hall: IHall = await loadHall(screening!.hallId);
            setHall(hall);
        };
        loadData();
    }, []);
    const [hall, setHall] = useState<null | IHall>(null);
    const [screening, setScreening] = useState<null | IScreening>(null);
    if (hall === null || screening === null) {
        return (<Spin tip="加载中" size="large" />);
    }
    return (
        <div className="seat-selection-view">
            <SeatSelector seats={hall.seats} seatOccupation={screening.seatOccupation} />
            <div className="film-description">
                <Image src={screening.filmImage} height={160} width={100} />
                <Title level={5}>{screening.filmTitle}</Title>
                <Space direction="vertical">
                    <Typography.Text>{"影院：" + screening.cinemaName}</Typography.Text>
                    <Typography.Text>{"影厅：" + screening.hallName}</Typography.Text>
                </Space>
            </div>
        </div>);
}
