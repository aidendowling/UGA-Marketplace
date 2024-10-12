import Navbar from "./Navbar";
import Cart from "./pages/Cart";
import Marketplace from "./pages/Marketplace";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <App />;
      break;
    case "/marketplace":
      component = <Marketplace />;
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
