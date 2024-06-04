const Contact = () => {


	const handleCLick: React.MouseEventHandler<HTMLAnchorElement> = (event) =>{
		event.preventDefault();
		window.open("mailto:cameaann@gmail.com?subject=subject&body=body");
	}
  return (
    <section id="contact">
      <h1>Contacts</h1>
      <div className="contacts">
        <span>Feel free to contact with me:</span>
        <ul className="contacts">
          <li>
            <a href="https://www.linkedin.com/in/anna-shestakova-30b5a67/" target="blank">
              <figure className="contact-icon">
                <i className="fa-brands fa-linkedin linked"></i>
              </figure>
            </a>
          </li>
          <li>
            <a href="http://" target="blank" onClick={handleCLick}>
              <figure className="contact-icon">
                <i className="fa-regular fa-envelope mail"></i>
              </figure>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
