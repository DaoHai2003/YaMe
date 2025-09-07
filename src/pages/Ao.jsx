import Header from '../compondents/Header';
import Banner from '../compondents/Banner';
import Cart_shop from '../compondents/CartShop';
import Carousel from '../compondents/carousel';
import Footer from '../compondents/Footer';
import FilterBar from '../compondents/Filter';
function Ao() {
  return (
    <>
      <div>
        <Header/>
        <Banner title_banner={'NÂNG CẤP TỦ ĐỒ - NÂNG CẤP BẠN '}/>
        <FilterBar/>
        <Cart_shop title={'MỚI MỞ BÁN'} />
        <Carousel  />  
        <Footer/>
      </div>
    </>
  )
}

export default Ao;