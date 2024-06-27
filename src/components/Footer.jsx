import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary mt-32 max-w-screen-2xl mx-auto py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-white px-8 md:ml-16">
        <div>
          <h1 className="font-bold mb-2">Artikel</h1>
          <ul className="space-y-1 md:space-y-2 mb-3">
            <li className="text-sm">Home</li>
            <li className="text-sm">Menu</li>
            <li className="text-sm">Tentang Kami</li>
            <li className="text-sm">Kontak</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold mb-2">Tentang Kami</h1>
          <ul className="space-y-2">
            <li className="text-xs">Jl.Rasyid Baswedan No.01, Konohagakure</li>
            <li className="text-xs">+6281234567890</li>
            <li className="text-xs">info.sobaksoo@gmail.com</li>
          </ul>
        </div>
        <div className="flex flex-col md:items-center space-y-2">
          <h1 className="font-bold mb-2">Sosial Media</h1>
          <div className="flex space-x-6">
            <FaFacebook className="hover:scale-125 transition-all duration-100" />
            <FaInstagram className="hover:scale-125 transition-all duration-100" />
            <FaTiktok className="hover:scale-125 transition-all duration-100" />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="text-xs">@2024 SoBaksoo. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
