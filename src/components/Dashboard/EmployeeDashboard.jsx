import Header from "../Elements/Header";
import TaskListNumbers from "../Tasks/TaskListNumbers";
import TaskList from "../Tasks/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
