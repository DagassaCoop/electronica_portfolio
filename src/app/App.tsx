import { Outlet } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const App = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
