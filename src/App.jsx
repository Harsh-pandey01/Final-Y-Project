import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  )
}
