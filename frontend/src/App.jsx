import { Routes, Route } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
      <Route>{/* Admin Layout */}</Route>
    </Routes>
  );
}

export default App;
