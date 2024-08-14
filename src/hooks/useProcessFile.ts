import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { JobRecommendation, OverallRecommendation } from "@/types";

interface ProcessFileResponse {
  success: boolean;
  fileId: string;
  recommendations: JobRecommendation[];
  overallRecommendation: OverallRecommendation;
}

const processFile = async (fileId: string): Promise<ProcessFileResponse> => {
  const response = await fetch("/api/process", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fileId }),
  });

  if (!response.ok) {
    throw new Error("File processing failed");
  }

  return response.json();
};

export const useProcessFile = (): UseMutationResult<
  ProcessFileResponse,
  Error,
  string,
  unknown
> => {
  return useMutation({
    mutationFn: processFile,
  });
};
