import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BotArmy from './BotArmy';

function BotDetails({ bots }) {
  const { id } = useParams();
  const bot = bots.find((element) => element.id === parseInt(id, 10));

    const [army, setArmy]=useState(null)
    function handleClick(){
        setArmy(bot.id === army ? null:bot)
    }

  return (
    <div>
        <BotArmy army={army}/>
        <div className='box-container'>
            <div className="box">
            <img src={bot.avatar_url} alt={bot.name}/>
            <br />
            <h3>{bot.name}</h3>
            <br />
            <h4>{bot.bot_class}</h4>
            <br />
                <p>catchphrase <br /> {bot.catchphrase}</p>
                
                <button type="button" onClick={handleClick}>Enlist</button>

            </div>
        </div>
    </div>
  );
}

export default BotDetails;






