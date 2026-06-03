import Header from "../../Elements/Header";
import AllTasks from "./AllTasks";
import CreateTask from "./CreateTask";

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
