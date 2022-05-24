import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage"
import ErrorPage from "./pages/ErrorPage"
import TripDetailsPage from "./pages/TripDetailsPage"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage/>} />
        <Route path={"/admin"} element={<AdminPage/>} />
        <Route path={"*"} element={<ErrorPage/>} />
        <Route path={"/trip/:id"} element={<TripDetailsPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
