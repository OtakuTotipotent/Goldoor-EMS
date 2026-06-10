import Header from "../Elements/Header";
import AdminTasksList from "../Tasks/AdminTasksList";
import CreateTask from "../Tasks/CreateTask";

const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <CreateTask />
      <AdminTasksList />
    </div>
  );
};

export default AdminDashboard;
