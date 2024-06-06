import { useState } from "react";

const Header = () =>{
const [showMobileView, setShowMobileView] = useState(false);

const toggleMenu: React.MouseEventHandler<HTMLDivElement> = (event) =>{
	event.preventDefault();
	setShowMobileView(!showMobileView);
}
	return(
		<header>
			<div className="logobox">
				<figure><img src="/sha/img/logo.svg" alt="logo" className="logo" /></figure>
			</div>
			<ul className={ showMobileView ? 'mobile' : 'nav'}>
				<li className="nav-item"><a href="#about">About me</a></li>
				<li className="nav-item"><a href="#projects">My projects</a></li>
				<li className="nav-item"><a href="#skills">My skills</a></li>
				<li className="nav-item"><a href="#contact">Contact</a></li>
			</ul>
			<div className= "mobile-menu-btn" onClick={toggleMenu}>
			  <i className="fa-solid fa-bars"></i>
			</div>
		</header>
	)
}
export default Header;