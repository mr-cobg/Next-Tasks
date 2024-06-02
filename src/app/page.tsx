import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Master Your Tasks with Ease</h1>
            <p className="py-6">
              Stay organized, boost productivity, and achieve your goals
              effortlessly with Next Tasks. Our intuitive task management app is
              designed to streamline your workflow, ensuring you never miss a
              deadline. From daily to-dos to complex project management, [App
              Name] keeps you on track and in control.
            </p>

            <SignedOut>
              <div className="join">
                <Link href={"/sign-up"} className="btn btn-primary join-item">
                  Sign Up
                </Link>
                <p className="btn btn-primary join-item">- or -</p>
                <Link href={"/sign-in"} className="btn btn-primary join-item">
                  Sign In
                </Link>
              </div>
            </SignedOut>

            <SignedIn>
              <Link href={"/dashboard"} className="btn btn-primary">
                Go to Dashboard
              </Link>
            </SignedIn>
          </div>
        </div>
      </div>
    </main>
  );
}
