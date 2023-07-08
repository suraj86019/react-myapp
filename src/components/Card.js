import React from "react";

const Card = ({ title, date, category }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Date: {date}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default Card;
