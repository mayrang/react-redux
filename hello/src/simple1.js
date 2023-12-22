function LikedButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";

  return <button onClick={() => setLiked(!liked)}>{text}</button>;
  // return React.createElement("button", { onClick: () => setLiked(!liked) }, text);
}

const domContainer = document.getElementById("root");

function ContainerConter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="container">
      <LikedButton />
      <div style={{ marginTop: 20 }}>
        <span style={{ marginRight: 10 }}>현재 카운트 : {count}</span>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </div>
    </div>
  );

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

ReactDOM.render(
  React.createElement(ContainerConter),

  domContainer
);
