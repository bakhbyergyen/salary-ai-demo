export interface JobRecommendation {
  title: string;
  description: string;
  yearsOfExperience: number;
  suitabilityReason: string;
  salaryRangeMNT: {
    min: number;
    max: number;
  };
}

export interface OverallRecommendation {
  title: string;
  reason: string;
}
