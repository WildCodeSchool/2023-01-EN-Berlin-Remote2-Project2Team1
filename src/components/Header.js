const Header = () => {
  return (
    <header>
      <div className="left">
        <nav>
          <ul className="navList">
            <li className="navLink">
              <a href="#">Home</a>
            </li>
            <li className="navLink">
              <a href="#">About</a>
            </li>
            <li>
              <img className="logo" src="./assets/logo.png" alt="" />
            </li>
            <li className="navLink">
              <a href="#">Contact</a>
            </li>
            <li className="navLink">
              <a href="#">Search</a>
            </li>
          </ul>
        </nav>
        <div className="hero">
          <p className="heroText__Title">Signature Sips</p>
          <p className="heroText__underTitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur, tempore.
          </p>
          <p className="hero__btn">search</p>
        </div>
      </div>

      <div className="heroRight">
        <img src="../assets/Old Fashioned—Studio Bon.jpg" alt="" />

        {/* <!-- PopUp btn --> */}
        <div className="info-PopUp">
          <button className="info-popUp__btn"></button>
          <div className="popUp hidden">
            <p>Explore more</p>
            <p>$ 50</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
