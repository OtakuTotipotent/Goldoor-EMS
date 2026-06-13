import Header from "../Elements/Header";
import AllTasks from "../Tasks/AllTasks";
import CreateTask from "../Tasks/CreateTask";

const AdminDashboard = (props) => {
  return (
    <div>
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
