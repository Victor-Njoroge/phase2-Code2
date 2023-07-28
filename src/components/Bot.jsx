import React from 'react';
import { Link } from 'react-router-dom';
import BotArmy from './BotArmy';
function Bot({ bots }) {
 

  return (
    <div >
        <BotArmy/>
        <div className='box-container'>
      {bots.map((element) => (
        <Link to={`/details/${element.id}`}>
        <div key={element.id} className='box'>
          <img src={element.avatar_url}/>
          <h3>{element.name}</h3>
          <h4>{element.bot_class}</h4>
          
            <div>
              <div className="details">
                <p>Health {element.health}</p>
                <p>Damage {element.damage}</p>
                <p>Armor {element.armor}</p>
              </div>
              <br />
              <p>catchphrase <br /> {element.catchphrase}</p>
            </div>
        </div>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default Bot;
