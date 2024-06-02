import Link from "next/link";

export default function Page() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">The page you are looking for couldn't be found</p>
          <Link href={"/"} className="btn btn-primary">
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
