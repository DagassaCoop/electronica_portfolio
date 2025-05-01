import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

// Components
import Header from "@/ui/components/Header";
import Footer from "@/ui/components/Footer";

const App = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.getElementById("root")?.scrollTo(0, 0);
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
