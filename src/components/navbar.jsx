import React from "react"
import {Link} from "react-router-dom"


//const active={"borderBottom":"4px solid #ffffff"};
const brand_name="Exposys Data Labs";
const Navbar = () =>
{
    return <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link className="navbar-item has-text-white" to="/Exposys">
      {brand_name}
    </Link>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="#/">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu ">
    <div className="navbar-start">
      <Link className="navbar-item has-text-white" to="/Exposys">
        Home
      </Link>

      <Link className="navbar-item has-text-white" to="/Training">
        Training
      </Link>

      <Link className="navbar-item has-text-white" to="/Research">
        Research & Dev
      </Link>
      <Link className="navbar-item has-text-white" to="/Promotion">
        Promotions
      </Link>
      <Link className="navbar-item has-text-white" to="/Design">
        Designing
      </Link>
      <Link className="navbar-item has-text-white" to="/About">
        About us
      </Link>
      <Link className="navbar-item has-text-white" to="/Contact">
        Contact
      </Link>
      <Link className="navbar-item has-text-white" to="/Careers">
        Careers
      </Link>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-warning" href="#/">
            <strong>SUBSCRIBE</strong>
          </a>
          
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
}


export default Navbar;