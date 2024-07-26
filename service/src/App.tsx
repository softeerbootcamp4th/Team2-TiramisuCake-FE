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
        <div className="lottery-effect font-pretend">pretendard 하잉 안녕하세요오 Montserrat</div>
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
