function ListGroup() {
  let items = ["뉴욕", "샌프란시사코", "도쿄", "런던", "파리"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>리스트 목록 비었음</p>}
      <ul className="list-group">
        {items.map((item) => {
          return (
            <li key={item} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
