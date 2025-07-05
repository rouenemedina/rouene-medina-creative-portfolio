import "./PortfolioPageArt.scss";
import Header from "../../components/Header/Header";
import GalleryMarquee from "../../components/GalleryMarquee/GalleryMarquee";
import GalleryTile from "../../components/GalleryTile/GalleryTile";
function PortfolioPageArt() {
  const images = [
    { src: "/src/assets/images/ArtGalleryMarquee/art2.jpg", alt: "art2" },
    { src: "/src/assets/images/ArtGalleryMarquee/art1.jpg", alt: "art1" },
    { src: "/src/assets/images/ArtGalleryMarquee/art3.png", alt: "art3" },
    { src: "/src/assets/images/ArtGalleryMarquee/art4.png", alt: "art4" },
    { src: "/src/assets/images/ArtGalleryMarquee/art5.png", alt: "art5" },
    { src: "/src/assets/images/ArtGalleryMarquee/art6.png", alt: "art6" },
    { src: "/src/assets/images/ArtGalleryMarquee/art8.png", alt: "art8" },
    { src: "/src/assets/images/ArtGalleryMarquee/art9.png", alt: "art9" },
    { src: "/src/assets/images/ArtGalleryMarquee/art10.png", alt: "art10" },
    { src: "/src/assets/images/ArtGalleryMarquee/art11.png", alt: "art11" },
  ];

  const imageTiles = [
    { src: "/src/assets/images/ArtGalleryTile/cherries.png", alt: "cherries" },
    {
      src: "/src/assets/images/ArtGalleryTile/strawberry_pancakes.png",
      alt: "strawberry pancakes",
    },
    {
      src: "/src/assets/images/ArtGalleryTile/pomegranate.png",
      alt: "pomegranate",
    },
    { src: "/src/assets/images/ArtGalleryTile/tomato.png", alt: "tomato" },
    {
      src: "/src/assets/images/ArtGalleryTile/matcha_cheesecake.png",
      alt: "matcha_cheesecake",
    },
    {
      src: "/src/assets/images/ArtGalleryTile/matcha_latte.png",
      alt: "matcha latte",
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
    {
      src: "/src/assets/images/ArtGalleryTile/jellyfish.png",
      alt: "jellyfish",
    },
    { src: "/src/assets/images/ArtGalleryTile/art3.jpg", alt: "lobster" },
    {
      src: "/src/assets/images/ArtGalleryTile/blueberries.png",
      alt: "blueberries",
    },
    { src: "/src/assets/images/ArtGalleryTile/cinammon.png", alt: "cinammon" },
    { src: "/src/assets/images/ArtGalleryTile/lemon.png", alt: "lemon" },
    {
      src: "/src/assets/images/ArtGalleryTile/matcha_icecream.png",
      alt: "matcha_icecream",
    },
    {
      src: "/src/assets/images/ArtGalleryTile/orange_slice.png",
      alt: "orange_slice",
    },
    {
      src: "/src/assets/images/ArtGalleryTile/tomato_green.png",
      alt: "tomato_green",
    },
    {
      src: "/src/assets/images/ArtGalleryTile/strawberry_bundle.png",
      alt: "strawberry_bundle",
    },
    {
      src: "/src/assets/images/ArtGalleryTile/flower.png",
      alt: "watercolor flower",
    },
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
