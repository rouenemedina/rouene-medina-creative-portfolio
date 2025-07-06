import "./SocialBar.scss";

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
            src="/src/assets/icons/instagram.png"
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
            src="/src/assets/icons/youtube.png"
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
            src="/src/assets/icons/tiktok.png"
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
            src="/src/assets/icons/linktr.png"
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
            src="/src/assets/icons/linkedin.png"
            alt="linkedin"
            className="socialBar__icon"
          ></img>
        </a>
      </main>
    </>
  );
}

export default SocialBar;
