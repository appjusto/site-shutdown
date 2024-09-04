import logo from "@/../public/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 py-4 lg:py-8 flex justify-center bg-white shadow-sm z-50">
      <Image
        src={logo}
        alt="appjusto logo"
        className="w-28 lg:w-44"
        priority
        unoptimized
      />
    </div>
  );
}
