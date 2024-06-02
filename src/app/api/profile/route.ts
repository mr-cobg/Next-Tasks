import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const firstName = formData.get("firstName")! as string;
  const lastName = formData.get("lastName")! as string;
  // TODO: Make this work.
  //   const image = formData.get("image")!;

  const { userId } = getAuth(req);

  const updatedUser = await clerkClient.users.updateUser(userId!, {
    firstName,
    lastName,
  });

  return redirect("/profile");
}
