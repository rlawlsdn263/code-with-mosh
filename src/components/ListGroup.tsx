import { useState } from "react";

function ListGroup() {
  const items = ["뉴욕", "샌프란시사코", "도쿄", "런던", "파리"];

  //리액트훅
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>리스트 목록 비었음</p>}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              key={item}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
