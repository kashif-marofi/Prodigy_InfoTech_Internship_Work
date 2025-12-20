const Pricing = () => {
  return (
    <section id="pricing" className="section light">
      <h2 className="section-title">Simple Pricing</h2>

      <div className="pricing-grid">
        <div className="price-card">
          <h3>Free</h3>
          <h2>$0</h2>
          <ul>
            <li>✔ Basic Tasks</li>
            <li>✔ Personal Workspace</li>
            <li>✔ Email Support</li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className="price-card featured">
          <h3>Pro</h3>
          <h2>$9/mo</h2>
          <ul>
            <li>✔ Unlimited Tasks</li>
            <li>✔ Analytics</li>
            <li>✔ Priority Support</li>
          </ul>
          <button>Start Trial</button>
        </div>

        <div className="price-card">
          <h3>Team</h3>
          <h2>$19/mo</h2>
          <ul>
            <li>✔ Team Access</li>
            <li>✔ Role Management</li>
            <li>✔ Advanced Security</li>
          </ul>
          <button>Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
