import "./PortfolioPage.scss";
import Header from "../../components/Header/Header";
import PortfolioCategory from "../../components/PortfolioCategory/PortfolioCategory";

function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="portfolioPage">
        <section className="portfolioPage__categories">
          <PortfolioCategory
            image="/src/assets/images/photography.jpg"
            alttext="photography"
            title="PHOTOGRAPHY"
            link="/portfolio/photography"
            className="portfolioPage__category"
          />
          <PortfolioCategory
            image="/src/assets/images/art.jpg"
            alttext="art"
            title="ART"
            link="/portfolio/art"
            className="portfolioPage__category"
          />
        </section>
      </main>
    </>
  );
}

export default PortfolioPage;
