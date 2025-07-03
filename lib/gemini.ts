import {
  GoogleGenAI,
} from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function generateChallenge(input: string) {
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: 'application/json',
  };
  const model = 'gemini-2.5-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: input,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  if (
    response.candidates &&
    response.candidates.length > 0 &&
    response.candidates[0].content &&
    response.candidates[0].content.parts &&
    response.candidates[0].content.parts.length > 0
  ) {
    const challengeText = response.candidates[0].content.parts[0].text;
    if (challengeText) {
      return JSON.parse(challengeText);
    }
  }

  throw new Error("Failed to generate challenge from AI");
}

export async function analyzePrompt(prompt: string, question: string, requirements: string) {
  const config = {
    responseMimeType: 'application/json',
  };
  const model = 'gemini-2.5-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `You are a strict prompting coach. You only give good prompts good marks. Analyze the following user prompt and provide an improved version, along with a detailed analysis.

Challenge Question: "${question}"
Challenge Requirements: "${requirements}"
User's Prompt: "${prompt}"

Return a JSON object with the following structure:
{
  "improvedPrompt": "An enhanced version of the user's prompt.",
  "scores": {
    "creativity": <a score between 0 and 100, reflecting strict coaching standards>,
    "clarity": <a score between 0 and 100, reflecting strict coaching standards>,
    "effectiveness": <a score between 0 and 100, reflecting strict coaching standards>,
    "specificity": <a score between 0 and 100, reflecting strict coaching standards>
  },
  "overallScore": <an overall score between 0 and 100, reflecting strict coaching standards>,
  "keyImprovements": [
    "A brief description of the first key improvement.",
    "A brief description of the second key improvement.",
    "A brief description of the third key improvement."
  ]
}`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  if (
    response.candidates &&
    response.candidates.length > 0 &&
    response.candidates[0].content &&
    response.candidates[0].content.parts &&
    response.candidates[0].content.parts.length > 0
  ) {
    const analysisText = response.candidates[0].content.parts[0].text;
    if (analysisText) {
      return JSON.parse(analysisText);
    }
  }

  throw new Error("Failed to analyze prompt with AI");
}
