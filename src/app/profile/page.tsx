import { dummyUserPhoto } from "@/lib/config";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const user = await currentUser();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <Image
                    src={user?.imageUrl ?? dummyUserPhoto}
                    alt="User"
                    height={96}
                    width={96}
                  />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                {user?.fullName} {user?.id}
              </h2>
              <p>{user?.primaryEmailAddress?.emailAddress}</p>
              <div className="card-actions">
                <Link href={"/profile/update"} className="btn btn-primary">
                  Update Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
