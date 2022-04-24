import BusniessInfo from "./component/home/BusniessInfo"
import Buyer from "./component/home/Buyer"
import LoginCompo from "./component/home/LoginCompo"
import MainContainer from "./component/home/MainContainer"
import Order from "./component/home/Order"
import ProductInfo from "./component/home/Product"
import PurchaseInfo from "./component/home/PurchaseInfo"
import Sell from "./component/home/Sell"
import SignCompo from "./component/home/SignCompo"
import SuplierInfo from "./component/home/SuplierInfo"
 

function App() {
  return (
    <div className="App">
       <LoginCompo />
      <SignCompo/>     
      <BusniessInfo/>
      <SuplierInfo/>
      <PurchaseInfo/>
      <Buyer/>
      <Order/>
      <ProductInfo/>
      <Sell/>
      {/* <MainContainer/> */}
    </div>
  )
}

export default App
