import "./PortfolioPageArt.scss";
import Header from "../../components/Header/Header";
import GalleryMarquee from "../../components/GalleryMarquee/GalleryMarquee";
function PortfolioPageArt() {
  const images = [
    { src: "/src/assets/images/ArtGallery/art1.png", alt: "art1" },
    { src: "/src/assets/images/ArtGallery/art2.png", alt: "art2" },
    { src: "/src/assets/images/ArtGallery/art3.png", alt: "art3" },
  ];

  return (
    <>
      <Header />
      <main className="portfolioPageArt">
        <section className="portfolioPageArt__container">
          <h1 className="portfolioPageArt__title">ART PORTFOLIO</h1>
        </section>
        <section className="portfolioPageArt__container">
          <GalleryMarquee images={images} />
        </section>
      </main>
    </>
  );
}

export default PortfolioPageArt;
