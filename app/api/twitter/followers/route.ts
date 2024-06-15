import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(request: NextRequest) {
  const user_id = "1033680740695912449";
  let url = `https://api.socialdata.tools/twitter/followers/list?user_id=${user_id}`;

  async function fetchFollowers(nextCursor?: string) {
    if (nextCursor) {
      url += `&nextcursor=${nextCursor}`;
    }

    try {
      const { data } = await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.SOCIAL_DATA_API_KEY}`,
        },
      });

      if (data?.users) {
        for (const user of data.users) {
          await prisma.twitterFollowers.create({
            data: {
              id_str: user.id_str,
              name: user.name,
              screen_name: user.screen_name,
              location: user.location,
              url: user.url,
              description: user.description,
              protected: user.protected,
              verified: user.verified,
              followers_count: user.followers_count,
              friends_count: user.friends_count,
              listed_count: user.listed_count,
              favourites_count: user.favourites_count,
              statuses_count: user.statuses_count,
              created_at: new Date(user.created_at),
              profile_banner_url: user.profile_banner_url,
              profile_image_url_https: user.profile_image_url_https,
              can_dm: user.can_dm,
            },
          });
        }
      }

      if (data?.nextcursor) {
        await fetchFollowers(data.nextcursor);
      }

      return data?.users?.length || 0;
    } catch (error: any) {
      console.log(error, "error");
      return NextResponse.json({ error: error?.message });
    }
  }

  const count = await fetchFollowers();
  return NextResponse.json({ count }, { status: 200 });
}
