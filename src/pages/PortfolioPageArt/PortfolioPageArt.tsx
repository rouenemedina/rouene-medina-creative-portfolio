import "./PortfolioPageArt.scss";
import Header from "../../components/Header/Header";
import GalleryMarquee from "../../components/GalleryMarquee/GalleryMarquee";
import GalleryTile from "../../components/GalleryTile/GalleryTile";
import artGalleryData from "../../data/artGalleryData.json";

function PortfolioPageArt() {
 const {marqueeImages, tileImages} = artGalleryData;

  return (
    <>
      <Header />
      <main className="portfolioPageArt">
        <section className="portfolioPageArt__container">
          <h1 className="portfolioPageArt__title">ART PORTFOLIO</h1>
        </section>
        <section className="portfolioPageArt__track">
          <GalleryMarquee images={marqueeImages} />
        </section>
        <h2 className="portfolioPageArt__subtitle">Explore More Works</h2>
        <section className="portfolioPageArt__tiles">
          <GalleryTile imageTiles={tileImages} />
        </section>
      </main>
    </>
  );
}

export default PortfolioPageArt;
