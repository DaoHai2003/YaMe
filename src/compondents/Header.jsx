import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Khi cuộn xuống sẽ làm navbar mờ + shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full fixed top-0 z-50 ">
      {/* Banner thông báo */}
      <div className={`text-white p-2 text-sm text-center  transition-all  duration-500 ${
        isScrolled
            ? "  backdrop-blur-md shadow-md -translate-y-20"
            : "bg-black "
      } `}>
        🚚 MIỄN PHÍ SHIP tất cả các đơn hàng
      </div>

      {/* Navbar chính */}
      <div
        className={`w-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-md -translate-y-10"
            : "bg-transparent "
        }`}
      >
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-4">
          {/* Logo */}
          <Link to={`/`}>
            <div className="p-4 font-bold text-2xl tracking-wide text-gray-900">
              NHÓM 3
            </div>
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:block">
            <ul className="flex text-gray-900 font-medium text-base">
              <li className="px-4 hover:text-black transition">KHUYẾN MÃI</li>
              <li className="px-4 hover:text-black transition">GU</li>

              {/* ÁO */}
              <li
                className="px-4 relative group"
                onMouseEnter={() => setOpenMenu("ao")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link to="/Ao" className="hover:text-black transition">
                  ÁO
                </Link>
                {/* Dropdown */}
                <div
                  className={`absolute left-[50%] -translate-[35%] top-9 mt-2 w-[800px] h-[300px] bg-white/70 backdrop-blur-md shadow-md   p-6 flex gap-10 transition-all duration-300 transform ${
                    openMenu === "ao"
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-5 invisible"
                  }`}
                >
                  {/* Cột 1 - Áo Thun */}
                  <div>
                    <h3 className="font-bold mb-2">ÁO THUN</h3>
                    <hr className="text-gray-700 pb-3" />
                    <ul className="space-y-2 text-gray-600 ">
                      <li><Link to="/Ao/Thun" className="hover:text-black hover:text-[18px] transition-all  duration-200">Tất cả Áo Thun</Link></li>
                      <li><Link to="/Ao/Thun/Co-Tron" className="hover:text-black hover:text-[18px] transition-all  duration-200">Áo Thun Cổ Tròn</Link></li>
                      <li><Link to="/Ao/Thun/Polo" className="hover:text-black hover:text-[18px] transition-all  duration-200">Áo Thun Polo</Link></li>
                      <li><Link to="/Ao/Thun/Polo" className="hover:text-black hover:text-[18px] transition-all  duration-200">Áo Thun Cổ tròn tay ngắn</Link></li>
                    </ul>
                  </div>
                  {/* Cột 2 - Áo Sơ Mi */}
                  <div>
                    <h3 className="font-bold mb-2">ÁO SƠ MI</h3>
                     <hr className="text-gray-700 pb-3" />
                    <ul className="space-y-2 text-gray-600">
                      <li><Link to="/Ao/Somi" className="hover:text-black">Tất cả Áo Sơ Mi</Link></li>
                      <li><Link to="/Ao/Somi/Tay-Ngan" className="hover:text-black">Áo Sơ Mi Tay Ngắn</Link></li>
                      <li><Link to="/Ao/Somi/Tay-Dai" className="hover:text-black">Áo Sơ Mi Tay Dài</Link></li>
                    </ul>
                  </div>
                  {/* Cột 3 - Áo Khoác */}
                  <div>
                    <h3 className="font-bold mb-2">ÁO KHOÁC</h3>
                     <hr className="text-gray-700 pb-3" />
                    <ul className="space-y-2 text-gray-600">
                      <li><Link to="/Ao/Khoac" className="hover:text-black">Tất cả Áo Khoác</Link></li>
                      <li><Link to="/Ao/Khoac/Jean" className="hover:text-black">Áo Khoác Jean</Link></li>
                      <li><Link to="/Ao/Khoac/Hoodie" className="hover:text-black">Áo Khoác Hoodie</Link></li>
                    </ul>
                  </div>
                </div>
              </li>

               {/* Quần */}
              <li
                className="px-4 relative group"
                onMouseEnter={() => setOpenMenu("quan")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link to="/Quan" className="hover:text-black transition">
                  QUẦN
                </Link>
                {/* Dropdown */}
                <div
                  className={`absolute left-[50%] -translate-[43%] top-9 mt-2 w-[800px] h-[300px] bg-white/70 backdrop-blur-md shadow-md   p-6 flex gap-10 transition-all duration-300 transform ${
                    openMenu === "quan"
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-5 invisible"
                  }`}
                >
                  {/* Cột 1 - Áo Thun */}
                  <div>
                    <h3 className="font-bold mb-2">QUẦN SHORT</h3>
                    <hr className="text-gray-700 pb-3" />
                    <ul className="space-y-2 text-gray-600 ">
                      <li><Link to="/Quan/Short" className="hover:text-black hover:text-[18px] transition-all  duration-200">Quần Short Shun</Link></li>
                      <li><Link to="/Ao/Thun/Co-Tron" className="hover:text-black hover:text-[18px] transition-all  duration-200">Quần Short Boxer</Link></li>
                      <li><Link to="/Ao/Thun/Polo" className="hover:text-black hover:text-[18px] transition-all  duration-200">Quần Short Dù</Link></li>
                      <li><Link to="/Ao/Thun/Polo" className="hover:text-black hover:text-[18px] transition-all  duration-200">Quần Short KaKi</Link></li>
                      <li><Link to="/Ao/Thun/Polo" className="hover:text-black hover:text-[18px] transition-all  duration-200">Quần Short CaRo</Link></li>
  
  
                      </ul>
                  </div>
                  {/* Cột 2 - Áo Sơ Mi */}
                  <div>
                 <Link to="/Quan/Dai" className="hover:text-black"><h3 className="font-bold mb-2">QUẦN DÀI</h3></Link>
                     <hr className="text-gray-700 pb-3" />
                    <ul className="space-y-2 text-gray-600">
                        <li><Link to="/Quan/Dai/Jogger" className="hover:text-black">Quần dài jogger</Link></li>
                    </ul>
                  </div>
                  {/* Cột 3 - Áo Khoác */}
                  <div>
                  <Link to="/Quan/Jean" className="hover:text-black"><h3 className="font-bold mb-2">QUẦN JEAN</h3></Link>
                     <hr className="text-gray-700 pb-3" />
                    <ul className="space-y-2 text-gray-600">
                      <li><Link to="/Quan/Jean/Boxer" className="hover:text-black">Quần jean boxer</Link></li>
          
                    </ul>
                  </div>
                  {/* cột 4 */}
                  <div>
                    <h3 className="font-bold mb-2">QUẦN LÓT</h3>
                     <hr className="text-gray-700 pb-3" />
                    <ul className="space-y-2 text-gray-600">
                      <li><Link to="/Ao/Khoac" className="hover:text-black">Tất cả Áo Khoác</Link></li>
                      <li><Link to="/Ao/Khoac/Jean" className="hover:text-black">Áo Khoác Jean</Link></li>
                      <li><Link to="/Ao/Khoac/Hoodie" className="hover:text-black">Áo Khoác Hoodie</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="px-4 hover:text-black transition">PHỤ KIỆN</li>
              <li className="px-4 hover:text-black transition">MỚI</li>
              <li className="px-4 hover:text-black transition">CỬA HÀNG</li>
            </ul>
          </div>

          {/* Icon bên phải */}
          <div className="flex items-center space-x-4">
            <i className="fa-solid fa-magnifying-glass text-xl cursor-pointer hidden md:block"></i>
            <i className="fa-regular fa-user text-xl cursor-pointer hidden md:block"></i>
            <i className="fa-solid fa-cart-arrow-down text-xl cursor-pointer hidden md:block"></i>

            {/* Icon mobile menu */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-2xl p-6 transform transition-transform duration-500 z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          ✕
        </button>
        <div className="flex flex-col space-y-6 mt-10 text-lg font-medium">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>KHUYẾN MÃI</Link>
          <Link to="/gu" onClick={() => setIsMobileMenuOpen(false)}>GU</Link>
          <Link to="/Ao" onClick={() => setIsMobileMenuOpen(false)}>ÁO</Link>
          <Link to="/quan" onClick={() => setIsMobileMenuOpen(false)}>QUẦN</Link>
          <Link to="/phukien" onClick={() => setIsMobileMenuOpen(false)}>PHỤ KIỆN</Link>
          <Link to="/moi" onClick={() => setIsMobileMenuOpen(false)}>MỚI</Link>
          <Link to="/cuahang" onClick={() => setIsMobileMenuOpen(false)}>CỬA HÀNG</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
