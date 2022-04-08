import "./App.css";
import CsvReader from "./components/CsvReader.js";
import Navbar from "./components/Navbar.js";
function App() {
  return (
    <div>
      <Navbar />
      <div className="p-10">
        <CsvReader />
      </div>
    </div>
  );
}

export default App;
