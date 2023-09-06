import { MouseEvent } from "react";

function ListGroup() {
  const items = ["뉴욕", "샌프란시사코", "도쿄", "런던", "파리"];

  //이벤트 핸들러
  const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>리스트 목록 비었음</p>}
      <ul className="list-group">
        {items.map((item) => {
          return (
            <li key={item} className="list-group-item" onClick={handleClick}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
