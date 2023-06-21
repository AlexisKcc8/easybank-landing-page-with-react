import { latestArticles } from "../myInformation";
import { CardArticle } from "./CardArticle";

export const Articles = () => {
  return (
    <section className="articles row  mx-0 py-5 text-center">
      <header className="articles-info-header col-12 ">
        <h3 className="articles__title articles__title--main">
          Latest Articles
        </h3>
      </header>
      <div className="col-12">
        {latestArticles.map((article) => (
          <CardArticle key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};
