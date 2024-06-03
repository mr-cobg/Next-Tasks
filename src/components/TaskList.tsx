import { Task as ITask } from "@prisma/client";
import Task from "./Task";

export default async function TaskList() {
  const res = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });
  const tasks = (await res.json()) as ITask[];

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 grid-auto-rows-1">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
