import Header from "../Elements/Header";
import TaskListNumbers from "../Tasks/TaskListNumbers";
import TaskList from "../Tasks/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div>
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
