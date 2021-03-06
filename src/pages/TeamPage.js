import React, { useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import "./TeamPage.scss";

import { PieChart } from "react-minimal-pie-chart";

export const TeamPage = () => {
  const [teamData, setTeamData] = useState({ matches: [] });
  const [matchData, setMatchData] = useState([]);

  const { teamName } = useParams();

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await fetch(`http://localhost:8080/teams/${teamName}`);
      const data = await response.json();
      setTeamData(data);
      setMatchData(data.matches);
      console.log("data: ", data);
    };

    fetchTeam();
  }, [teamName]);
  // Empty arrays calls only once when page is loaded,
  // Whenever we give value then it loads whenever that data is updated

  if (!teamData || !teamData.teamName) {
    return <h1>Team not found</h1>;
  }

  return (
    <div className="TeamPage">
      <div className="team-name-section">
        {" "}
        <h1 className="team-name">{teamData.teamName}</h1>
      </div>

      <div className="win-loss-section">
        Wins/Losses
        <PieChart
          data={[
            {
              title: "Losses",
              value: teamData.totalMatches - teamData.totalWins,
              color: "#a34d5d",
            },
            { title: "Wins", value: teamData.totalWins, color: "#4da375" },
          ]}
        />
      </div>

      <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <MatchDetailCard
          teamName={teamData.teamName}
          match={teamData.matches[0]}
        />
      </div>

      {matchData.slice(1).map((matchData) => (
        <MatchSmallCard
          key={matchData.id}
          teamName={teamData.teamName}
          match={matchData}
        />
      ))}
      <div className="more-link">
        <Link
          to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}
        >
          More >>
        </Link>
      </div>
    </div>
  );
};

// We use "UseParams" from "react-router-dom"
// to get "teamName" which we passed from "App.js(URL)"
