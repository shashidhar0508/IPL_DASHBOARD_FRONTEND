import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);

  const { teamName, year } = useParams();

  useEffect(() => {
    console.log("match");
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/teams/${teamName}/matches/?year=${year}`
      );
      const data = await response.json();
      setMatches(data);
      console.log("data1 : ", data);
    };

    fetchMatches();
  }, [teamName, year]);

  if (!matches) {
    return <h1>Matches not found</h1>;
  }

  return (
    <div className="Matchpage">
      <h1>MatchPage</h1>
      <div>
        {matches.map((match) => (
          <MatchDetailCard key={match.id} teamName={teamName} match={match} />
        ))}
      </div>
    </div>
  );
};
