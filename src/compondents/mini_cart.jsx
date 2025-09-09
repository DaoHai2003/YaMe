import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MiniCart = ({ isOpen, onClose }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(storedCart);
    };

    loadCart();

    // lắng nghe sự kiện khi thêm vào giỏ hàng
    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, [isOpen]);

  // tính tổng toàn bộ giỏ hàng
  const totalAmount = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );
  return (
     <div
    className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-lg z-50 p-4 transform transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 ">
        <p className="font-medium">Mặt hàng đã thêm vào giỏ</p>
        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      {/* Nội dung */}
      {cart.length > 0 ? (
        <div className="max-h-[60vh] overflow-y-auto">
          {cart.map((item, index) => (
            <div key={index} className="flex gap-3 py-3 border-b">
              <img
                src={`/${item.image || "placeholder.jpg"}`}
                alt={item.name}
                className="w-[60px] h-[60px] object-cover border"
              />
              <div className="flex flex-col text-sm">
                <p className="font-semibold">{item.name}</p>
                {item.color && (
                  <p className="text-gray-500">Color: {item.color}</p>
                )}
                {item.size && (
                  <p className="text-gray-500">Size: {item.size}</p>
                )}
                <p className="text-gray-700">
                  {item.quantity} x {Number(item.price).toLocaleString("vi-VN")}₫ ={" "}
                  <span className="font-semibold">
                    {(item.quantity * Number(item.price)).toLocaleString("vi-VN")}₫
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 py-4">Chưa có sản phẩm nào</p>
      )}

      {/* Tổng cộng */}
      {cart.length > 0 && (
        <div className="flex justify-between items-center font-semibold text-lg py-3 border-t mt-2">
          <span>Tổng cộng:</span>
          <span>{totalAmount.toLocaleString("vi-VN")}₫</span>
        </div>
      )}

      {/* Actions */}
      <div className="mt-4 flex flex-col gap-3">
        <button
          onClick={() => {
            onClose();
            navigate("/CartPages");
          }}
          className="border py-2"
        >
          Xem giỏ hàng ({cart.length})
        </button>
        <button
          onClick={() => {
            onClose();
            navigate("/checkout");
          }}
          className="bg-black text-white py-2"
        >
          Thanh toán
        </button>
        <button onClick={onClose} className="text-gray-600 underline text-sm">
          Tiếp tục mua sắm
        </button>
      </div>
    </div>
  );
};

export default MiniCart;
