import React from "react";
import BotArmyCard from "./BotArmyCard";

function YourBotArmy({favourites}) {
  return (
    <div className="container">
      <h2>Your Bots Army</h2>
      <div className="bot-collection">
        {favourites.map((bot) => (
          <BotArmyCard
            key={bot.id}
            favourites={bot}
          />
        ))}
      </div>
    </div>
  );
}
export default YourBotArmy;
