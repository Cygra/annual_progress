import React, { useEffect, useState } from "react";
import "./App.css";
import { getProgress } from "./utils";
import { Basic } from "./components";

const App: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => setProgress(getProgress()), 100);
    return () => clearInterval(interval);
  });
  return (
    <div className="App">
      <Basic progress={progress} />
    </div>
  );
};

export default App;
