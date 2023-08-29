import Banner from "./Components/Banner/Banner";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Promo from "./Components/Promo/Promo";
import './style.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Content></Content>
      <Promo></Promo> 
      <Footer></Footer>
    </div>
  );
}

export default App;
