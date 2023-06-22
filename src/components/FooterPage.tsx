import { ButtonInvite } from "./ButtonInvite";
import { LogoEasyBank } from "./LogoEasyBank";

export const FooterPage = () => {
  return (
    <footer className="footer row  mx-0 py-4 text-center">
      <section className="footer-logo-social-media col-12 col-md-4 mb-4">
        <div className="footer-logo-social-media__container-logo my-4">
          <LogoEasyBank colorText="#fff" />
        </div>
        <div className="footer-logo-social-media__container-social-media">
          <img src="/images/icon-facebook.svg" alt="icon-facebook" />
          <img src="/images/icon-youtube.svg" alt="icon-youtube" />
          <img src="/images/icon-twitter.svg" alt="icon-twitter" />
          <img src="/images/icon-pinterest.svg" alt="icon-pinterest" />
          <img src="/images/icon-instagram.svg" alt="icon-instagram" />
        </div>
      </section>
      <section className="footer-items col-12 col-md-4 mb-4 text-white">
        <ul className="footer-items__list mx-0  p-0">
          <li className="footer-items__item my-2">About Us</li>
          <li className="footer-items__item my-2">Contact</li>
          <li className="footer-items__item my-2">Blog</li>
          <li className="footer-items__item my-2">Careers</li>
          <li className="footer-items__item my-2">Support</li>
          <li className="footer-items__item my-2">Privacy Policy</li>
        </ul>
      </section>
      <section className="col-12 col-md-4 footer-copyright">
        <ButtonInvite />
        <p className="footer-copyright__text my-4">
          ©️Easybank. All Rights Reserved
        </p>
      </section>
    </footer>
  );
};
