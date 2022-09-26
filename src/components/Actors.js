import React from "react";
import { actors } from "../data";

function Actors() {
  console.log(actors);
  return <div>
       <h1>Actors Page</h1>
   {actors.map(actor => {
    return (
      <div key={actor.name}>
        {actor.name}
        {actor.movies.map((movie, index) =>{
          return (<ul key={index}>
            <li key={movie}>{movie}</li>
          </ul>)
        })}
      </div>
    )
   })}
  </div>;
}

export default Actors;
