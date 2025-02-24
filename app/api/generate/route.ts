import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://models.inference.ai.azure.com",
});

interface ResumeRequest {
  name: string;
  jobTitle: string;
  experience: string;
  skills: string[];
}

interface OpenAIResponse {
  choices: {
    message: {
      content: string | null;
    };
  }[];
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { name, jobTitle, experience, skills }: ResumeRequest =
      await req.json();

    const prompt = `
            Generate a professional resume for:
            Name: ${name}
            Job Title: ${jobTitle}
            Experience: ${experience}
            Skills: ${skills.join(", ")}
            and dont include any content from your site like intro, notes
        `;

    const response: OpenAIResponse = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Your a Proffesinal Resume Builder ATS-friendly",
        },
        { role: "user", content: prompt },
      ],
      model: "gpt-4o",
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
    });

    return NextResponse.json({ resume: response.choices[0].message.content });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
