import './App.css';
import './slider'
import Navbar from './component/Navbar'
import Formtext from './component/Formtext'
import About from './component/About';
function App() {
  return (
    <>
      <Navbar />

      <Formtext Heading="Please enter your text" />

      <About/>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="https://us.burga.com/cdn/shop/files/2023-09-cta-banners-phone_cases_web.jpg?v=1694518849&width=736" alt="" />
          </div>
          <div className="swiper-slide">
          <img src="https://us.burga.com/cdn/shop/files/2023-09-cta-banners-earbuds_desktop.jpg?v=1694518873&width=736" alt="" />
          </div>
          <div className="swiper-slide">
          <img src="https://us.burga.com/cdn/shop/files/2023-09-cta-banners-earbuds_desktop.jpg?v=1694518873&width=736" alt="" />
          </div>
        </div>

        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev sliderbtn">prev</div>
        <div className="swiper-button-next sliderbtn">next</div>
        <div className="swiper-scrollbar"></div>
      </div>
    </>
  );
}

export default App;


