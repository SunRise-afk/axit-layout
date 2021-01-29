import React from "react";
import "./Pricing.scss";

export const PricingItem = ({ title, cost, term, conditions, isPopular }) => {
  return (
    <div className="pricing_item">
      <h3 className="pricing_item_title">{title}</h3>
      <div className="pricing_item_cost_container">
        <h2 className="pricing_item_cost">
          <span>$</span>
          {cost}
        </h2>
        <p className="pricing_item_term">{term}</p>
        {isPopular && <div className="is_popular_item">Our Most Popular</div>}
      </div>
      <div className="pricing_item_conditions">
        {conditions.map((condition, index) => {
          return (
            <p className="pricing_item_condition" key={index}>
              {condition}
            </p>
          );
        })}
      </div>
    </div>
  );
};
