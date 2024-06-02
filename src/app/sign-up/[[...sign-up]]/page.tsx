import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
