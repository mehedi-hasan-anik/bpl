import React, { useEffect, useState } from 'react';
import playersDetails from '../data.json';
import Player from '../Player/Player';
import './Players.css'

const Players = () => {
    const [players,setPlayer] = useState([]);
    const [cart,setCart]= useState([]);
    useEffect(()=>{
        setPlayer(playersDetails);
    },[])

    const handlers = (player) =>{
        const newCart = [...cart,player];
        setCart(newCart);
    }

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const budget = cart[i];
        total = total + budget.salary;
        
    }
    return (
        <div className="Container">
        
           <div className="left-container">
               <h1 style={{background:'blue',padding:'10px',color:'white'}}> Players List</h1>
              {
                   playersDetails.map(player=><Player player={player} handlers={handlers}></Player>)
              }
           </div>
           <div className="right-container">
               <h1>Team Summary</h1>
               <h2>Selected Player</h2>
               <ul>
                   {
                       cart.map(names => <li>{names.name}-${names.salary}</li>)
                   }
               </ul>
               <h4>Total Players:{cart.length}</h4>
               <h4>Total Budget : ${total.toFixed(2)}</h4>


           </div>

        </div>
    );
};

export default Players;