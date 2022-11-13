import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
// import Makeup from "./Pages/Products/Makeup";
// import Hair from "./Pages/Products/Hair";
// import { ProductDetails } from "./Pages/Product-Detail-Page/ProductDetails";
// import Wishlist from "./Pages/Wishlist/Wishlist";
import UpperNav from "./Components/UpperNav";
import  Home  from "./Pages/Home";
import  Footer  from "./Components/Footer";
// import SignupCard from "./Pages/Signup";
// import Checkout from "./Pages/Checkout/Checkout";
// import { AddForm } from "./Pages/AddressFrom/AddForm";
// import Payment from "./Pages/Shipping/Payment";

function App() {
  return (
    <div className="App">
      <UpperNav/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="/checkout" element={<Checkout/>}></Route> */}
        {/* <Route path="/Hair" element={<Hair/>}></Route> */}
        {/* <Route path="/Makeup" element={<Makeup/>}></Route> */}
        {/* <Route path="/ProductDetails" element={<ProductDetails />}></Route> */}
        {/* <Route path="/wishlist" element={<Wishlist/>}></Route> */}
        {/* <Route path="/addform" element={<AddForm/>}></Route> */}
        {/* <Route path = "/payment" element = {<Payment/>}></Route> */}
      </Routes>
      <Footer />
      {/* <SignupCard/> */}
    </div>
  );
}

export default App;