import { services } from "../myInformation";
import { CardServices } from "./CardServices";
export const Services = () => {
  console.log(services);
  return (
    <section className="services row  mx-0 py-5 text-center">
      <header className="services-info-header col-12 ">
        <h3 className="services__title">Why choose Easybank?</h3>
        <p className="services__description">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </header>
      <div className="col-12">
        {services.map((service) => (
          <CardServices key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
};
