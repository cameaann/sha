import { useState } from "react";

const Header = () => {
  const [showMobileView, setShowMobileView] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setShowMobileView(!showMobileView);
    setMenuIsOpen(!menuIsOpen);
  };

  const goToSection = (sectionId: string) => {
    const headerHeight = document.getElementById("header")!.offsetHeight;
    const section = document.getElementById(sectionId);
    const sectionPosition = section!.offsetTop - headerHeight!;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
    setShowMobileView(false);
    setMenuIsOpen(false);
  };
  return (
    <header id="header">
      <div className="logobox" onClick={() => goToSection("about")}>
        <figure>
          <img src="/sha/img/logo.svg" alt="logo" className="logo" />
        </figure>
      </div>

      <ul className={showMobileView ? "mobile show" : "nav"}>
        <li className="nav-item" onClick={() => goToSection("about")}>
          About me
        </li>
        <li className="nav-item" onClick={() => goToSection("projects")}>
          My projects
        </li>
        <li className="nav-item" onClick={() => goToSection("skills")}>
          My skills
        </li>
        <li className="nav-item" onClick={() => goToSection("contact")}>
          Contact
        </li>
      </ul>
      <div className="mobile-menu-btn" onClick={toggleMenu}>
        <i
          className={menuIsOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
        ></i>
      </div>
    </header>
  );
};
export default Header;
