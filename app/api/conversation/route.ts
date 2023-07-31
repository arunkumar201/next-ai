import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_OPEN_AI_SECRET_KEY,
});

const openai = new OpenAIApi(configuration);


export async function POST(request: Request) {
  try {
    const { userId } = auth();
    const body = await request.json();
    const { messages } = body;
    if (!userId) {
      return new NextResponse("UnAuthorized User", { status: 401 });
    }
    if (!configuration.apiKey) {
      return new NextResponse("Open Ai Key is not found", { status: 404 });
    }
    if (!messages) {
      return new NextResponse("Message must be provided", { status: 403 });
    }
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });
    return NextResponse.json(response.data.choices[0].message);
  } catch (err) {
    console.log("Error Occured in Conversation 123", err);
    return new NextResponse("Error occured in Conversation,internal error", {
      status: 500,
    });
  }
}
