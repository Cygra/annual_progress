import React, { useEffect, useState } from "react";
import "./App.css";
import { getProgress, getProgressDisplay } from "./utils";
import { Basic } from "./components";

const App: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  useEffect(() => {
    document.title = getProgressDisplay(getProgress(), 2);
    const interval = setInterval(
      setProgress.bind(undefined, getProgress()),
      100
    );
    return () => clearInterval(interval);
  });
  return (
    <div className="App">
      <Basic progress={progress} />
    </div>
  );
};

export default App;
