import { ButtonInvite } from "./ButtonInvite";
import { IconFace } from "../svgs/IconFace";
import { LogoEasyBank } from "./LogoEasyBank";
import { IconYoutube } from "../svgs/IconYoutube";
import { IconTwitter } from "../svgs/IconTwitter";
import { IconPinterest } from "../svgs/IconPinterest";
import { IconInstagram } from "../svgs/IconInstagram";

export const FooterPage = () => {
  return (
    <footer className="footer row  mx-0 p-5 text-center text-md-start">
      <section className="footer-logo-social-media col-12 col-md-4 mb-4  d-md-flex flex-md-column justify-content-md-around align-items-md-center">
        <div className="footer-logo-social-media__container-logo my-4 my-md-0 mb-md-4">
          <LogoEasyBank colorText="#fff" />
        </div>
        <div className="footer-logo-social-media__container-social-media">
          <IconFace className="icon-social-media" />
          <IconYoutube className="icon-social-media" />
          <IconTwitter className="icon-social-media" />
          <IconPinterest className="icon-social-media" />
          <IconInstagram className="icon-social-media" />
        </div>
      </section>

      <section className="footer-items col-12 col-md-4 mb-4 text-white ">
        <ul className="footer-items__list m-0 p-0 d-md-flex justify-content-md-start align-items-md-center gap-5">
          <div>
            <li className="footer-items__item my-2">About Us</li>
            <li className="footer-items__item my-2">Contact</li>
            <li className="footer-items__item my-2">Blog</li>
          </div>
          <div>
            <li className="footer-items__item my-2">Careers</li>
            <li className="footer-items__item my-2">Support</li>
            <li className="footer-items__item my-2">Privacy Policy</li>
          </div>
        </ul>
      </section>
      <section className="col-12 col-md-4 footer-copyright  d-flex flex-column align-items-center align-items-md-end justify-content-center text-md-end">
        <div className="footer-copyright__container-button">
          <ButtonInvite />
        </div>
        <p className="footer-copyright__text my-4 w-100">
          ©️Easybank. All Rights Reserved
        </p>
      </section>
    </footer>
  );
};
