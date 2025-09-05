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
        <Cart_shop title={'MỚI MỞ BÁN'} ids={[8, 9, 10, 11,12,13,14,15,1,2,3,4,5,6,7,8]}/>
        <Carousel  />  
        <Footer/>
      </div>
    </>
  )
}

export default Ao;