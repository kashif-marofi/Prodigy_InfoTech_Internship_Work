import dashboardImg from "../assets/dashboard.png";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-inner">
        <div className="hero-text">
          <h1>
            Organize Work.
            <br />
            Boost Productivity.
          </h1>
          <p>
            TaskFlow helps teams plan, track, and deliver work faster with a
            modern task management system.
          </p>

          <div className="hero-buttons">
            <button className="cta-btn">Get Started Free</button>
            <button className="secondary-btn">Live Demo</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={dashboardImg} alt="TaskFlow Dashboard" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
