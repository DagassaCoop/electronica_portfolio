import { Outlet } from "react-router-dom";

// Components
import Header from "@/components/shared/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Outlet />
      </div>
    </>
  );
};

export default App;
