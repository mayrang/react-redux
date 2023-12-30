import React, { useState } from "react";
import times from "lodash/times";
import { MAX_POS } from "../util/constant";

import cn from "classnames";
import useMoveTile from "../hooks/useMoveTile";
import { getInitialTileList } from "../util/tile";
export default function Container({ setScore }) {
  const [tileList, setTileList] = useState(getInitialTileList);
  useMoveTile({ tileList, setTileList, setScore });
  return (
    <div className="game-container" data-ezoic-video-excluded="1">
      <div className="grid-container">
        {times(MAX_POS, () => (
          <div className="grid-row">
            {times(MAX_POS, () => (
              <div className="grid-cell"></div>
            ))}
          </div>
        ))}
      </div>
      <div className="tile-container">
        {tileList.map((item) => (
          <div
            className={cn(`tile tile-${item.value} tile-position-${item.x}-${item.y}`, {
              "tile-new": item.isNew,
              "tile-merged": item.isMerged,
            })}
          >
            <div className="tile-inner">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
