import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="p-5 md:w-8/12 md:m-auto mt-8 mx-8 md:mt-15 px-10 md:px-0">
      <h2 className="text-emerald-500 p-2">Employee Stats</h2>
      <div className="border-y border-emerald-500 rounded-sm py-5 px-1">
        <div className="grid grid-cols-5 bg-emerald-800 text-gray-300 rounded-sm text-md font-semibold items-center text-center p-2 cursor-default select-none mb-4 uppercase">
          <h5>Employee</h5>
          <h5>New</h5>
          <h5>Active</h5>
          <h5>Completed</h5>
          <h5>Failed</h5>
        </div>
        <div className="flex flex-col gap-1.5 max-h-96 overflow-auto">
          {userData.employees.map(function (employee, index) {
            return (
              <div
                key={index}
                className="bg-emerald-500/20 rounded-lg p-4 grid grid-cols-5 cursor-default hover:bg-emerald-500/30 transition-colors text-gray-300 text-center"
              >
                <h5 className="text-left">{employee.firstName}</h5>
                <h5>{employee.taskCounts.newTask}</h5>
                <h5>{employee.taskCounts.active}</h5>
                <h5>{employee.taskCounts.completed}</h5>
                <h5>{employee.taskCounts.failed}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
