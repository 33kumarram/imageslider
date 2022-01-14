import React from "react";

const GetResult =({score, playagain}) =>{
   return(
    <div className="score-board">
    <div className="score">
        your score is {score} / 5 numbers
    </div>
    <button className="playBtn" onClick={playagain}>Play Again !</button>
    </div>
   )
}
export default GetResult;