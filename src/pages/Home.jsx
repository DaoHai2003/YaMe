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
      <Cart_shop title={'MỚI MỞ BÁN'} ids={[8, 9, 10, 11, 12, 13, 14]} />
      
      <Video />
      <Cart_shop title="GIÁ ĐẶC BIỆT" ids={[1, 2, 3, 4, 5, 6, 10, 8]} />
      <Carousel/>
      
      <Footer />
    </>
  );
}

export default Home;