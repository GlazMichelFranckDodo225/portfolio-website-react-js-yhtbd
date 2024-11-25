export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Salut, je suis Glaz DODO</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title-color">
              Développeur Backend & Formateur</span>{""}
            <br />
            <span className="javaSpring">| Java - Spring</span>
          </h1>
          <p className="hero--section--description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br />Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <button className="btn btn-primary">Contactez-moi</button>
      </div>
      <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}


