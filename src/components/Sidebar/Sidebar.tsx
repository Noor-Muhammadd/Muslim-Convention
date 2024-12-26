import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";
import { ImFacebook, ImInstagram } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";

export default function Sidebar() {
  return (
    <div
      className="h-screen w-[300px] bg-black text-white"
      style={{
        backgroundImage:
          "url(https://risconvention.com/wp-content/uploads/2024/09/nav_bg-1-345x1024-2.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Logo Section */}
      <div
        className="flex flex-col items-center  mb-28"
        style={{
          padding: "35px 30px",
          fontFamily: "Raleway, sans-serif",
          fontSize: "14px",
        }}
      >
        <Image
          src="https://risconvention.com/wp-content/uploads/2022/08/ris-logo2022.png"
          alt="RIS Logo"
          width={150}
          height={60}
          priority
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col justify-center items-center">
        <a
          href="#"
          className="leading-8 font-semibold hover:bg-[#968972]   flex justify-center items-center w-full text-center uppercase text-[11px] h-[35px] tracking-custom	"
        >
          <FiMinusCircle className="mr-2 font-semibold text-base" />
          BUY TICKETS
        </a>
        <a
          href="#"
          className="leading-8 font-semibold hover:bg-[#968972]   flex justify-center items-center w-full text-center uppercase text-[11px] h-[35px] tracking-custom	"
        >
          Knowledge Retreat
        </a>
        <a
          href="#"
          className="leading-8 font-semibold hover:bg-[#968972]   flex justify-center items-center w-full text-center uppercase text-[11px] h-[35px] tracking-custom	"
        >
          Accessibility Services
        </a>
        <a
          href="#"
          className="leading-8 font-semibold hover:bg-[#968972]   flex justify-center items-center w-full text-center uppercase text-[11px] h-[35px] tracking-custom	"
        >
          RIS TV
        </a>
        <a
          href="#"
          className="leading-8 font-semibold hover:bg-[#968972]   flex justify-center items-center w-full text-center uppercase text-[11px] h-[35px] tracking-custom	"
        >
          Media
        </a>
        <a
          href="#"
          className="leading-8 font-semibold hover:bg-[#968972]  flex justify-center items-center w-full text-center uppercase text-[11px] h-[35px] tracking-custom	"
        >
          Contact Us
        </a>
      </nav>

      {/* Social Media Links */}
      <div className="flex flex-col items-center -mt-14 mr-[290px] space-y-1">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="text-2xl pr-[7px] pl-[40px] py-[7px] bg-[#333333]"
        >
          <ImFacebook />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="text-2xl pr-[7px] pl-[40px] py-[7px] bg-[#333333]"
        >
          <FaTwitter />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="text-2xl pr-[7px] pl-[40px] py-[7px] bg-[#333333]"
        >
          <TfiYoutube />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-2xl pr-[7px] pl-[40px] py-[7px] bg-[#333333]"
        >
          <ImInstagram />
        </a>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm py-4 text-gray-500">
        <p>© Reviving the Islamic Spirit</p>
      </footer>
    </div>
  );
}
