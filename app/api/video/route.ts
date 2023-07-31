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
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: prompt,
        },
      }
    );
    return NextResponse.json(response);
  } catch (err) {
    console.log("Error Occured in Image", err);
    return new NextResponse("Error occured in video ,internal error", {
      status: 500,
    });
  }
}
