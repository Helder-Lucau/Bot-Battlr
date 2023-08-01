import "./App.css";
import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [allBots, setAllBots] = useState([]);
  const [favourites, setFavourites] = useState([]);

  //fetch data from an external API
  useEffect(() => {
    fetch("https://main-json.onrender.com/bots")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBots(data);
      });
  }, []);

  function addFavourite(favourite) {
    if(!favourites.includes(favourite)){
      setFavourites([...favourites, favourite]);
    } 
  }

  function deleteBot(id) {
    setAllBots(allBots.filter((deleteBotData) => deleteBotData.id !== id));
    // setAllBots(deleteData)
  }

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy favourites={favourites}/>
      <BotCollection displayAllBots={allBots} onDeleteBots={deleteBot} handleAddFavourite={addFavourite}/>
    </div>
  );
}

export default App;
