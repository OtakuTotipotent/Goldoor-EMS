import Header from "../Elements/Header";
import TaskList from "../Tasks/TaskList";
import InsightsCard from "../Elements/InsightsCard";

const EmployeeDashboard = () => {
  return (
    <div>
      <Header />
      <InsightsCard />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
