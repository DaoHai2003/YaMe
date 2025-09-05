
const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4  gap-6 py-12 px-4 pl-[7%] pr-[7%] ">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">
            <i className="fa-solid fa-truck-fast"></i>
          </div>
          <div>
            MIỄN PHÍ SHIP <br />
            <span className="text-gray-300 text-sm">Toàn quốc</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-3xl">
            <i className="fa-solid fa-ticket-simple"></i>
          </div>
          <div>
            VOUCHER 20% <br />
            <span className="text-gray-300 text-sm">cho khách mới</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-3xl">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <div>
            BẢO HÀNH <br />
            <span className="text-gray-300 text-sm">365 ngày</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-3xl">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div>
            ĐỊA CHỈ <br />
            <span className="text-gray-300 text-sm">cửa hàng YaMe VN</span>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 max-w-[1280px] mx-auto" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 pl-[7%] pr-[7%] gap-8 py-10 px-4">
        <div>
          <h3 className="font-bold mb-3">CHÍNH SÁCH</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white">Chính sách đổi hàng</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Chính sách bảo hành</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">HỆ THỐNG CỬA HÀNG</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>TP. Hồ Chí Minh</li>
            <li>Hà Nội</li>
            <li>Hải Phòng</li>
            <li>Biên Hoà - Bình Dương</li>
            <li>Đà Nẵng</li>
            <li>Nha Trang</li>
            <li>Vũng Tàu</li>
            <li>Cần Thơ</li>
            <li>Long Xuyên</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">THÔNG TIN</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Thông tin liên hệ</li>
            <li>Thanh toán - Trả góp</li>
            <li>Liên hệ đối tác doanh nghiệp</li>
            <li>Vận chuyển & Giao nhận</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">VỀ CHÚNG TÔI</h3>
          <p className="text-sm text-gray-300 mb-3">
            YaMe - Quần áo đẹp nhứt nách
          </p>
          <div className="flex space-x-3">
                <i class="fa-brands fa-facebook text-2xl"></i>
                <i class="fa-brands fa-youtube text-2xl"></i>
                <i class="fa-brands fa-instagram text-2xl"></i>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4 text-center text-gray-400 text-xs">
        © 2025 Công ty TNHH Đào Hải Việt Nam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
