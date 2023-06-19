import { ButtonInvite } from "./ButtonInvite";

export const Hero = () => {
  return (
    <section className="hero row m-0 ">
      <article className="col-12 p-0 d-flex flex-column flex-md-row">
        <header className="hero-imgs order-lg-2">
          <img
            className="hero-imgs__bg-mobile"
            src="/images/bg-intro-mobile.svg"
            alt="bg-desktop"
          />
          <img
            className="hero-imgs__phones"
            src="/images/image-mockups.png"
            alt="img-phones"
          />
        </header>
        <footer className="text-center hero-info d-flex flex-column justify-content-center align-items-center order-lg-1">
          <h2 className="hero-info__title">Next Generation digital banking</h2>
          <p className="hero-info__description">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <ButtonInvite />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </footer>
      </article>
    </section>
  );
};
