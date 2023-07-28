import React from 'react'

function BotArmy({army}) {
    console.log(army)
  return (
    <div className='container'>
        <div className='box'>
        <img src={army.avatar_url} alt={army.name}/>
            <br />
            <h3>{army.name}</h3>
            <br />
            <h4>{army.bot_class}</h4>
        </div>
    </div>
  )
}

export default BotArmy