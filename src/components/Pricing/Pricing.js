import React from "react";
import "./Pricing.scss";
import { PricingItem } from "./PricingItem";

export const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <h2 className="pricing_heading">PRICING OPTIONS</h2>
        <p className="pricing_paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="pricing_items_row">
          <PricingItem
            title="Basic"
            cost="0"
            term="Free for Life"
            conditions={[
              "1 GB of Space",
              "10 GB of Bandwidth",
              "3 Websites",
              "Basic Customization",
              "Wordpress Integration",
              "Email Support",
            ]}
            isPopular={false}
          ></PricingItem>
          <PricingItem
            title="Professional"
            cost="19"
            term="Monthly Payment"
            conditions={[
              "5 GB of Space",
              "50 GB of Bandwidth",
              "12 Websites",
              "Advanced Customization",
              "Wordpress Integration",
              "Email Support",
            ]}
            isPopular={true}
          ></PricingItem>
          <PricingItem
            title="Enterprise"
            cost="70"
            term="Monthly Payment"
            conditions={[
              "Unlimited space",
              "unlimited bandwidth",
              "100 websites",
              "Advanced Customization",
              "Wordpress Integration",
              "24/7 customer support",
            ]}
            isPopular={false}
          ></PricingItem>
        </div>
      </div>
    </section>
  );
};
