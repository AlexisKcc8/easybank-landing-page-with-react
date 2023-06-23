import { typeServices } from "../interfaces/myData";

interface PropsCardService {
  service: typeServices;
}

export const CardServices = (props: PropsCardService) => {
  const { service } = props;

  return (
    <div className="service col-12 col-md-3 text-center text-md-start">
      <img src={service.urlImg} alt={`img-${service.title}`} />
      <h4 className="service__title">{service.title}</h4>
      <p className="service__description">{service.description}</p>
    </div>
  );
};
