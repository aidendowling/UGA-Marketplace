export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Home
      </a>
      <ul>
        <li>
          <a href="/item">Add Item</a>
        </li>
        <li>
          <a href="/marketplace">Marketplace</a>
        </li>
        <li>
          <a href="/cart">Shopping Cart</a>
        </li>
      </ul>
    </nav>
  );
}
