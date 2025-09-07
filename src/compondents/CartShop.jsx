import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../compondents/scoll";

const Cart_shop = ({ title, ids }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3008/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi khi fetch API:", err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = ids
    ? products.filter((p) => ids.includes(Number(p.id)))
    : products.slice(0, 4);

  if (loading) {
    return <div className="text-center py-10">Đang tải sản phẩm...</div>;
  }

  return (
    <div className="w-full max-w-[1280px] mx-auto px-3">
      <div className="text-3xl py-6">{title}</div>
      <div className="text-gray pb-3">CHỈ SALE 3 NGÀY - SẮM NGAY</div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {filteredProducts.map((p, index) => (
          <ScrollReveal
            key={p.id}
            origin="bottom"
            distance={50}
            delay={index * 100} // stagger
            duration={500} // mượt
            easing="cubic-bezier(0.4, 0, 0.2, 1)"
            className="cart"
          >
            <Link to={`/ProductsPage/${p.id}`}>
              <img src={`/${p.image}`} alt={p.name} className="w-full" />
            </Link>
            <div className="py-2 font-medium">{p.name}</div>
            <p>{p.price ? p.price.toLocaleString("vi-VN") : ""} ₫</p>
          </ScrollReveal>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-6 py-3 bg-black text-white my-4">
          XEM TẤT CẢ
        </button>
      </div>
    </div>
  );
};

export default Cart_shop;
