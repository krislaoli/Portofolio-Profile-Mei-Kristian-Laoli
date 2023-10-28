export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Mei Kristian Laoli</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Beginner Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Saya seorang Lulusan Informatika Strata Satu Dan sangat tertarik Menjadi seorang Fullstack Developer.
            <br /> Dan saya juga sedang mengikuti Bootcamp untuk mempersiapkan karir saya di bidang Teknologi
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
