import React, { useState } from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { AutoPlay, Pagination } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";

function CarouselCard({ likeData }) {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];
  return (
    <CarouselWrap>
      <Flicking
        plugins={plugins}
        align="prev"
        circular={true}
        onMoveEnd={e => {
          console.log(e);
        }}
      >
        {likeData &&
          likeData.map((value, index) => (
            <div>
              <a href={value.link}>
                <img src={value.image} alt={value.title} />
              </a>
              <div>{value.title}</div>
            </div>
          ))}
      </Flicking>
    </ㅊ>
  );
}

export default CarouselCard;
