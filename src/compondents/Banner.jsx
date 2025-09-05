
import banner from '/images/banner.jpg';

const Banner = ({ title_banner }) => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative mb-10"
      style={{ backgroundImage: `url(${banner})` }}
    >
        <div className='bg-black w-full h-full absolute opacity-35'></div>
        <div className=' text-white xl:text-4xl lg:text-2xl absolute top-[37%] left-[50%] -translate-x-[50%] text-center md:text-xl font-bold '>{ title_banner }</div>
        <div className=' text-white xl:text-2xl lg:text-xl md:text-lg absolute top-[55%] left-[50%] -translate-x-[50%] text-center '>BÃO SALE THÁNG 8</div>
        <div className='text-white text-1xl absolute top-[65%] left-[50%] -translate-x-[50%] text-center'>
            <button className=' border-2 py-3 px-5'>SĂN SALE NGAY</button>
        </div>
        {/* inline chạy chữu  quảng cáo */}
      <div class="w-full  stock-ticker flex gap-5 py-2  bg-black text-white overflow-hidden select-none absolute -bottom-10 ">
        <ul class="flex-shrink-0 min-w-full flex justify-between items-center gap-5 animate-scroll">
          <li>Miễn phí ship toàn quốc</li>
          <li>Nhập mã giảm 20%</li>
          <li>Giao hàng nhanh chóng</li>
          <li>Quần áo chính hãng 100%</li>
          <li>Ưu đãi hấp dẫn mỗi tuần</li>
          <li>Hoàn tiền 200% nếu hàng giả</li>
          <li>Miễn phí đổi trả trong 7 ngày</li>
          <li>Khuyến mãi lên tới 50%</li>
        </ul>
        <ul aria-hidden="true" class="flex-shrink-0 min-w-full flex justify-between items-center gap-5 animate-scroll">
          <li>Miễn phí ship toàn quốc</li>
          <li>Nhập mã giảm 20%</li>
          <li>Giao hàng nhanh chóng</li>
          <li>Quần áo chính hãng 100%</li>
          <li>Ưu đãi hấp dẫn mỗi tuần</li>
          <li>Hoàn tiền 200% nếu hàng giả</li>
          <li>Miễn phí đổi trả trong 7 ngày</li>
          <li>Khuyến mãi lên tới 50%</li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;