import "./AboutContact.scss";
import ContactForm from "../ContactForm/ContactForm";
import SocialBar from "../SocialBar/SocialBar";

function AboutContact() {
  return (
    <>
      <main className="aboutContact">
        <section className="aboutContact__container">
          <h2 className="aboutContact__title">SAY HELLO</h2>
          <SocialBar />
        </section>
        <section className="aboutContact__formContainer">
          <ContactForm className="aboutContact__form" />
        </section>
      </main>
    </>
  );
}

export default AboutContact;
