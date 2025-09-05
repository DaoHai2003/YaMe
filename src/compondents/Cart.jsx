import { Trash2 } from 'lucide-react';
import non from '/images/Ao_1.jpg'

const Cart = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <p className="text-3xl font-semibold">Giỏ hàng của bạn</p>
        <p className="text-gray-600 cursor-pointer hover:underline">Tiếp tục mua sắm</p>
      </div>
      <hr className="w-full my-4 border-gray-300" />
      {/* Titles - chỉ hiện desktop */}
      <div className="hidden md:grid grid-cols-12 text-gray-500 text-sm font-medium pb-2 border-b border-gray-300">
        <div className="col-span-6">SẢN PHẨM</div>
        <div className="col-span-5 text-center">SỐ LƯỢNG</div>
        <div className="col-span-1 text-right">TỔNG</div>
      </div>

      {/* Product Item */}
      <div className="flex flex-wrap md:grid md:grid-cols-12 gap-4 border-b border-gray-200 py-6">
        {/* ==== Cột sản phẩm ==== */}
        <div className="flex gap-4 md:col-span-6 flex-1 min-w-[200px]">
          <img
            src={non}
            alt="Áo Thun"
            className="w-full max-w-[100px]  object-cover border"
          />
          <div className="flex flex-col justify-center">
            <p className="font-medium">Áo Thun The Beginner M002 Đen</p>
            <p className="text-gray-600">109.000đ</p>
            <p className="text-gray-500">Color: Đen</p>
            <p className="text-gray-500">Size: S</p>

            {/* Mobile: Số lượng nằm dưới sản phẩm */}
            <div className="flex mt-3  md:hidden">
              <button className="border border-gray-400 w-[50px] h-[45px] text-lg">-</button>
              <span className="border border-gray-400 w-[50px] h-[45px] border-x-0 flex items-center justify-center">
                2
              </span>
              <button className="border border-gray-400 w-[50px] h-[45px] text-lg">+</button>
              <button className="ml-2 text-gray-500 hover:text-red-600">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
        {/* ==== Desktop: Số lượng ==== */}
        <div className="hidden md:flex md:col-span-5 justify-center items-center ">
          <button className="border border-gray-400 w-[50px] h-[45px] text-lg">-</button>
          <span className="border border-gray-400 w-[50px] h-[45px] border-x-0 flex items-center justify-center">
            2
          </span>
          <button className="border border-gray-400 w-[50px] h-[45px] text-lg">+</button>
          <button className="ml-2 text-gray-500 hover:text-red-600">
            <Trash2 size={20} />
          </button>
        </div>

        {/* ==== Tổng tiền ==== */}
        <div className="flex items-center justify-end md:col-span-1 min-w-[100px]">
        <p className="font-medium text-gray-800">218.000đ</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;