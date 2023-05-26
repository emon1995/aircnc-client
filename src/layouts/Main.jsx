import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pb-20 pt-28">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
