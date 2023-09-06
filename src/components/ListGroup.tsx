import { useState } from "react";

interface ListGroupInterface {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; //onClick
}

function ListGroup({ items, heading, onSelectItem }: ListGroupInterface) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
                onSelectItem(item);
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
