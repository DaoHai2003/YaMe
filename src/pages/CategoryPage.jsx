import Header from '../compondents/Header';
import Banner from '../compondents/Banner';
import Cart_shop from '../compondents/CartShop';
import Footer from '../compondents/Footer';
import FilterBar from '../compondents/Filter';
import { useParams } from "react-router-dom";


const categoryMap = {
  Thun: { id: 2, title: "Áo Thun" },
  Somi: { id: 3, title: "Áo Sơ Mi" },
  Khoac: { id: 4, title: "Áo Khoác" },

};

const CategoryPage = () => {
  const { categoryId } = useParams();
  console.log("URL categoryId:", categoryId);
  const category = categoryMap[categoryId] || { id: 1, title: "Áo" };

  return (
    <>
      <Header />
      <Banner title_banner={category.title} />
      <FilterBar/>
      <Cart_shop title={category.title} categoryId={category.id} />
      <Footer />
    </>
  );
};

export default CategoryPage;