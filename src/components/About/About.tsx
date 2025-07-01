import "./About.scss";

function About() {
  return (
    <>
      <main className="about">
        <section className="about__container about__container--left">
          <h1 className="about__title">ROUE'S CREATIVE JOURNEY</h1>
          <h3 className="about__bio">
            Hi, I’m Rouene Medina, and I simply love to create. Whether it’s
            capturing candid moments through photography, designing invitations
            and logos, or bringing colors and stories to life through art,
            creating is how I express myself and connect with the world around
            me. I’ve loved photography since I was handed a camera at a wedding
            as a kid, and I’ve enjoyed design and art since my school days,
            always finding joy in making something from scratch. I’m still
            exploring where this creative journey will take me, but I’m excited
            to share the pieces I’ve made along the way. Thank you for being
            here, and I hope you find a bit of beauty, warmth, or inspiration
            while you explore my work.
          </h3>
        </section>
        <section className="about__container about__container--right">
          <img
            src="/src/assets/images/about.jpg"
            alt="cherry blossoms"
            className="about__image about__image--left"
          ></img>
          <img
            src="/src/assets/images/roue.jpg"
            alt="creator's image"
            className="about__image"
          ></img>
        </section>
      </main>
    </>
  );
}

export default About;
