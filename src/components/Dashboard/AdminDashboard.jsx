import Header from "../Elements/Header";
import AllTasks from "../Elements/AllTasks";
import CreateTask from "../Elements/CreateTask";

const AdminDashboard = ({ data }) => {
  return (
    <div>
      <Header data={data} />
      <CreateTask data={data} />
      <AllTasks data={data} />
    </div>
  );
};

export default AdminDashboard;
