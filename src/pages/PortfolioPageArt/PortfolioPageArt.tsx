import "./PortfolioPageArt.scss";
import Header from "../../components/Header/Header";
import GalleryMarquee from "../../components/GalleryMarquee/GalleryMarquee";
import GalleryTile from "../../components/GalleryTile/GalleryTile";
function PortfolioPageArt() {
  const images = [
    { src: "/src/assets/images/ArtGalleryMarquee/art1.jpg", alt: "art1" },
    { src: "/src/assets/images/ArtGalleryMarquee/art2.jpg", alt: "art2" },
    { src: "/src/assets/images/ArtGalleryMarquee/art3.jpg", alt: "art3" },
    { src: "/src/assets/images/ArtGalleryMarquee/art4.png", alt: "art4" },
    { src: "/src/assets/images/ArtGalleryMarquee/art5.png", alt: "art5" },
    { src: "/src/assets/images/ArtGalleryMarquee/art6.png", alt: "art6" },
    { src: "/src/assets/images/ArtGalleryMarquee/art7.png", alt: "art7" },
    { src: "/src/assets/images/ArtGalleryMarquee/art8.jpg", alt: "art8" },
  ];

  const imageTiles = [
    { src: "/src/assets/images/ArtGalleryTile/cherries.png", alt: "cherries" },
    {
      src: "/src/assets/images/ArtGalleryTile/strawberry_pancakes.png",
      alt: "strawberry_pancakes",
    },
    {
      src: "/src/assets/images/ArtGalleryTile/pomegranate.png",
      alt: "pomegranate",
    },
     {
      src: "/src/assets/images/ArtGalleryTile/matcha_cheesecake.png",
      alt: "matcha_cheesecake",
    },
    {
      src: "/src/assets/images/ArtGalleryTile/natcha_latte.png",
      alt: "matcha_latte",
    },
    {
      src: "/src/assets/images/ArtGalleryTile/pink_macaron.png",
      alt: "pink_macaron",
    },
    {
      src: "/src/assets/images/ArtGalleryTile/green_macaron.png",
      alt: "green_macaron",
    },
    { src: "/src/assets/images/ArtGalleryTile/kiwi.png", alt: "kiwi" },
    { src: "/src/assets/images/ArtGalleryTile/lime.png", alt: "lime" },
    {
      src: "/src/assets/images/ArtGalleryTile/red_coffee_mug.png",
      alt: "red_coffee_mug",
    },
    { src: "/src/assets/images/ArtGalleryTile/tomato.png", alt: "tomato" },
  ];

  return (
    <>
      <Header />
      <main className="portfolioPageArt">
        <section className="portfolioPageArt__container">
          <h1 className="portfolioPageArt__title">ART PORTFOLIO</h1>
        </section>
        <section className="portfolioPageArt__track">
          <GalleryMarquee images={images} />
        </section>
        <h2 className="portfolioPageArt__subtitle">Explore More Works</h2>
        <section className="portfolioPageArt__tiles">
          <GalleryTile imageTiles={imageTiles} />
        </section>
      </main>
    </>
  );
}

export default PortfolioPageArt;
