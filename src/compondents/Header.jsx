import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full ">
      <div className="text-white bg-black p-2 text-1xl text-center">
        MIỄN PHÍ SHIP tất cả các đơn hàng
      </div>
      <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto">
        <Link  to={`/`} ><div className="p-4 font-semibold text-2xl">OadIaH</div></Link>
        <div className="p-4 hidden md:block text-base md:text-sm lg:text-lg  ">
          <ul className="flex ">
            <li className="px-3 cursor-pointer">KHUYẾN MÃI</li>
            <li className="px-3 cursor-pointer">GU</li>
           <Link to={`/Ao`}> <li className="px-3 cursor-pointer">ÁO</li></Link>
            <li className="px-3 cursor-pointer">QUẦN</li>
            <li className="px-3 cursor-pointer">PHỤ KIỆN</li>
            <li className="px-3 cursor-pointer">MỚI</li>
            <li className="px-3 cursor-pointer">CỬA HÀNG</li>
          </ul>
        </div>
        <div className="p-4 flex items-center space-x-4">
          <i className="fa-solid fa-magnifying-glass text-2xl"></i>
          <i className="fa-regular fa-user text-2xl"></i>
          <i className="fa-solid fa-cart-arrow-down text-2xl"></i>
        </div>
        <div className="md:hidden p-4">
          <i className="fa-solid fa-bars text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;