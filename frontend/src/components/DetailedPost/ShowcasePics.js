import React from "react";
import Carousel from "better-react-carousel"



export function ShowcasePics(imgAddress){
    return(
        <div >
            <Carousel cols={2} rows={1} gap={0} showDots={"true"} loop className="sm:flex sm:items-center sm:justify-between">
                <Carousel.Item>
                    <img object-fit="contain" src="https://picsum.photos/200/100.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="50%" object-fit="contain" src="https://picsum.photos/200/100.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img object-fit="contain" src="https://picsum.photos/200/300.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img object-fit="contain" src="https://picsum.photos/200/300.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img object-fit="contain" src="https://picsum.photos/200/300.jpg"/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


