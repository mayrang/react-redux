import { createElement } from "react";
import Button from "./Button";
import { render } from "react-dom";
function Index() {
  return createElement(
    "div",
    { style: { marginTop: 20 } },
    createElement("span", { style: { marginRight: 10 } }, "오늘 기분 : "),
    createElement(Button, { label: "좋아요" }),
    createElement(Button, { label: "싫어요" })
  );
}

const domContainer = document.getElementById("root");

render(createElement(Index), domContainer);
