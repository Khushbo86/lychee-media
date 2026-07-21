import styles from "./Pricing.module.css";
import PricingCard from "./PricingCard";

const plans = [
  {
    title: "Starter",
    price: "₹5999",
    features: [
      "Business Website",
      "Basic SEO",
      "1 Month Support",
      "Responsive Design",
    ],
    featured: false,
  },
  {
    title: "Professional",
    price: "₹14999",
    features: [
      "Premium Website",
      "SEO Optimization",
      "Social Media Setup",
      "3 Months Support",
      "Analytics Dashboard",
    ],
    featured: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Everything Included",
      "Dedicated Team",
      "Marketing Strategy",
      "Unlimited Support",
      "AI Automation",
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <div className={styles.heading}>
          <span>Pricing</span>

          <h2>
            Flexible Plans
            <br />
            For Every Business
          </h2>

          <p>
            Choose a pricing plan that perfectly fits your business goals and
            budget.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;