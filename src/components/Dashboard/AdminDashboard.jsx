import Header from "../Elements/Header";
import AllTasks from "../Tasks/AllTasks";
import CreateTask from "../Tasks/CreateTask";

const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
