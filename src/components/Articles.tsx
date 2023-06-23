import { latestArticles } from "../myInformation";
import { CardArticle } from "./CardArticle";

export const Articles = () => {
  return (
    <section className="articles ">
      <article className="container ">
        <div className="row">
          <header className="articles-info-header col-12 text-md-start">
            <h3 className="articles__title articles__title--main">
              Latest Articles
            </h3>
          </header>
          {latestArticles.map((article) => (
            <CardArticle key={article.id} article={article} />
          ))}
        </div>
      </article>
    </section>
  );
};
