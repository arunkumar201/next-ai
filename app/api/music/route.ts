import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY || "",
});

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    const body = await request.json();
    const { prompt } = body;
    if (!userId) {
      return new NextResponse("UnAuthorized User", { status: 401 });
    }
    if (!prompt) {
      return new NextResponse("Prompt must be provided", { status: 403 });
    }
    const response = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          prompt_a: prompt,
        },
      }
    );
    return NextResponse.json(response);
  } catch (err) {
    console.log("Error Occured in Image", err);
    return new NextResponse("Error occured in Music ,internal error", {
      status: 500,
    });
  }
}
