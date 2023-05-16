import {IFilm} from "../../interface";
import {Button, Card, Image} from "antd";
import {Link} from "react-router-dom";

// import "../../css/index.css";

interface IFilmCartProps {
    film: IFilm;
}

export function FilmCart({film}: IFilmCartProps) {
    return (
        <>
            <Card
                hoverable
                cover={<Image className="film-img" alt="image" src={film.image}/>}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                {/*<div style={{ width: "100%" }}>*/}
                <Link to={"/ticketBooking/film/detail/" + film.id}>
                    <Button
                        // style={{
                        //   width: "70%",
                        //   display: "inline-block",
                        // }}
                    >
                        购票
                    </Button>
                </Link>
                {/*</div>*/}
            </Card>
        </>
    );
}
