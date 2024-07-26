import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <header className="bg-white w-full h-14 flex fixed items-center justify-between px-6 shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <img
            onClick={() => handleTabClick("")}
            src="image 113.svg"
            alt="Hyundai logo"
            className="flex-shrink-0 px-2 ml-10"
            style={{ width: "8.3125rem", height: "1.0625rem" }}
          />
        </Link>
      </div>
      <nav className="flex space-x-12 mr-20">
        <Link
          to="/"
          onClick={() => handleTabClick("event")}
          className={`${activeTab === "event" ? "text-green-400" : "text-black"}`}
        >
          Event
        </Link>
        <Link
          to="/"
          onClick={() => handleTabClick("ioniq5")}
          className={`${activeTab === "ioniq5" ? "text-green-400" : "text-black"}`}
        >
          The new IONIQ 5
        </Link>
      </nav>
    </header>
  );
};

export default Header;
