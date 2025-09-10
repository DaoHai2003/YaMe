import Header from '../compondents/Header';
import Banner from '../compondents/Banner';
import Cart_shop from '../compondents/CartShop';
import Footer from '../compondents/Footer';
import FilterBar from '../compondents/Filter';
import { useParams } from "react-router-dom";


const categoryMap = {
  // Áo Thun
  "Thun": { id: 2, title: "Áo Thun" },
  "Thun/Co-Tron": { id: 6, title: "Áo Thun Cổ Tròn" },
  "Thun/Polo": { id: 5, title: "Áo Thun Polo" },

  // Áo Sơ Mi
  "Somi": { id: 3, title: "Áo Sơ Mi" },
  "Somi/Tay-Ngan": { id: 3, title: "Áo Sơ Mi Tay Ngắn" }, 
  "Somi/Tay-Dai": { id: 3, title: "Áo Sơ Mi Tay Dài" },  

  // Áo Khoác
  "Khoac": { id: 4, title: "Áo Khoác" },
  "Khoac/Jean": { id: 7, title: "Áo Khoác Jean" },
  "Khoac/Hoodie": { id: 8, title: "Áo Khoác Hoodie" },

  // Quần jean
  "Jean": { id: 10, title: "Quần Jean" },
  "Jean/Boxer": { id: 11, title: "Jean boxer" },
  // Quần Dài
  "Dai": { id: 12, title: "Quần Dài" },
  "Dai/Jogger": { id: 13, title: "Dài jogger" },
 


  
};

const CategoryPage = () => {
  const { "*":categoryId } = useParams();
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