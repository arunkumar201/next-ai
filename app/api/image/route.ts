import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import {  Configuration,OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_OPEN_AI_SECRET_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    const body = await request.json();
    const { prompt,amount=1,resolution="512*512" } = body;
    if (!userId) {
      return new NextResponse("UnAuthorized User", { status: 401 });
    }
    if (!configuration.apiKey) {
      return new NextResponse("Open Ai Key is not found", { status: 404 });
    }
    if (!prompt) {
      return new NextResponse("Prompt must be provided", { status: 403 });
    }
    if (!amount) {
      return new NextResponse("amount must be provided", { status: 403 });
    }
    if (!resolution) {
      return new NextResponse("resolution must be provided", { status: 403 });
    }
    const response = await openai.createImage({
       prompt,
       n:parseInt(amount,10),
       size:resolution
    });
    return  NextResponse.json(response.data.data);
  } catch (err) {
    console.log("Error Occured in Image", err);
    return new NextResponse("Error occured in Image ,internal error", {
      status: 500,
    });
  }
}
