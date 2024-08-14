import { readFile } from "fs/promises";
import path from "path";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import mammoth from "mammoth";

async function extractPdfText(filePath: string): Promise<string> {
  const loader = new PDFLoader(filePath);
  const docs = await loader.load();
  return docs.map((doc) => doc.pageContent).join("\n");
}

async function extractDocxText(buffer: Buffer): Promise<string> {
  const result = await mammoth.extractRawText({ buffer });
  return result.value;
}

export async function extractTextFromFile(fileId: string): Promise<string> {
  const filePath = path.join(process.cwd(), "uploads", fileId);
  const buffer = await readFile(filePath);

  console.log("Extracting text from file:", fileId);

  if (fileId.endsWith(".pdf")) {
    return extractPdfText(filePath);
  } else if (fileId.endsWith(".docx")) {
    return extractDocxText(buffer);
  }

  throw new Error("Unsupported file type. Please upload a PDF or DOCX file.");
}
