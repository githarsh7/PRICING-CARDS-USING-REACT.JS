import "./App.css";

import PricingCard from "./components/pricingcard.jsx";
import pricingPlans from "./data/pricingdata.js";

function App() {
  return (
    <div className="container">
      {pricingPlans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}

export default App;