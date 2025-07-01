import "./HomeGallery.scss";
import Buttons from "../Buttons/Buttons";

const ButtonProps = {
  type: "button" as const,
  className: "homeGallery__button",
  onClick: () => {},
  children: "VIEW PORTFOLIO",
};
function HomeGallery() {
  return (
    <>
      <main className="homeGallery">
        <div className="homeGallery__container">
          <h2 className="homeGallery__title">
            Capturing Dreams: The Roue's Reverie Creative Journey
          </h2>
          <div className="homeGallery__buttonContainer">
            <Buttons {...ButtonProps} />
          </div>
        </div>
      </main>
    </>
  );
}

export default HomeGallery;
