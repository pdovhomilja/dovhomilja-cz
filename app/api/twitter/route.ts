import axios from "axios";
import { Client, auth } from "twitter-api-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const user = "dovhomilja";
    const { data } = await axios.get(
      `https://api.socialdata.tools/twitter/user/${user}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.SOCIAL_DATA_API_KEY}`,
        },
      }
    );
    return NextResponse.json(data);
  } catch (error: any) {
    console.log(error, "error");
    return NextResponse.json({ error: error?.message });
  }
}
