import OpenAI from "openai";
import { JobRecommendation, OverallRecommendation } from "@/types";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getJobRecommendations(text: string): Promise<{
  recommendations: JobRecommendation[];
  overallRecommendation: OverallRecommendation;
}> {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are an insightful career advisor with a deep understanding of modern job markets and emerging career trends. Analyze the given resume and suggest suitable job positions based on the following criteria:

1. Core skills and experience: Identify the candidate's primary areas of expertise and years of experience.
2. Adaptability: Assess the candidate's ability to learn new skills and adapt to changing environments based on their career progression and diverse experiences.
3. Creativity: Look for indicators of innovative thinking, problem-solving skills, and creative approaches in their past work.
4. Passion and motivation: Identify areas where the candidate seems most engaged and passionate based on their experiences and achievements.
5. Leadership and collaboration: Evaluate their potential for leadership roles or their ability to work effectively in teams.
6. Technical proficiency: For tech-related roles, assess their range of technical skills and how up-to-date they are with current technologies.
7. Soft skills: Infer communication, time management, and other soft skills from their experiences and achievements.
8. Industry trends: Consider how their skills align with current and emerging trends in relevant industries.

Provide 3-5 job recommendations that best match the candidate's profile, considering both their current qualifications and their potential for growth. For each recommendation, include:
- A job title
- A brief description of the role
- The estimated years of relevant experience
- A reason why this role is suitable for the candidate
- An estimated salary range in MNT (Mongolian Tugrik), considering the base range of 1,500,000 MNT to 3,000,000 MNT, but adjusting based on the candidate's experience and the role's requirements. The salary can exceed this range if justified.

Also, provide an overall recommendation for the best position considering all factors, including potential for growth and alignment with the candidate's apparent passions and strengths.`,
      },
      { role: "user", content: text },
    ],
    functions: [
      {
        name: "provide_job_recommendations",
        description: "Provide job recommendations based on the resume",
        parameters: {
          type: "object",
          properties: {
            recommendations: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  description: { type: "string" },
                  yearsOfExperience: { type: "number" },
                  suitabilityReason: { type: "string" },
                  salaryRangeMNT: {
                    type: "object",
                    properties: {
                      min: { type: "number" },
                      max: { type: "number" },
                    },
                    required: ["min", "max"],
                  },
                },
                required: [
                  "title",
                  "description",
                  "yearsOfExperience",
                  "suitabilityReason",
                  "salaryRangeMNT",
                ],
              },
            },
            overallRecommendation: {
              type: "object",
              properties: {
                title: { type: "string" },
                reason: { type: "string" },
              },
              required: ["title", "reason"],
            },
          },
          required: ["recommendations", "overallRecommendation"],
        },
      },
    ],
    function_call: { name: "provide_job_recommendations" },
  });

  const functionCall = response.choices[0].message.function_call;
  if (functionCall && functionCall.name === "provide_job_recommendations") {
    const result = JSON.parse(functionCall.arguments);
    return {
      recommendations: result.recommendations,
      overallRecommendation: result.overallRecommendation,
    };
  }

  throw new Error("Failed to get job recommendations");
}
