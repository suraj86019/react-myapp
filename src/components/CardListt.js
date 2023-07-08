import React from "react";
import Card from "./Card";

const CardList = ({ cards }) => {
   console.log(cards);
    return (
    <div className="card-list" style={{display:"block"}}>
       {Object.keys(cards).map((category) => ( <div style={{backgroundColor:"blue", }}> <h3>{category}</h3>
       
       <div style={{backgroundColor:"blue", display:"flex"}} >

       {cards[category].map((card, index) => (
        
        <Card key={index} {...card} />
      ))}

     </div>
       </div>))}
      {/* {cards.map((card, index) => (
        
        <Card key={index} {...card} />
      ))} */}
    </div>
  );
};

export default CardList;