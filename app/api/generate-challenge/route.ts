import { NextRequest, NextResponse } from 'next/server';
import { generateChallenge } from '../../../lib/gemini';

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json();

    if (!input) {
      return NextResponse.json({ error: 'Input is required' }, { status: 400 });
    }

    const challenge = await generateChallenge(input);
    return NextResponse.json({ challenge });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate challenge' }, { status: 500 });
  }
}
