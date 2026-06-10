import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

export default function EmployeeTasksList() {
  return (
    <div
      id="taskList"
      className="p-2 m-5 mt-10 h-96 grid md:flex md:justify-between gap-1 overflow-x-auto scroll-smooth"
    >
      <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask />
    </div>
  );
}
