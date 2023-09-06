function ListGroup() {
  const items = ["뉴욕", "샌프란시사코", "도쿄", "런던", "파리"];

  return (
    <>
      <h1>List</h1>
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
