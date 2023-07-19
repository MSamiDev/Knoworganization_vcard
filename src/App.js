import { Route, Routes } from "react-router-dom";
import MohammadSami from "./pages/MohammadSami";
import Faizali from "./pages/Faizali";
import Affan from "./pages/Affan";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/mohammadsami" element={<MohammadSami />} />
        <Route path="/faizali" element={<Faizali />} />
        <Route path="/affan" element={<Affan />} />
      </Routes>
    </div>
  );
}

export default App;
