import ScrollReveal from "../compondents/scoll";

export default function App() {
  const products = [
    { id: 1, name: "Áo Thun", desc: "Áo thun cotton chất lượng cao." },
    { id: 2, name: "Áo Polo", desc: "Áo polo thời trang, lịch lãm." },
    { id: 3, name: "Hoodie", desc: "Hoodie ấm áp, phong cách streetwear." },
    { id: 4, name: "Quần Jeans", desc: "Quần jeans bền đẹp, dễ phối đồ." },
  ];

  return (
    <div className="h-[3000px] bg-gray-100 py-16 px-4 mb-[50%] ">
      <h1 className="text-3xl font-bold text-center mb-12 py-[500px]">Sản phẩm nổi bật</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {products.map((product, index) => (
          <ScrollReveal
            key={product.id}
            origin="bottom"
            distance={50}
            delay={index * 50} // stagger
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="mt-2 text-gray-600">{product.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
