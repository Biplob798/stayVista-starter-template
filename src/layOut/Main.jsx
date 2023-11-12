import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navBar/NavBar";
import Footer from "../components/shared/footer/Footer";
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
