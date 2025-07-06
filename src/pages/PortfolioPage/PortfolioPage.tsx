import "./PortfolioPage.scss";
import Header from "../../components/Header/Header";
import PortfolioCategory from "../../components/PortfolioCategory/PortfolioCategory";
import photography from "../../assets/images/photography.jpg";
import art from "../../assets/images/art.jpg";

function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="portfolioPage">
        <section className="portfolioPage__categories">
          <PortfolioCategory
            image={photography}
            alttext="photography"
            title="PHOTOGRAPHY"
            link="/portfolio/photography"
            className="portfolioPage__category"
          />
          <PortfolioCategory
            image={art}
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
