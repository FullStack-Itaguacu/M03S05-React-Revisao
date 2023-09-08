import { useState } from "react";
import reactLogo from "../../assets/react.svg";

export default function Inicio() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h2>Vite + React</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        Contador: {count}
      </button>
    </main>
  );
}
