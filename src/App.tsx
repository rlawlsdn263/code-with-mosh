import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>경고창</Alert>
      )}
      <Button mode="danger" onClick={() => setAlertVisible(true)}>
        버튼
      </Button>
    </div>
  );
}

export default App;
