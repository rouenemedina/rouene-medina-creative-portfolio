import "./GalleryMarquee.scss";

interface GalleryMarqueeProps {
  images: {
    src: string;
    alt: string;
  }[];
}
function GalleryMarquee({ images }: GalleryMarqueeProps) {
  const doubledImages = [...images, ...images];

  return (
    <>
      <main className="galleryMarquee">
        <ul className="galleryMarquee__track">
          {doubledImages.map((image, index) => (
            <li key={index} className="galleryMarquee__item">
              <img
                src={image.src}
                alt={image.alt}
                className="galleryMarquee__image"
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default GalleryMarquee;
