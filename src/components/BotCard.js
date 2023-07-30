import React from "react";

function BotCard({ botData }) {
  const { id, name, health, damage, armor, catchphrase, avatar_url } = botData;

  return (
    <div className="bot-card">
      <img src={avatar_url} alt={name} />
      <div className="bot-desc">
        <h3>{name}</h3>
        <p>{catchphrase}</p>
        <div className="bot-stats">
          <p>{health}</p>
          <p>{damage}</p>
          <p>{armor}</p>
        </div>
      </div>
    </div>
  );
}
export default BotCard;
