import React, { createContext, useContext, useState } from 'react';

const ScoreContext = createContext(-1);
const useScore = () => useContext(ScoreContext);

const WithScore = ({ children }) => {
  const [score, SetScore] = useState(-1);

  return (
    <ScoreContext.Provider value={[score, SetScore]}>
      { children }
    </ScoreContext.Provider>
  );
};

export { WithScore, useScore };
