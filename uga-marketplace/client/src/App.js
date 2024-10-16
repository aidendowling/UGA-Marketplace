import Navbar from "./Navbar";
import Cart from "./pages/Cart";
import Marketplace from "./pages/Marketplace";
import Home from "./pages/Home";
import Item from "./pages/Item";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/marketplace":
      component = <Marketplace />;
      break;
    case "/item":
      component = <Item />;
      break;
    case "/cart":
      component = <Cart />;
      break;
  }
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
