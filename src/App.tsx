import { Articles } from "./components/Articles";
import { FooterPage } from "./components/FooterPage";
import { Hero } from "./components/Hero";
import { Nabvar } from "./components/Nabvar";
import { Services } from "./components/Services";
function App() {
  return (
    <section className="container-fluid p-0">
      <div className="row p-0 m-0">
        <div className="col-12 p-0 m-0">
          <header>
            <Nabvar />
          </header>
        </div>
      </div>
      <Hero />
      <Services />
      <Articles />
      <FooterPage />
    </section>
  );
}

export default App;
