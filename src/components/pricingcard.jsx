const PricingCard = ({ plan }) => {
  return (
    <div className="card">

      <h4 className="plan-title">
        {plan.title}
      </h4>

      <h2 className="price">
        {plan.price}
      </h2>

      <ul>
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className={feature.available ? "active" : "disabled"}
          >

            <span className="icon">
              {feature.available ? "✓" : "✕"}
            </span>

            <span>
              {feature.text}
            </span>

          </li>
        ))}
      </ul>

      <button className="btn">
        BUTTON
      </button>

    </div>
  );
};

export default PricingCard;