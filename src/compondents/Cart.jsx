import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increaseQty = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    updateCart(newCart);
  };

  const decreaseQty = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      updateCart(newCart);
    }
  };

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    updateCart(newCart);
  };

  // 👉 luôn tính lại tổng từ price * quantity
  const totalCart = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <p className="text-3xl font-semibold">Giỏ hàng của bạn</p>
        <a href="/" className="text-gray-600 cursor-pointer hover:underline">
          Tiếp tục mua sắm
        </a>
      </div>
      <hr className="w-full my-4 border-gray-300" />

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 py-10">Giỏ hàng trống</p>
      ) : (
        <>
          <div className="hidden md:grid grid-cols-12 text-gray-500 text-sm font-medium pb-2 border-b border-gray-300">
            <div className="col-span-6">SẢN PHẨM</div>
            <div className="col-span-5 text-center">SỐ LƯỢNG</div>
            <div className="col-span-1 text-right">TỔNG</div>
          </div>

          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap md:grid md:grid-cols-12 gap-4 border-b border-gray-200 py-6"
            >
              <div className="flex gap-4 md:col-span-6 flex-1 min-w-[200px]">
                <img
                  src={`/${item.image || "placeholder.jpg"}`}
                  alt={item.name}
                  className="w-full max-w-[100px] object-cover border"
                />
                <div className="flex flex-col justify-center">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">
                    {Number(item.price).toLocaleString("vi-VN")}₫
                  </p>
                  {item.color && (
                    <p className="text-gray-500">Màu: {item.color}</p>
                  )}
                  {item.size && (
                    <p className="text-gray-500">Size: {item.size}</p>
                  )}

                  {/* Mobile: số lượng */}
                  <div className="flex mt-3 md:hidden items-center">
                    <button
                      onClick={() => decreaseQty(index)}
                      className="border border-gray-400 w-[45px] h-[40px] text-lg"
                    >
                      -
                    </button>
                    <span className="border border-gray-400 w-[45px] h-[40px] border-x-0 flex items-center justify-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQty(index)}
                      className="border border-gray-400 w-[45px] h-[40px] text-lg"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(index)}
                      className="ml-2 text-gray-500 hover:text-red-600"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Desktop: số lượng */}
              <div className="hidden md:flex md:col-span-5 justify-center items-center">
                <button
                  onClick={() => decreaseQty(index)}
                  className="border border-gray-400 w-[45px] h-[40px] text-lg"
                >
                  -
                </button>
                <span className="border border-gray-400 w-[45px] h-[40px] border-x-0 flex items-center justify-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQty(index)}
                  className="border border-gray-400 w-[45px] h-[40px] text-lg"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(index)}
                  className="ml-2 text-gray-500 hover:text-red-600"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              {/* Tổng tiền từng sp */}
              <div className="flex items-center justify-end md:col-span-1 min-w-[100px]">
                <p className="font-medium text-gray-800">
                  {(Number(item.price) * item.quantity).toLocaleString("vi-VN")}₫
                </p>
              </div>
            </div>
          ))}

          {/* Tổng giỏ hàng */}
          <div className="flex justify-end py-6">
            <div className="text-right">
              <p className="text-lg">
                Tổng cộng:{" "}
                <span className="font-bold text-xl">
                  {Number(totalCart).toLocaleString("vi-VN")}₫
                </span>
              </p>
              <button className="mt-4 bg-black text-white px-6 py-3">
                Thanh toán
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
