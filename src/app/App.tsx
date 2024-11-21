import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Outlet />
      </div>
    </>
  );
};

export default App;
