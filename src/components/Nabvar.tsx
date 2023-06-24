import { useState } from "react";
import { ButtonInvite } from "./ButtonInvite";
import { LogoEasyBank } from "./LogoEasyBank";

export const Nabvar = () => {
  const [closeMenu, setCloseMenu] = useState(false);
  return (
    <nav className="my-nabvar navbar  navbar-expand-lg bg-light position-fixed top-0 start-0 w-100  border m-0 p-0 border bg-danger">
      <div className="container-fluid container px-3">
        <LogoEasyBank />

        <button
          onClick={() => setCloseMenu(!closeMenu)}
          className="navbar-toggler border-white btn no-focus"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {!closeMenu ? (
            <img src="/images/icon-hamburger.svg" alt="icon-hamburger" />
          ) : (
            <img src="/images/icon-close.svg" alt="icon-hamburger" />
          )}
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto  mb-2 mb-lg-0 text-center text-dark  w-100 d-lg-flex justify-content-lg-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Careers
              </a>
            </li>
          </ul>
          <div className="d-none d-lg-block navbar-container-button">
            <ButtonInvite />
          </div>
        </div>
      </div>
    </nav>
  );
};
