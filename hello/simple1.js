function LikedButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text);
  // return React.createElement("button", { onClick: () => setLiked(!liked) }, text);
}
const domContainer = document.getElementById("root");
function ContainerConter() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(LikedButton, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 10
    }
  }, "\uD604\uC7AC \uCE74\uC6B4\uD2B8 : ", count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "\uAC10\uC18C")));

  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement(LikedButton),
  //   React.createElement(
  //     "div",
  //     { style: { marginTop: 20 } },
  //     React.createElement("span", { style: { marginRight: 10 } }, `현재 카운트 : ${count}`),
  //     React.createElement("button", { onClick: () => setCount(count + 1) }, "증가"),
  //     React.createElement("button", { onClick: () => setCount(count - 1) }, "감소")
  //   )
  //);
}
ReactDOM.render(React.createElement(ContainerConter), domContainer);