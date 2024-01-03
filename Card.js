import React from "react";

const Card = ({ name , email , id }) =>{
   
    return (
      <div className="tc big-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="robots" src={`https://robohash.org/${id}`}/>
        <div className="">
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
      </div>
    );
}

export default Card;