import React from "react";
import { JobRecommendation, OverallRecommendation } from "@/types";
import { useRecommendations } from "@/context/RecommendationsContext";

const RecommendationsComponent: React.FC = () => {
  const { recommendations, overallRecommendation } = useRecommendations();
  if (
    !Array.isArray(recommendations) ||
    recommendations.length === 0 ||
    !overallRecommendation
  ) {
    return null;
  }
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Possible jobs and salary ranges*
      </h2>

      <div className="mb-6 p-4 bg-blue-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">
          Overall Recommendation
        </h3>
        <p className="text-lg font-medium text-blue-700">
          {overallRecommendation.title}
        </p>
        <p className="text-sm text-blue-600 mt-1">
          {overallRecommendation.reason}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((job, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {job.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1">Estimated Salary Range</p>
            <p className="text-lg font-semibold text-gray-800">
              {job.salaryRangeMNT.min.toLocaleString()} -{" "}
              {job.salaryRangeMNT.max.toLocaleString()} MNT
            </p>
            <p className="text-sm text-gray-600 mt-2 mb-1">Experience</p>
            <p className="text-sm text-gray-800">
              {job.yearsOfExperience} years
            </p>
            <p className="text-sm text-gray-600 mt-2 mb-1">Why This Role?</p>
            <p className="text-sm text-gray-800">{job.suitabilityReason}</p>
            <p className="text-sm text-gray-600 mt-2 mb-1">Description</p>
            <p className="text-sm text-gray-800">{job.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-gray-500">
        *This calculation uses artificial intelligence to determine the
        potential positions you can work for and the potential salary you can
        earn on a regional basis. The calculation does not use reference data of
        companies operating in Mongolia, national historical statistical data,
        or relevant laws and regulations such as Mongolian labor laws and
        minimum wages.
      </p>
    </div>
  );
};

export default RecommendationsComponent;
