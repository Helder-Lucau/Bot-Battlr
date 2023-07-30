import React from "react";
import BotCard from "./BotCard";

function BotCollection({ allBots }) {
  return (
    <div className="bots-collection">
      {allBots.map((bot) => (
        <BotCard key={bot.id} botData={bot} />
      ))}
    </div>
  );
}
export default BotCollection;
