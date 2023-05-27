import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pb-20 pt-28">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
