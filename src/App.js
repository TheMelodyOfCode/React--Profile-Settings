
import BgVideo from "./components/bg-video/bg-video.component";
import Header from "./components/header/header.component";
import CartItem from "./components/cartItem/cartItem.component";
import FormItem from "./components/formItem/formItem.component";


function App() {
  return (
    <main className="container">
        <BgVideo />
        <Header />
        <CartItem />
        <FormItem />
    </main> 
  );
}

export default App;
