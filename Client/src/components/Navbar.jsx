

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Green Gandhinagar
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#process">How it Works</a>
        <a href="#faq">FAQ</a>
        <a href="#signup" className="btn">
          Join Now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;