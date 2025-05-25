// import { Outlet } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//       <main className="mt-1">
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Layout;

import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
