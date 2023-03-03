import Routers from "../routes/Routers";
import Header from "./Header";
import Footer from "./Footer";
import { useAppSelector } from "../store/hooks";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
  const sidebarOpen = useAppSelector((state) => state.sidebar.value);

  return (
    <BrowserRouter>
      <div
        className={
          sidebarOpen
            ? "absolute w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-200 overflow-hidden h-screen"
            : "absolute w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-200"
        }
      >
        <Header />
        <Routers />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
