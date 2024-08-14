import React, { createContext, useContext, useState } from "react";
import { JobRecommendation, OverallRecommendation } from "@/types";

interface RecommendationsContextType {
  recommendations: JobRecommendation[];
  overallRecommendation: OverallRecommendation | null;
  setRecommendations: (recommendations: JobRecommendation[]) => void;
  setOverallRecommendation: (
    overallRecommendation: OverallRecommendation | null
  ) => void;
}

const RecommendationsContext = createContext<
  RecommendationsContextType | undefined
>(undefined);

export const useRecommendations = () => {
  const context = useContext(RecommendationsContext);
  if (!context) {
    throw new Error(
      "useRecommendations must be used within a RecommendationsProvider"
    );
  }
  return context;
};

export const RecommendationsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [recommendations, setRecommendations] = useState<JobRecommendation[]>(
    []
  );
  const [overallRecommendation, setOverallRecommendation] =
    useState<OverallRecommendation | null>(null);

  return (
    <RecommendationsContext.Provider
      value={{
        recommendations,
        overallRecommendation,
        setRecommendations,
        setOverallRecommendation,
      }}
    >
      {children}
    </RecommendationsContext.Provider>
  );
};
