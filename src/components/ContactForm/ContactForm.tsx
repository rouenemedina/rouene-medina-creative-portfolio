import "./ContactForm.scss";
import Buttons from "../Buttons/Buttons";

type ContactFormProps = {
  className: string;
};
function ContactForm({ className }: ContactFormProps) {
  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={`contactForm ${className}`}
      >
        <input type="hidden" name="form-name" value="contact" />

        <section className="contactForm__container">
          <div className="contactForm__honeypot">
            <label className="contactForm__label">
              {/* Honeypot field to prevent spam */}
              Leave this field empty:
            </label>
            <input name="bot-field" className="contactForm__input" />
          </div>

          <div className="contactForm__subcontainer">
            <label className="contactForm__label">NAME:</label>
            <input
              type="text"
              name="name"
              placeholder="First and Last Name"
              required
              className="contactForm__input"
            />
          </div>

          <div className="contactForm__subcontainer">
            <label className="contactForm__label">EMAIL:</label>
            <input
              type="email"
              name="email"
              placeholder="emailaddress@domain.com"
              required
              className="contactForm__input"
            />
          </div>

          <div className="contactForm__subcontainer">
            <label className="contactForm__label">MESSAGE:</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Type your message here..."
              className="contactForm__textarea"
            ></textarea>
          </div>
        </section>

        <Buttons type="submit" className="contactForm__button">
          SUBMIT
        </Buttons>
      </form>
    </>
  );
}

export default ContactForm;
