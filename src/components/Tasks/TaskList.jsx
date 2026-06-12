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
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} />;
        }
        if (elem.newTask) {
          return <NewTask key={index} />;
        }
        if (elem.completed) {
          return <CompleteTask key={index} />;
        }
        if (elem.failed) {
          return <FailedTask key={index} />;
        }
      })}
    </div>
  );
};

export default TaskList;
