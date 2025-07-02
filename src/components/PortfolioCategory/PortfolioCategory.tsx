import "./PortfolioCategory.scss";
import { Link } from "react-router-dom";

interface PortfolioCategoryProps {
  image: string;
  alttext: string;
  title: string;
  link: string;
}

function PortfolioCategory({
  image,
  alttext,
  title,
  link,
}: PortfolioCategoryProps) {
  return (
    <>
      <main className="portfolioCategory">
        <Link to={link} className="portfolioCategory__link">
          <section className="portfolioCategory__container">
            <img
              src={image}
              alt={alttext}
              className="portfolioCategory__image"
            ></img>
            <h3 className="portfolioCategory__title">{title}</h3>
          </section>
        </Link>
      </main>
    </>
  );
}

export default PortfolioCategory;
