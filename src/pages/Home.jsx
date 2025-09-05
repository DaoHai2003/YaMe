import Header from '../compondents/Header';
import Banner from '../compondents/Banner';
import Cart_shop from '../compondents/CartShop';
import Carousel from '../compondents/carousel';
import Footer from '../compondents/Footer';
import Video from '../compondents/video';
let getRandomIds = (count) => {
  let range = Array.from({ length: 175 }, (_, i) => i + 1); // [1, 2, ..., 175]
  return range.sort(() => 0.5 - Math.random()).slice(0, count); // random 'count' phần tử
};
function Home() {
  return (
    <>
      <Header />
      <Banner title_banner={'RA MẮT TRANG BÁN HÀNG ONLINE CHÍNH THỨC CỦA YAME VN'} />
      
      {/* Lấy dữ liệu từ API */}
      <Cart_shop title={'MỚI MỞ BÁN'} ids={getRandomIds(12)} />
      <Cart_shop title={'GIẢM GIÁ SÂU NHẤT THÁNG 8'} ids={getRandomIds(8)} />
      <Cart_shop title={'GIẢM GIÁ SÂU NHẤT THÁNG 7'} ids={getRandomIds(4)} />
      <Cart_shop title={'GIẢM GIÁ SÂU NHẤT THÁNG 5'} ids={getRandomIds(4)} />
      <Video />
      <Cart_shop title="GIÁ ĐẶC BIỆT" ids={[1, 2, 3, 4, 5, 6, 10, 8]} />
      <Carousel/>
      
      <Footer />
    </>
  );
}

export default Home;