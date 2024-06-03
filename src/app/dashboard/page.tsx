import Loading from "@/components/Loading";
import TaskList from "@/components/TaskList";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="w-full">
          <h1 className="text-5xl font-bold">Tasks</h1>
          <div className="divider"></div>
          <Suspense fallback={<Loading />}>
            <TaskList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
