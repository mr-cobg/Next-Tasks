import { Task as ITask } from "@prisma/client";

interface IProp {
  task: ITask;
}

export default function Task({ task }: IProp) {
  return (
    <div className="text-start card h-full w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{task.name}</h2>
        <p>{task.description}</p>
        <small className="font-light text-xs">
          <b>Updated at: </b> {task.updatedAt.toString()}
        </small>
        <small className="font-light text-xs">
          <b>Created at: </b> {task.createdAt.toString()}
        </small>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit Task</button>
        </div>
      </div>
    </div>
  );
}
