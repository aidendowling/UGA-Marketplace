export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" class="site-title">
        Site Name
      </a>
      <ul>
        <li>
          <a href="/marketplace">Marketplace</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </nav>
  );
}
