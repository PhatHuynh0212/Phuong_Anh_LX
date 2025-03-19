import { Routes, Route } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}></Route>
      <Route>{/* User Layout */}</Route>
    </Routes>
  );
}

export default App;
