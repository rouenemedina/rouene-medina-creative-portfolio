import "./GalleryTile.scss";

interface GalleryTileProps {
  imageTiles: { src: string; alt: string }[];
}

function GalleryTile({ imageTiles }: GalleryTileProps) {
  return (
    <>
      <main className="galleryTile">
        <ul className="galleryTile__container">
          {imageTiles.map((image, index) => (
            <li key={index} className="galleryTile__item">
              <img
                src={image.src}
                alt={image.alt}
                className="galleryTile__image"
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default GalleryTile;
