import c1 from "../assets/client1.jpg";
import c2 from "../assets/client2.jpg";
import c3 from "../assets/client3.jpg";

const Testimonials = () => {
  return (
    <section className="section light">
      <h2 className="section-title">Trusted by Professionals</h2>

      <div className="testimonials-grid">
        {[
          { img: c1, name: "Ali Raza", role: "Frontend Dev" },
          { img: c2, name: "Hasan Khan", role: "Project Manager" },
          { img: c3, name: "Usman Ali", role: "Team Lead" },
        ].map((t, i) => (
          <div className="testimonial-card" key={i}>
            <img src={t.img} alt={t.name} />
            <p>
              “TaskFlow has completely changed how our team works. Clean UI and
              powerful features.”
            </p>
            <h4>{t.name}</h4>
            <span>{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
