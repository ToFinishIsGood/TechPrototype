import { useState } from "react";
import { ISeat } from "../interface";
import "../css/SeatSelector.css"
import { SeatSelectorUnit } from "./SeatSelectorUnit";
import { Button } from "antd";

export function SeatSelector(props: { seats: Array<Array<ISeat | null>>, seatOccupation: Set<number> }) {
    const unitSize = 25;
    const [selectedSeats, setSelectedSeats] = useState(new Map<number, string>());
    //const selectedSeats=new Map<number,string>();
    const handleChange = (id: number, seatName: string, newSelected: Boolean) => {
        const newSelectedSeats = new Map(selectedSeats);
        if (newSelected) {
            newSelectedSeats.set(id, seatName);
        }
        else {
            newSelectedSeats.delete(id);
        }
        setSelectedSeats(newSelectedSeats);
    };
    const table = (
        <table className="seat-selector-table">
            <thead>
                <tr key="seat-selector-screen-line" className="seat-selector-screen">
                    <td key="seat-selector-screen-cell" className="seat-selector-screen-cell" colSpan={props.seats[0].length} align="center" height={unitSize} style={{ fontSize: 0.75 * unitSize }}>
                        荧幕
                    </td>
                </tr>
            </thead>
            <tbody>
                {props.seats.map((line, lineidx) => (
                    <tr key={"seat-selector-cell-line" + lineidx}>{line.map(
                        (item, itemidx) => {
                            if (item === null) {
                                return (<td key={"seat-selector-cell-line" + lineidx + "-item-" + itemidx}>
                                    <div className="seat-selector-unit" style={{ height: unitSize, width: unitSize }}>
                                    </div>
                                </td>);
                            }
                            if (props.seatOccupation.has(item.id)) {
                                return (<td key={"seat-selector-cell-line" + lineidx + "-item-" + itemidx}>
                                    <SeatSelectorUnit id={item.id} disabled={true} size={unitSize} selected={selectedSeats.has(item.id)} seatName={item.name} onChange={handleChange} />
                                </td>)
                            }
                            else return (<td key={"seat-selector-cell-line" + lineidx + "-item-" + itemidx}>
                                <SeatSelectorUnit id={item.id} disabled={false} size={unitSize} selected={selectedSeats.has(item.id)} seatName={item.name} onChange={handleChange} />
                            </td>)
                        }
                    )}</tr>))}
            </tbody>
        </table>
    );
    let selectedSeatsString = "";
    let selectedSeatIds: Array<number> = [];
    if (selectedSeats.size) {
        let addingSeperation = false;
        selectedSeats.forEach((seatName: string, seatId: number) => {
            selectedSeatsString = selectedSeatsString + (addingSeperation ? "、" : "") + seatName;
            addingSeperation = true;
            selectedSeatIds.push(seatId);
        });
        selectedSeatsString = "已选中：" + selectedSeatsString;
    }
    else {
        selectedSeatsString = "未选中任何座位";
    }

    return (
        <div className="seat-selector">
            <div className="seat-selector-table-container">{table}</div>
            <div className="selected-seats-conclusion" style={selectedSeats.size === 0 ? { visibility: 'hidden' } : {}}>
                {selectedSeatsString}
            </div>
            <Button onClick={() => { alert("已选座位id JSON:\n" + JSON.stringify(selectedSeatIds)) }}>提交选座</Button>
        </div>
    )
}
