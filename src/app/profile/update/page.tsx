import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="card w-96 bg-base-100 shadow-xl">
            <form action="/api/profile" method="post" className="card-body">
              <label className="input input-bordered flex items-center gap-2">
                FirstName
                <input
                  type="text"
                  required
                  className="grow"
                  name="firstName"
                  defaultValue={user?.firstName ?? ""}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                LastName
                <input
                  type="text"
                  required
                  className="grow"
                  name="lastName"
                  defaultValue={user?.lastName ?? ""}
                />
              </label>
              {/* TODO: Make this work. */}
              {/* <input
                type="file"
                required
                className="file-input file-input-bordered w-full max-w-xs"
                name="image"
              /> */}
              <button type="submit" className="card-action btn btn-primary">
                Update Information
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
