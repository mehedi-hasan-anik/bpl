import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faPlusSquare } from '@fortawesome/free-solid-svg-icons'




const Player = (props) => {
    const {name,salary,image} = props.player;
    const handlers = props.handlers;

    return (
    
            <div className="playerCart">
                <div className="playerCart-left">
                   <img style={{height:'200px'}} src={image} alt=""/>
                </div>
                <div className="playerCart-right">
                  <h1>{name}</h1>
                  <h3>Salary: ${salary}</h3>
                  <button className="btn btn-primary" onClick={()=> handlers(props.player)}> <FontAwesomeIcon icon={faPlusSquare} /> Add Player</button>
                </div>
           </div>

       

       
    );
};

export default Player;