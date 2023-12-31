import { ButtonInvite } from "./ButtonInvite";

export const Hero = () => {
  return (
    <section className="hero ">
      <div className="container">
        <div className="row  text-start">
          <div className="col-12  position-relative ">
            <picture className="hero-imgs-picture">
              <source
                className="w-100 hero-imgs-picture__img-desktop"
                media="(min-width: 1440px)"
                srcSet="/images/bg-intro-desktop.svg"
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
            <aside className="container  hero-info">
              <h2 className="hero-info__title m-0 p-0">
                Next Generation <br />
                digital banking
              </h2>
              <p className="hero-info__description">
                Take your financial life online. Your Easybank account{" "}
                <br className="d-none d-md-block" />
                will be a one-stop-shop for spending, saving,
                <br className="d-none d-md-block" /> budgeting, investing, and
                much more.
              </p>
              <div className="" style={{ width: "11rem" }}>
                <ButtonInvite />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
