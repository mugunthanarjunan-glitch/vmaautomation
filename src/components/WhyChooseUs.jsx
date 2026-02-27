import "../styles/whyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      icon: "✅",
      title: "Genuine Products",
      desc: "100% original branded industrial products."
    },
    {
      icon: "⚙️",
      title: "Technical Support",
      desc: "Professional automation assistance."
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "Quick dispatch and reliable shipping."
    },
    {
      icon: "💰",
      title: "Best Pricing",
      desc: "Competitive market pricing."
    }
  ];

  return (
    <div className="why-section">
      <h3 className="why-title">Why Choose Us</h3>

      <div className="why-grid">
        {features.map((item, index) => (
          <div key={index} className="why-card">
            <div className="why-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;