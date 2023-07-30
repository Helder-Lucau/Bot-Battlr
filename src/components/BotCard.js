import React from "react";

function BotCard({ botData }) {
  const { id, name, health, damage, armor, catchphrase, avatar_url } = botData;

  return (
    <React.Fragment>
      <img src={avatar_url} alt={name} className="botImage" />
      <div className="bot-desc">
        <h3 className="bot-name">{name}</h3>
        <p>{catchphrase}</p>
      </div>
      <div className="bot-stats">
        <p>{health}</p>
        <p>{damage}</p>
        <p>{armor}</p>
      </div>
    </React.Fragment>
  );
}
export default BotCard;
