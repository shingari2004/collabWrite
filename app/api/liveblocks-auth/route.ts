import { liveblocks } from "@/lib/liveblocks";
import { getUserColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  console.log(request.url);

  const clerkUser = await currentUser();

  if (!clerkUser) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/sign-in',
      },
    });
  }

  const { id, firstName, lastName, emailAddresses, imageUrl } = clerkUser;

  const email = emailAddresses?.[0]?.emailAddress ?? null;

  if (!email) {
    return new Response('No email found for user', { status: 400 });
  }

  const user = {
    id,
    info: {
      id,
      name: `${firstName} ${lastName}`,
      email,
      avatar: imageUrl,
      color: getUserColor(id),
    },
  };

  const { status, body } = await liveblocks.identifyUser(
    {
      userId: id,
      groupIds: [],
    },
    { userInfo: user.info },
  );

  return new Response(body, { status });
}
