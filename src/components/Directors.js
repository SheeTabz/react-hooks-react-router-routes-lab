import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors)
  return <div>
    <h1>Directors Page</h1>
   {directors.map(director => {
    return (
      <div key={director.name}>
        {director.name}
        {director.movies.map((movie, index) =>{
          return (<ul key={index}>
            <li key={movie}>{movie}</li>
          </ul>)
        })}
      </div>
    )
   })}
  </div>;
}

export default Directors;
