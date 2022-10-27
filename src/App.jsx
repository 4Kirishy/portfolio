import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header";
import AnimatedRoutes from "./layouts/AnimatedRoutes";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
