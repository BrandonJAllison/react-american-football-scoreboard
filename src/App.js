//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {

  const [homeTeam, setHomeTeam] = useState('Lions')
  const [awayTeam, setAwayTeam] = useState('Tigers')
  const [awayScore, setAwayScore] = useState(0)
  const [homeScore, setHomeScore] = useState(0)
  const [time, setTime] = useState('20:00')

  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.



const handleScore = (team, setTeam, type) => {
  const score = {
    touchdown: 7,
    fieldgoal: 3,
  };
  setTeam(team + score[type]);
};
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{time}</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

          <button className="homeButtons__touchdown" id='touchdown'  
              onClick={(event) => handleScore(homeScore, setHomeScore, event.target.id)}>
                Home Touchdown
          </button>

          <button className="homeButtons__fieldGoal" id='fieldgoal'
            onClick={(event) => handleScore(homeScore, setHomeScore, event.target.id)}>
                Home Field Goal
          </button>
        </div>

        <div className="awayButtons">
          <button className="awayButtons__touchdown" id='touchdown' 
            onClick={(event) => handleScore(awayScore, setAwayScore, event.target.id)}>
              Away Touchdown
          </button>

          <button className="awayButtons__fieldGoal" id='fieldgoal'  
            onClick={(event) => handleScore(awayScore, setAwayScore, event.target.id)}>
              Away Field Goal
          </button>
          
        </div>

      </section>
    </div>
  );
}

export default App;
