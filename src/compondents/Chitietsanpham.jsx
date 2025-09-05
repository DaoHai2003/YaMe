import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading"); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3003/products/${id}`);
        if (!res.ok) throw new Error("Lỗi khi fetch dữ liệu sản phẩm");
        const data = await res.json();
        setProduct(data);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    };

    fetchProduct();
  }, [id]);

  if (status === "loading") return <div className="text-center py-10">Đang tải sản phẩm...</div>;
  if (status === "error") return <div className="text-center py-10 text-red-600">Có lỗi xảy ra</div>;
  if (!product) return <div className="text-center py-10">Sản phẩm không tồn tại</div>;

  // Khi fetch thành công
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1280px] mx-auto">
      {/* Ảnh sản phẩm */}
      <div className="md:sticky md:top-0 self-start">
        <img src={`/${product.image}`} alt={product.name}  className="w-[70%] mx-auto" />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="w-[100%] mx-auto px-3">
        <div className="text-4xl font-normal leading-normal">{product.name}</div>
        <div className="text-2xl py-3">{Number(product.price).toLocaleString("vi-VN")}</div>

        <div className="text-gray-700">Phí vận chuyển được tính khi thanh toán</div>
        <div className="text-gray-700 py-2">Color</div>
        <div>
          <button className="bg-black text-white py-2 px-6 rounded-4xl">Đen</button>
        </div>

        <div className="text-gray-700 py-2">Size</div>
        <div className="space-x-4">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button key={size} className="border border-gray-600 py-2 px-6 rounded-4xl">
              {size}
            </button>
          ))}
        </div>

        <div className="text-gray-700 py-3">Số lượng</div>
        <div>
          <button className="w-[40px] h-[40px] border border-gray-600 border-r-0 cursor-pointer">-</button>
          <button className="w-[40px] h-[40px] border border-gray-600 cursor-pointer">1</button>
          <button className="w-[40px] h-[40px] border border-gray-600 border-l-0 cursor-pointer">+</button>
        </div>

        <div className="py-5">
          <button className="border border-gray-600 w-full py-4">THÊM VÀO GIỎ HÀNG</button>
        </div>
        <div>
          <p className="text-center font-bold">FLASH SALE</p>
        </div>
        <div className="py-5">
          <button className="border bg-black text-white w-full py-3">MUA NGAY</button>
        </div>
        <div className="font-bold text-gray-600 pb-5">
          Nhập mã NEW01 GIẢM 20% đơn đầu tiên
        </div>
        <div className="border border-gray-600 border-r-0 border-l-0 py-2">
          MIỄN PHÍ SHIP tất cả đơn hàng
        </div>
        <div className="border border-gray-600 border-r-0 border-t-0 border-l-0 py-2">
          THÔNG TIN SẢN PHẨM
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
