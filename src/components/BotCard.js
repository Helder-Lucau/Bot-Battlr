import React from "react";

function BotCard({ botData }) {
  const { id, name, health, damage, armor, catchphrase, avatar_url } = botData;

  return (
    <div className="bot-cards">
      <img src={avatar_url} alt={name} className="botImage" />
      <div className="bot-desc">
        <h3 className="bot-name">{name}</h3>
        <p>{catchphrase}</p>
      </div>
      <div className="bot-stats">
        <p>Health:{health}</p>
        <p>Damage:{damage}</p>
        <p>Armor:{armor}</p>
      </div>
    </div>
  );
}
export default BotCard;
