import React from "react";
import BotCard from "./BotCard";

function BotCollection({ displayAllBots, onDeleteBots, handleAddFavourite }) {
  return (
    <div className="container">
      <h2>Bots Collection</h2>
      <div className="bot-collection">
        {displayAllBots.map((bot) => (
          <BotCard key={bot.id} botData={bot} onDelete={onDeleteBots} handleAddFavourite={handleAddFavourite}/>
        ))}
      </div>
    </div>
  );
}
export default BotCollection;
