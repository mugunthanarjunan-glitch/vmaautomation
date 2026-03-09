import "../styles/whyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      icon: "bi bi-patch-check-fill",
      title: "Genuine Products",
      desc: "100% original branded industrial products."
    },
    {
      icon: "bi bi-headset",
      title: "Technical Support",
      desc: "Professional automation assistance."
    },
    {
      icon: "bi bi-box-seam",
      title: "Fast Delivery",
      desc: "Quick dispatch and reliable shipping."
    },
    {
      icon: "bi bi-tags",
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
            <div className="why-icon"><i style={{fontSize:"50px"}} className={item.icon}></i></div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;