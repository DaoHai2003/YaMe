import Header from '../compondents/Header';
import Banner from '../compondents/Banner';
import Cart_shop from '../compondents/CartShop';
import Carousel from '../compondents/carousel';
import Footer from '../compondents/Footer';
import Video from '../compondents/video';

function Home() {
  return (
    <>
      <Header />
      <Banner title_banner={'RA MẮT TRANG BÁN HÀNG ONLINE CHÍNH THỨC CỦA YAME VN'} />
      
      {/* Lấy dữ liệu từ API */}
      <Cart_shop title={'MỚI MỞ BÁN'}  />
      <Cart_shop title={'GIẢM GIÁ SÂU NHẤT THÁNG 8'}  />
      <Cart_shop title={'GIẢM GIÁ SÂU NHẤT THÁNG 7'}  />
      <Cart_shop title={'GIẢM GIÁ SÂU NHẤT THÁNG 5'}  />
      <Video />
      <Cart_shop title="GIÁ ĐẶC BIỆT"  />
      <Carousel/>
      
      <Footer />
    </>
  );
}

export default Home;