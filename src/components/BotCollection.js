import React from "react";
import BotCard from "./BotCard";

function BotCollection({ allBots }) {
  return (
    <div className="container">
      <h2>Bots Collection</h2>
      <div className="bot-collection">
        {allBots.map((bot) => (
          <BotCard key={bot.id} botData={bot} />
        ))}
      </div>
    </div>
  );
}
export default BotCollection;
