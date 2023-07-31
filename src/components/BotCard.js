import React from "react";

function BotCard({ botData, onDelete }) {
  const { id, name, health, damage, armor, catchphrase, avatar_url } = botData;

  //DELETE request using fetch API
  function handleDelete() {
    fetch(`https://main-json.onrender.com/bots/${id}`, {
      method: "DELETE",
    })
      onDelete(id);
      // alert(`Bot ${name} deleted`)
  }

  return (
    <div className="bot-cards">
      <button className="delete-btn"onClick={handleDelete} >X</button>
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
