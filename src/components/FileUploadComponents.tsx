import React, { useRef, useState } from "react";
import { useFileUpload } from "@/hooks/useFIleUpload";
import { useProcessFile } from "@/hooks/useProcessFile";
import { useRecommendations } from "@/context/RecommendationsContext";

const FileUploadComponent: React.FC = () => {
  const { setRecommendations, setOverallRecommendation } = useRecommendations();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    mutate: uploadFile,
    isPending: isUploading,
    isError: isUploadError,
    error: uploadError,
  } = useFileUpload();
  const {
    mutate: processFile,
    isPending: isProcessing,
    isError: isProcessError,
    error: processError,
  } = useProcessFile();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      uploadFile(selectedFile, {
        onSuccess: (data) => {
          if (data.success) {
            processFile(data.fileId, {
              onSuccess: (processResult) => {
                if (processResult.success) {
                  setRecommendations(processResult.recommendations);
                  setOverallRecommendation(processResult.overallRecommendation);
                }
              },
            });
          }
        },
      });
    }
  };

  const isProcessingInProgress = isUploading || isProcessing;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div
        className="bg-gray-200 p-8 rounded-lg text-center mb-4 cursor-pointer hover:bg-gray-300 transition-colors"
        onClick={() => fileInputRef.current?.click()}
      >
        <svg
          className="w-12 h-12 mx-auto text-gray-500 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="font-semibold mb-2 text-gray-700">
          Click here to upload a CV
        </p>
        <p className="text-xs text-gray-600">
          Maximum size: 10mb
          <br />
          PDF/DOC
        </p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          className="hidden"
          accept=".pdf,.docx"
        />
      </div>

      {selectedFile && (
        <div className="mb-4 p-4 bg-gray-200 rounded-lg">
          <h2 className="font-semibold mb-2 text-gray-700">Selected File:</h2>
          <p className="text-gray-600">Name: {selectedFile.name}</p>
          <p className="text-gray-600">
            Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
          </p>
          <button
            onClick={handleUpload}
            disabled={isProcessingInProgress}
            className={`mt-2 w-full py-2 text-white rounded transition-colors ${
              isProcessingInProgress
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Upload and Process
          </button>
        </div>
      )}

      {isProcessingInProgress && <p className="text-blue-600">Processing...</p>}

      {(isUploadError || isProcessError) && (
        <p className="text-red-600">
          Error: {uploadError?.message || processError?.message}
        </p>
      )}
    </div>
  );
};

export default FileUploadComponent;
