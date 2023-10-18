import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import ResultComponent from "./components/ResultComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListComponent />} />
        <Route path="/result" element={<ResultComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
