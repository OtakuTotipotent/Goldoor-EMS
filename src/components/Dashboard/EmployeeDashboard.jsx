import Header from "../Elements/Header";
import TaskList from "../Tasks/TaskList";
import InsightsCard from "../Elements/InsightsCard";

const EmployeeDashboard = ({ data }) => {
  return (
    <div>
      <Header data={data} />
      <InsightsCard data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
