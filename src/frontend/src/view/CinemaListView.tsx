import { CinemaList } from "../component/cinema/CinemaList";
import { adminRegionData, cinemaData } from "../data/CinemaData";
import { List, Tag } from "antd";

export function CinemaListView() {
  function itemRender() {
    // if (type === "prev") {
    //   return <button className="prev">Previous</button>;
    // }
    // if (type === "next") {
    //   return <button className="next">Next</button>;
    // }
    // return originalElement;
    return <h4>{">>更多"}</h4>;
  }

  return (
    <div>
      <List
        grid={{ column: 16 }}
        dataSource={adminRegionData}
        renderItem={(item) => (
          <List.Item>
            <Tag>{item.name}</Tag>
          </List.Item>
        )}
        style={{
          display: "flex",
        }}
      />

      <h1>影院列表</h1>
      <CinemaList cinemaData={cinemaData}></CinemaList>
    </div>
  );
}
