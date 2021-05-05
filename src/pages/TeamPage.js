import React, { useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
  const [teamData, setTeamData] = useState({});
  const [matchData, setMatchData] = useState([]);
  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        "http://localhost:8080/teams/Royal Challengers Bangalore"
      );
      const data = await response.json();
      setTeamData(data);
      setMatchData(data.matches);
      console.log("data: ", data);
    };
    fetchMatches();
  }, []); // Empty arrays calls only once when page is loaded

  return (
    <div className="TeamPage">
      <h1>{teamData.teamName}</h1>

      <MatchDetailCard match={teamData.matches[0]} />
      {matchData.slice(1).map((matchData) => (
        <MatchSmallCard match={matchData} />
      ))}
    </div>
  );
};
