import { worker } from "./mocks/worker";
import Router from "./router/Router";
// if (process.env.NODE_ENV === "development") {
//   worker.start();
// }
worker.start();
function App() {
  return (
    <>
      <Router></Router>
    </>
  );
}

export default App;
