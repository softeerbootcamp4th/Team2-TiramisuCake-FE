import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 font-sans">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
        <img src="image 147.svg" alt="Hyundai logo" className="w-24 mx-auto mb-6" />
        <nav className="mb-6 flex justify-center items-center space-x-3">
          <Link to="/mobile-app" className="text-sm hover:underline">
            모바일 App
          </Link>
          <span className="text-gray-500">|</span>
          <Link to="/copyright" className="text-sm mx-3 hover:underline">
            저작권안내
          </Link>
          <span className="text-gray-500">|</span>
          <Link to="/privacy-policy" className="text-sm mx-3 hover:underline">
            개인정보 처리방침
          </Link>
          <span className="text-gray-500">|</span>
          <Link to="/terms" className="text-sm mx-3 hover:underline">
            이용약관
          </Link>
          <span className="text-gray-500">|</span>
          <Link to="/privacy-center" className="text-sm mx-3 hover:underline">
            프라이버시 센터
          </Link>
        </nav>
        <p className="text-sm mb-4">고객센터 : 080-600-6000</p>
        <p className="text-xs">COPYRIGHT © HYUNDAI MOTOR COMPANY. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
