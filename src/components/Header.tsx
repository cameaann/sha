const Header = () =>{

	return(
		<header>
			<div className="logobox">
				<figure><img src="/sha/img/logo.svg" alt="logo" className="logo" /></figure>
			</div>
			<ul className="nav">
				<li className="nav-item"><a href="#about">About me</a></li>
				<li className="nav-item"><a href="#projects">My projects</a></li>
				<li className="nav-item"><a href="#skills">My skills</a></li>
				<li className="nav-item"><a href="#contact">Contact</a></li>
			</ul>
		</header>
	)
}
export default Header;