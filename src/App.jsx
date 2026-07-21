import { Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout/PublicLayout";
import Home from "./pages/public/Home";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;