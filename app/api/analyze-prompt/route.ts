import { NextRequest, NextResponse } from 'next/server';
import { analyzePrompt } from '../../../lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const { prompt, question, requirements } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const analysis = await analyzePrompt(prompt, question, requirements);
    return NextResponse.json({ analysis });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to analyze prompt' }, { status: 500 });
  }
}
