import { Header } from "./components/components.js";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  );
}

export default App;
