import "./PortfolioCategory.scss";
import { Link } from "react-router-dom";

interface PortfolioCategoryProps {
  image: string;
  alttext: string;
  title: string;
  link: string;
  className: string;
}

function PortfolioCategory({
  image,
  alttext,
  title,
  link,
  className
}: PortfolioCategoryProps) {
  return (
    <>
      <main className={`portfolioCategory ${className}`}>
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
