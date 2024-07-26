import { Outlet } from "react-router-dom";
import Header from "./components/common/Header/Header";
import EventInfoFooter from "./components/common/Footer/EventInfoFooter";
import Footer from "./components/common/Footer/Footer";
import Tooltip from "./components/common/Tooltip/Tooltip";

function App() {
  return (
    <>
      <div className="relative">
        <Header />
        <main className="pt-14">
          <Outlet />
        </main>
        <EventInfoFooter />
        <Footer />
        <Tooltip />
      </div>
    </>
  );
}

export default App;
