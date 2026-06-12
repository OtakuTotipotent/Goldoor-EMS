import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="taskList"
      className="p-2 m-5 mt-10 h-96 grid md:flex md:justify-between gap-1 overflow-x-auto scroll-smooth"
    >
      {data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask />;
        }
        if (elem.newTask) {
          return <NewTask />;
        }
        if (elem.completed) {
          return <CompleteTask />;
        }
        if (elem.failed) {
          return <FailedTask />;
        }
      })}
    </div>
  );
};

export default TaskList;
