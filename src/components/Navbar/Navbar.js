
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <div>Solutions</div>
        <div>Pricing</div>
        <div>Library</div>
        <div>About Us</div>
        <div>FAQs</div>
        <div className="button-container">
            <button className="user-info-button">@user_name</button>
            <button className="sign-out-button">Sign Out</button>
        </div>
      </nav>
    </>
  );
}
