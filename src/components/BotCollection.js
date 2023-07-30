import React from "react";
import BotCard from "./BotCard";

function BotCollection({ allBots }) {
  return (
    <section>
      <div className="bot-cards">
        <h2>Bots Collection</h2>
        <div className="card-row">
            {allBots.map((bot) => (
              <BotCard key={bot.id} botData={bot} />
            ))}
          </div>
        </div>
    </section>
  );
}
export default BotCollection;
