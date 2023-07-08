import React, { useState } from "react";
import CardList from "./components/CardList";
import CardListt from "./components/CardListt";
import cardsData from "./data";
import './App.css';

const App = () => {
  const [cards, setCards] = useState(cardsData);
  const [opt,setOpt] = useState(0);

  const filterByDate = () => {
    const filteredCards = cardsData.filter((card) => {
      // Replace 'selectedDate' with the selected date for filtering
      const selectedDate = "2023-01-01";
      return card.date === selectedDate;
    });
    setCards(filteredCards);
  };

  const sortByTitle = () => {
    const sortedCards = [...cards].sort((a, b) => {
      var x=a.title.toLowerCase();
      var y=b.title.toLocaleLowerCase();
      console.log(x);
      console.log(y);
      if (x > y) {
        console.log(1);
        return 1;
      } else if (x < y) {
        console.log(-1);
        return -1;
      } else {
        return 0;
      }
    });
    console.log(sortedCards);
    setCards(sortedCards);
  };
  

  const groupByCategory = () => {
    const groupedCards = cardsData.reduce((result, card) => {
      const category = card.category;
      if (!result[category]) {
        result[category] = [];
      }
      result[category].push(card);
      return result;
    }, {});
    setCards(groupedCards);
    setOpt(1);
  };

  return (
    <div>
      <button onClick={filterByDate}>Filter by Date</button>
      <button onClick={sortByTitle}>Sort Alphabetically</button>
      <button onClick={groupByCategory}>Group by Category</button>
      {opt ? <CardListt cards={cards}/> :  <CardList cards={cards} />}
      
    </div>
  );
};

export default App;
