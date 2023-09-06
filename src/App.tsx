import ListGroup from "./components/ListGroup";

function App() {
  const items = ["뉴욕", "샌프란시사코", "도쿄", "런던", "파리"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
