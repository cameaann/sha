import { useState } from "react";


const Header = () => {
  const [showMobileView, setShowMobileView] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setShowMobileView(!showMobileView);
	setMenuIsOpen(!menuIsOpen);
  };
  const closeMobileMenu = () => {
    // if (isMobile) {
	  setShowMobileView(false);
      setMenuIsOpen(false);
    // }
  };
  return (
    <header>
      <div className="logobox">
        <figure>
          <img src="/sha/img/logo.svg" alt="logo" className="logo" />
        </figure>
      </div>
      <ul className={showMobileView ? "mobile" : "nav"}>
        <li className="nav-item" onClick={closeMobileMenu}>
          <a href="#about">About me</a>
        </li>
        <li className="nav-item" onClick={closeMobileMenu}>
          <a href="#projects">My projects</a>
        </li>
        <li className="nav-item" onClick={closeMobileMenu}>
          <a href="#skills">My skills</a>
        </li>
        <li className="nav-item" onClick={closeMobileMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="mobile-menu-btn" onClick={toggleMenu}>
			<i className={menuIsOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>
    </header>
  );
};
export default Header;
