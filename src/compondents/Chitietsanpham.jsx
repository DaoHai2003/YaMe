import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [vouchers, setVouchers] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState("loading"); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resProduct = await fetch(`http://localhost:3008/products/${id}`);
        if (!resProduct.ok) throw new Error("Lỗi khi fetch dữ liệu sản phẩm");
        const dataProduct = await resProduct.json();
        setProduct(dataProduct);

        const resSizes = await fetch(`http://localhost:3008/sizes?id_product=${id}`);
        setSizes(await resSizes.json());

        const resColors = await fetch(`http://localhost:3008/colors?id_product=${id}`);
        setColors(await resColors.json());

        const resVouchers = await fetch(`http://localhost:3008/vouchers?id_product=${id}`);
        setVouchers(await resVouchers.json());

        setStatus("success");
      } catch {
        setStatus("error");
      }
    };

    fetchData();
  }, [id]);

  if (status === "loading") return <div className="text-center py-10">Đang tải sản phẩm...</div>;
  if (status === "error") return <div className="text-center py-10 text-red-600">Có lỗi xảy ra</div>;
  if (!product) return <div className="text-center py-10">Sản phẩm không tồn tại</div>;

  // Hàm thay đổi số lượng
  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // Hàm thêm vào giỏ hàng
  const addToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity,
      total: product.price * quantity,
    };

    // lưu vào localStorage (mock giỏ hàng)
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm vào giỏ hàng!");
  };

  // Hàm mua ngay
  const buyNow = () => {
    addToCart();
    window.location.href = "/checkout"; // chuyển sang trang thanh toán (tùy bạn đặt route)
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1280px] mx-auto">
      {/* Ảnh sản phẩm */}
      <div className="md:sticky md:top-0 self-start">
        <img src={`/${product.image || "placeholder.jpg"}`} alt={product.name}  className="w-[70%] mx-auto" />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="w-[100%] mx-auto px-3">
        <div className="text-4xl font-normal leading-normal">{product.name}</div>
        <div className="text-2xl py-3">{Number(product.price).toLocaleString("vi-VN")} ₫</div>

        {/* Màu sắc */}
        <div className="text-gray-700 py-2">Màu sắc</div>
        <div className="flex gap-2 flex-wrap">
          {colors.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedColor(c.name)}
              className={`py-2 px-6 rounded-4xl border 
                ${selectedColor === c.name ? "bg-black text-white" : "bg-white text-black border-gray-600"}`}
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
                ${selectedSize === s.name ? "bg-black text-white" : "bg-white text-black border-gray-600"}`}
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

        {/* Buttons */}
        <div className="py-5">
          <button onClick={addToCart} className="border border-gray-600 w-full py-4">
            Thêm vào giỏ hàng
          </button>
        </div>
        <div>
          <button onClick={buyNow} className="border bg-black text-white w-full py-3">
            Mua ngay
          </button>
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
