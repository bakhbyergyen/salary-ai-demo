import { NextRequest, NextResponse } from "next/server";
import { deleteFile, extractTextFromFile } from "@/lib/extractText";
import { getJobRecommendations } from "@/lib/openaiService";
export async function POST(request: NextRequest) {
  const { fileId } = await request.json();

  try {
    // Extract text from the uploaded file
    const extractedText = await extractTextFromFile(fileId);

    // Get job recommendations and overall recommendation from OpenAI
    const { recommendations, overallRecommendation } =
      await getJobRecommendations(extractedText);

    await deleteFile(fileId);

    return NextResponse.json({
      success: true,
      recommendations,
      overallRecommendation,
    });
  } catch (error) {
    console.error("Error processing file:", error);
    return NextResponse.json(
      { success: false, message: "Error processing file" },
      { status: 500 }
    );
  }
}
