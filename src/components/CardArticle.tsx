import { typeArticles } from "../interfaces/myData";

interface PropsCardArticle {
  article: typeArticles;
}

export const CardArticle = (props: PropsCardArticle) => {
  const { article } = props;
  const { title, autor, description, urlImg } = article;
  return (
    <div className="card text-start mb-5">
      <img src={urlImg} className="card-img-top" alt="..." />
      <div className="card-body">
        <span className="card-subtitle">{autor}</span>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};
