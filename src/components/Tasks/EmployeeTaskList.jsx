import AcceptTask from "./AcceptTask";

export default function EmployeeTasksList({ data }) {
  return (
    <div
      id="taskList"
      className="p-2 m-5 mt-10 h-96 grid md:flex md:justify-between gap-1 overflow-x-auto scroll-smooth"
    >
      <AcceptTask data={data} />
    </div>
  );
}
