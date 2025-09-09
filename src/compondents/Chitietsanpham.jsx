import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MiniCart from "./mini_cart";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [vouchers, setVouchers] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState("loading"); // loading | success | not-found | error
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch product
        const resProduct = await fetch(`http://localhost:3003/products/${id}`);
        if (!resProduct.ok) throw new Error("Lỗi khi fetch dữ liệu sản phẩm");
        const dataProduct = await resProduct.json();

        // Nếu không có product
        if (!dataProduct || !dataProduct.id) {
          setStatus("not-found");
          return;
        }

        // Fetch image
        const resImage = await fetch(`http://localhost:3003/images?id_product=${id}`);
        const dataImage = await resImage.json();
        const imagePath = dataImage.length > 0 ? dataImage[0].images : "placeholder.jpg";

        setProduct({
          ...dataProduct,
          image: imagePath,
        });

        // Fetch sizes
        const resSizes = await fetch(`http://localhost:3003/sizes?id_product=${id}`);
        setSizes(await resSizes.json());

        // Fetch colors
        const resColors = await fetch(`http://localhost:3003/colors?id_product=${id}`);
        setColors(await resColors.json());

        // Fetch vouchers
        const resVouchers = await fetch(`http://localhost:3003/vouchers?id_product=${id}`);
        setVouchers(await resVouchers.json());

        setStatus("success");
      } catch (err) {
        console.error("❌ Lỗi fetch:", err);
        setStatus("error");
      }
    };

    fetchData();
  }, [id]);

  // ---- UI theo trạng thái ----
  if (status === "loading") return <div className="text-center py-10">Đang tải sản phẩm...</div>;
  if (status === "error") return <div className="text-center py-10 text-red-600">Có lỗi xảy ra, vui lòng thử lại.</div>;
  if (status === "not-found") return <div className="text-center py-10">Sản phẩm không tồn tại.</div>;

  // ---- Xử lý số lượng ----
  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // ---- Thêm vào giỏ hàng ----
  const addToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: Number(product.price),
      size: selectedSize,
      color: selectedColor,
      quantity,
      image: product.image,
    };

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingIndex = cart.findIndex(
      (item) =>
        item.id === cartItem.id &&
        item.size === cartItem.size &&
        item.color === cartItem.color
    );

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += cartItem.quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    setIsCartOpen(true);
  };

  // ---- Mua ngay ----
  const buyNow = () => {
    addToCart();
    window.location.href = "/checkout";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1280px] mx-auto mt-30">
      {/* Ảnh sản phẩm */}
      <div className="md:sticky md:top-0 self-start">
        <img
          src={`/${product.image || "placeholder.jpg"}`}
          alt={product.name}
          className="w-[70%] mx-auto"
        />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="w-[100%] mx-auto px-3">
        <div className="text-4xl font-normal leading-normal">{product.name}</div>
        <div className="text-2xl py-3">
          {Number(product.price).toLocaleString("vi-VN")} ₫
        </div>

        {/* Màu sắc */}
        <div className="text-gray-700 py-2">Màu sắc</div>
        <div className="flex gap-2 flex-wrap">
          {colors.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedColor(c.name)}
              className={`py-2 px-6 rounded-4xl border 
                ${selectedColor === c.name
                  ? "bg-black text-white"
                  : "bg-white text-black border-gray-600"
                }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Size */}
        <div className="text-gray-700 py-2">Kích thước</div>
        <div className="flex gap-2 flex-wrap">
          {sizes.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedSize(s.name)}
              className={`py-2 px-6 rounded-4xl border 
                ${selectedSize === s.name
                  ? "bg-black text-white"
                  : "bg-white text-black border-gray-600"
                }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Số lượng */}
        <div className="text-gray-700 py-3">Số lượng</div>
        <div className="flex items-center">
          <button onClick={decreaseQty} className="w-[40px] h-[40px] border border-gray-600">-</button>
          <div className="w-[50px] h-[40px] border-t border-b border-gray-600 flex items-center justify-center">
            {quantity}
          </div>
          <button onClick={increaseQty} className="w-[40px] h-[40px] border border-gray-600">+</button>
        </div>

        {/* Buttons */}
        <div className="py-5">
          <button
            onClick={addToCart}
            disabled={!selectedSize || !selectedColor}
            className={`w-full py-4 border border-gray-600 
              ${!selectedSize || !selectedColor
                ? " text-gray-500 cursor-not-allowed"
                : "bg-white text-black "}`}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
        <div>
          <MiniCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <button onClick={buyNow} className="border bg-black text-white w-full py-3">
            Mua ngay
          </button>
        </div>

        {/* Voucher */}
        <div className="mt-4">
          <h3 className="text-gray-700 font-semibold">Voucher</h3>
          {vouchers.length > 0 ? (
            <ul className="list-disc list-inside text-gray-600">
              {vouchers.map((v) => (
                <li key={v.id} className="list-none">
                  <span className="font-bold">{v.code}</span> - {v.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Sản phẩm không có hỗ trợ voucher</p>
          )}
        </div>

        {/* Mô tả */}
        <div className="border border-gray-600 border-r-0 border-t-0 border-l-0 py-2 mt-4">
          THÔNG TIN SẢN PHẨM
          <p className="text-gray-600">{product.des}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
