import Header from "../Elements/Header";
import TaskInsights from "../Tasks/TaskInsights";
import EmployeeTaskList from "../Tasks/EmployeeTaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div>
      <Header data={data} />
      <TaskInsights data={data} />
      <EmployeeTaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
