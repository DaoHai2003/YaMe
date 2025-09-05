import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Carousel = ({ ids = [] }) => {
  const [products, setProducts] = useState([]);

  //Fetch API từ json-server
  useEffect(() => {
    fetch("http://localhost:3003/products")
      .then((res) => res.json())
      .then((data) => {
        // Nếu API trả về mảng trực tiếp
        setProducts(data); 
      })
      .catch((error) => console.error("Lỗi khi fetch API:", error));
  }, []);

  // Lọc sản phẩm theo ids nếu có
  const filteredProducts =
    ids.length > 0
      ? products.filter((product) => ids.includes(product.id))
      : products;

  return (
    <div className="relative w-full max-w-[1280px] mx-auto">
      {/* Nút Prev - chỉ hiện trên desktop */}
      <div className="custom-prev absolute top-1/2 -left-3 text-2xl z-10 -translate-y-1/2 text-black w-10 h-10 hidden lg:flex justify-center items-center cursor-pointer">
        ❮
      </div>

      {/* Nút Next - chỉ hiện trên desktop */}
      <div className="custom-next absolute top-1/2 -right-3 text-2xl z-10 -translate-y-1/2 text-black w-10 h-10 hidden lg:flex justify-center items-center cursor-pointer">
        ❯
      </div>

      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 0 },
          640: { slidesPerView: 3, spaceBetween: 0 },
          768: { slidesPerView: 4, spaceBetween: 0 },
          1024: { slidesPerView: 4, spaceBetween: -40 },
        }}
      >
        {filteredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="p-2 lg:p-10 transition">
              <Link to={`/ProductsPage/${product.id}`}>
                <img
                  src={product.image}
                  className="w-full object-cover"
                  alt={product.name}
                />
              </Link>

              <h3 className="text-left mt-2 font-500">{product.name}</h3>

              <div className="flex space-x-4 pt-2">
                <p className="text-left mt-1 font-500">
                  {Number(product.price).toLocaleString("vi-VN")}
                </p>
                {product.giam && (
                  <p className="text-left mt-1 line-through text-gray-500">
                    {product.giam.toLocaleString("vi-VN")} ₫
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
