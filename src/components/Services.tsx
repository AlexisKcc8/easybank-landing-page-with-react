import { services } from "../myInformation";
import { CardServices } from "./CardServices";
export const Services = () => {
  return (
    <section className="services ">
      <article className="container">
        <div className="row  mx-0  ">
          <header className="services-container-info col-12 text-center text-md-start">
            <h3 className="services-container-info__title">
              Why choose Easybank?
            </h3>
            <p className="services-container-info__description mb-5">
              We leverage Open Banking to turn your bank account into your
              financial hub. <br className="d-none d-md-block" />
              Control your finances like never before.
            </p>
          </header>
          {services.map((service) => (
            <CardServices key={service.title} service={service} />
          ))}
        </div>
      </article>
    </section>
  );
};
