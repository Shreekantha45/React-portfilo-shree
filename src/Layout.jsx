import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
