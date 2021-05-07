import React, { useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

import { useParams } from "react-router-dom";

export const TeamPage = () => {
  const [teamData, setTeamData] = useState({ matches: [] });
  const [matchData, setMatchData] = useState([]);

  const { teamName } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`http://localhost:8080/teams/${teamName}`);
      const data = await response.json();
      setTeamData(data);
      setMatchData(data.matches);
      console.log("data: ", data);
    };

    fetchMatches();
  }, [teamName]);
  // Empty arrays calls only once when page is loaded,
  // Whenever we give value then it loads whenever that data is updated

  if (!teamData || !teamData.teamName) {
    return <h1>Team not found</h1>;
  }

  return (
    <div className="TeamPage">
      <h1>{teamData.teamName}</h1>

      <MatchDetailCard
        teamName={teamData.teamName}
        match={teamData.matches[0]}
      />
      {matchData.slice(1).map((matchData) => (
        <MatchSmallCard
          key={matchData.id}
          teamName={teamData.teamName}
          match={matchData}
        />
      ))}
    </div>
  );
};

// We use "UseParams" from "react-router-dom"
// to get "teamName" which we passed from "App.js(URL)"
