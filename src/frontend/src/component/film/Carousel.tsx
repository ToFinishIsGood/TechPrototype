import React from "react";
import {Carousel, Image} from "antd";

export function FilmCarousel() {
    return (
        <>
            <Carousel
                autoplay
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "600px",
                    height: "300px"
                }}
            >
                <Image
                    style={{
                        flex: "1",
                        height: "auto",
                        width: "100%",
                        maxHeight: "100%",
                    }}
                    src={require("../../image/Carousel/1.jpg")}
                />
                <Image
                    style={{
                        flex: "1",
                        height: "auto",
                        width: "100%",
                        maxHeight: "100%",
                    }}
                    src={require("../../image/Carousel/2.jpg")}
                />
                <Image
                    style={{
                        flex: "1",
                        height: "auto",
                        width: "100%",
                        maxHeight: "100%",
                    }}
                    src={require("../../image/Carousel/3.jpg")}
                />
                <Image
                    style={{
                        flex: "1",
                        height: "auto",
                        width: "100%",
                        maxHeight: "100%",
                    }}
                    src={require("../../image/Carousel/4.jpg")}
                />
            </Carousel>
        </>
    );
}
