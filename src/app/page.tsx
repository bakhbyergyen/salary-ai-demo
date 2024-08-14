"use client";
import FileUploadComponent from "@/components/FileUploadComponents";
import RecommendationsComponent from "@/components/RecommendationsComponent";
import { RecommendationsProvider } from "@/context/RecommendationsContext";

const SalaryFairnessPage: React.FC = () => {
  return (
    <RecommendationsProvider>
      <div className="min-h-screen bg-gray-100 py-12">
        <FileUploadComponent />
        <RecommendationsComponent />
      </div>
    </RecommendationsProvider>
  );
};

export default SalaryFairnessPage;
