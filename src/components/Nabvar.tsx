import { useState } from "react";

export const Nabvar = () => {
  const [closeMenu, setCloseMenu] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg bg-light m-0 py-3">
      <div className="container-fluid">
        <img src="/images/logo.svg" alt="logo" />

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
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center text-dark">
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
          <button className="btn btn-success d-none d-md-block">
            Requets Invite
          </button>
        </div>
      </div>
    </nav>
  );
};
