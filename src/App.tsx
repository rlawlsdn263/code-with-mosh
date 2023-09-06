import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button mode="danger" onClick={() => console.log("클릭")}>
        버튼
      </Button>
    </div>
  );
}

export default App;
