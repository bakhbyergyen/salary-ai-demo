import { useMutation, UseMutationResult } from "@tanstack/react-query";

interface UploadResponse {
  success: boolean;
  message?: string;
  fileId: string;
}

const uploadFile = async (file: File): Promise<UploadResponse> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("File upload failed");
  }

  return response.json();
};

export const useFileUpload = (): UseMutationResult<
  UploadResponse,
  Error,
  File,
  unknown
> => {
  return useMutation({
    mutationFn: uploadFile,
  });
};
