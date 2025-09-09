import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartShop = ({ title, ids, categoryId }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hàm chuẩn hóa ảnh
  const normalizePath = (path) => {
    if (!path) return "/placeholder.jpg";
    return path.startsWith("/") ? path : `/${path}`;
  };

  // Fetch dữ liệu từ API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Lấy danh sách sản phẩm
        const resProducts = await fetch("http://localhost:3003/products");
        const dataProducts = await resProducts.json();

        // 2. Lấy danh sách ảnh
        const resImages = await fetch("http://localhost:3003/images");
        const dataImages = await resImages.json();

        // 3. Lấy danh sách category
        const resCategories = await fetch("http://localhost:3003/categories");
        const dataCategories = await resCategories.json();

        // Gắn ảnh vào sản phẩm
        const mergedProducts = dataProducts.map((p) => {
          const img = dataImages.find((img) => Number(img.id_product) === Number(p.id));
          return {
            ...p,
            image: img ? normalizePath(img.images) : "/placeholder.jpg",
          };
        });

        setProducts(mergedProducts);
        setCategories(dataCategories);
      } catch (err) {
        console.error("Lỗi khi fetch API:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Hàm lấy toàn bộ con/cháu category
  const getChildCategoryIds = (parentId) => {
    const children = categories.filter((c) => Number(c.parent_id) === Number(parentId));
    return children.flatMap((child) => [Number(child.id), ...getChildCategoryIds(Number(child.id))]);
  };

  // Lọc sản phẩm
  let filteredProducts = [...products];

  // Nếu có categoryId thì lọc theo danh mục
  if (categoryId) {
    const allIds = [Number(categoryId), ...getChildCategoryIds(Number(categoryId))];
    filteredProducts = filteredProducts.filter((p) => allIds.includes(Number(p.id_cattagories)));
  }

  // Nếu có danh sách ids thì lọc theo ids
  if (ids) {
    filteredProducts = filteredProducts.filter((p) => ids.includes(Number(p.id)));
  }

  if (loading) {
    return <div className="text-center py-10">Đang tải sản phẩm...</div>;
  }

  return (
    <div className="w-full max-w-[1280px] mx-auto px-3 ">
      <div className="text-3xl py-6">{title}</div>
      <div className="text-gray pb-3">CHỈ SALE 3 NGÀY - SẮM NGAY</div>

     <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
    {filteredProducts.map((p) => (
      <div key={p.id} className="cart relative group cursor-pointer overflow-hidden  ">
        <Link to={`/ProductsPage/${p.id}`} className="block relative">
          <img src={encodeURI(p.image)} alt={p.name} className="w-full "  />
          <div className=" ani_cart absolute inset-0 bg-black  flex items-center justify-center opacity-0 transform translate-y-[-100%] group-hover:translate-y-0 group-hover:opacity-10 transition duration-500">
            <span className="text-white text-lg font-semibold ">THÊM VÀO GIỎ HÀNG</span>
          </div>
        </Link>
        <div className="py-2 font-medium text-center">{p.name}</div>
        <p className="text-center">{p.price?.toLocaleString("vi-VN")} ₫</p>
      </div>
    ))}
  </div>

      <div className="flex justify-center">
        <button className="px-6 py-3 bg-black text-white my-4">XEM TẤT CẢ</button>
      </div>
    </div>
  );
};

export default CartShop;
