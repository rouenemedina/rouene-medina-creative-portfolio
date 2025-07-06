import "./SocialBar.scss";
import instagram from "../../assets/icons/instagram.png";
import youtube from "../../assets/icons/youtube.png";
import tiktok from "../../assets/icons/tiktok.png";
import linktree from "../../assets/icons/linktr.png";
import linkedin from "../../assets/icons/linkedin.png";

function SocialBar() {
  return (
    <>
      <main className="socialBar">
        <a
          href="https://www.instagram.com/roue_art"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagram}
            alt="instagram"
            className="socialBar__icon"
          ></img>
        </a>
        <a
          href="https://www.youtube.com/@reverieroue"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={youtube}
            alt="youtube"
            className="socialBar__icon"
          ></img>
        </a>
        <a
          href="https://www.tiktok.com/@roue.m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={tiktok}
            alt="tiktok"
            className="socialBar__icon"
          ></img>
        </a>
        <a
          href="https://linktr.ee/rouenem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linktree}
            alt="linktree"
            className="socialBar__icon"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/rouenemedina/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="linkedin"
            className="socialBar__icon"
          ></img>
        </a>
      </main>
    </>
  );
}

export default SocialBar;
