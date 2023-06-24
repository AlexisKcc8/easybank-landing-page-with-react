import { latestArticles } from "../myInformation";
import { CardArticle } from "./CardArticle";

export const Articles = () => {
  return (
    <section className="articles row m-0 pt-5">
      <div className="col-12">
        <article className="container ">
          <header className="articles-info-header col-12 text-center text-md-start">
            <h3 className="articles__title articles__title--main ">
              Latest Articles
            </h3>
          </header>
          <div className="row p-0 d-flex justify-content-center justify-content-md-between">
            {latestArticles.map((article) => (
              <CardArticle key={article.id} article={article} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};
