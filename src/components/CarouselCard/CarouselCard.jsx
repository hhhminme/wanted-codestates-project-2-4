import React, { useState } from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { AutoPlay, Pagination } from "@egjs/flicking-plugins";

import * as S from "./style";
function CarouselCard({ likeData }) {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];
  return (
    <S.CarouselWrap>
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
    </S.CarouselWrap>
  );
}

export default CarouselCard;
