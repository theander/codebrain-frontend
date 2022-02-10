import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import ShopCart from "./components/ShopCart";
import BodyPage from "./components/BodyPage"


function App() {
  return (
    <div className="App">
     <Header />
      <BrowserRouter>
        <Routes>         
          <Route path="/" element={<BodyPage />}>
            <Route path="shop" element={<Shop />} />
            <Route path="shopcart" element={<ShopCart />} />
          </Route>
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
