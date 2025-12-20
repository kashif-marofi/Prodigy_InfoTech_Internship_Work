const features = [
  {
    icon: "📝",
    title: "Smart Task Planning",
    desc: "Organize tasks with priorities, deadlines, and labels.",
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    desc: "Track productivity and performance with insights.",
  },
  {
    icon: "⏰",
    title: "Smart Reminders",
    desc: "Never miss deadlines with real-time alerts.",
  },
  {
    icon: "👥",
    title: "Team Collaboration",
    desc: "Work together with roles, comments, and sharing.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section light">
      <h2 className="section-title">Why Choose TaskFlow?</h2>

      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card big" key={i}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
