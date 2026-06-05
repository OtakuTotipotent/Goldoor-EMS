import Header from "../Elements/Header";
import AllTasks from "../Elements/AllTasks";
import CreateTask from "../Elements/CreateTask";

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
