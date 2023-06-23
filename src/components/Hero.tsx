import { ButtonInvite } from "./ButtonInvite";

export const Hero = () => {
  return (
    <section className="hero row m-0 ">
      <div className="col-12 d-flex  position-relative">
        <picture className="hero-imgs-picture">
          <source
            className="w-100 hero-imgs-picture__img-desktop"
            media="(min-width: 1440px)"
            srcSet="/public/images/bg-intro-desktop.svg"
          />

          <img
            className="w-100 hero-imgs-picture__img-mobile"
            src="/images/bg-intro-mobile.svg"
            alt="bg-desktop"
          />
        </picture>
        <img
          className="hero-imgs__phones "
          src="/images/image-mockups.png"
          alt="img-phones"
        />
        <aside className="hero-info container ">
          <h2 className="hero-info__title">Next Generation digital banking</h2>
          <p className="hero-info__description">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="" style={{ width: "11rem" }}>
            <ButtonInvite />
          </div>
        </aside>
      </div>
    </section>
  );
};
