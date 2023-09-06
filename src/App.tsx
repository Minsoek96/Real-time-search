import React, { useEffect } from "react";

import { worker } from "./mocks/worker";
if (process.env.NODE_ENV === "development") {
  worker.start();
}

function App() {
  useEffect(() => {
    fetch("/search?query=아").then((res) => res.json());
  }, []);

  return <div className="App"></div>;
}

export default App;
