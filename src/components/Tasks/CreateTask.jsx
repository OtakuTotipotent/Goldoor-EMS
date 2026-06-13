import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      taskCategory,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;
    data.forEach((emp) => {
      if (assignTo == emp.firstName) {
        emp.tasks.push(newTask);
      }
    });

    setUserData(data);

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setTaskCategory("");
  };

  return (
    <div className="md:w-8/12 m-auto mt-8 md:mt-15 px-10 md:px-0">
      <h2 className="font-bold text-emerald-500 text-3xl my-8">Admin Panel</h2>
      {/* Buttons */}
      <div className="border-y border-emerald-500 rounded-sm p-5 grid gap-4">
        <div className="flex gap-4">
          <button className="border border-emerald-500 rounded-full px-4 py-2 text-gray-300 hover:opacity-70 cursor-pointer">
            Employees List
          </button>
          <button className="border border-emerald-500 rounded-full px-4 py-2 text-gray-300 hover:opacity-70 cursor-pointer">
            Active Projects
          </button>
        </div>
        <div className="flex gap-4 justify-end">
          <button className="border border-emerald-500 rounded-full px-4 py-2 text-gray-300 hover:opacity-70 cursor-pointer">
            Add Employee
          </button>
          <button className="border border-emerald-500 rounded-full px-4 py-2 text-gray-300 hover:opacity-70 cursor-pointer">
            Remove Employee
          </button>
        </div>
      </div>
      {/* Create From */}
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="mt-10 p-4 bg-gray-950/20 rounded-lg grid gap-5 md:grid-cols-2 md:gap-5"
      >
        <div className="grid gap-6">
          <div className="grid gap-3">
            <label
              className="text-md font-semibold text-emerald-600 shrink-0"
              htmlFor="title"
            >
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              className="outline-none bg-gray-900 w-full px-5 py-1 text-md text-gray-300 rounded-md"
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div className="grid gap-3">
            <label
              className="text-md font-semibold text-emerald-600 shrink-0"
              htmlFor="date"
            >
              Due Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
              className="outline-none bg-gray-900 w-full px-5 py-1 text-md text-gray-300 rounded-md"
              type="date"
              name="date"
              id="date"
            />
          </div>
          <div className="grid gap-3">
            <label
              className="text-md font-semibold text-emerald-600 shrink-0"
              htmlFor="employee"
            >
              Assign To
            </label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              required
              className="outline-none bg-gray-900 w-full px-5 py-1 text-md text-gray-300 rounded-md"
              type="text"
              name="employee"
              id="employee"
            />
          </div>
          <div className="grid gap-3">
            <label
              className="text-md font-semibold text-emerald-600 shrink-0"
              htmlFor="category"
            >
              Category
            </label>
            <input
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              required
              className="outline-none bg-gray-900 w-full px-5 py-1 text-md text-gray-300 rounded-md"
              type="text"
              name="category"
              id="category"
            />
          </div>
        </div>
        {/* Button */}
        <div className="grid gap-6 md:flex md:flex-col">
          <div className="grid gap-3">
            <label
              className="text-md font-semibold text-emerald-600 shrink-0"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
              className="outline-none bg-gray-900 w-full px-5 py-2 text-md text-gray-300 rounded-md h-28 md:h-52"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="flex items-center justify-center p-4">
            <button className="text-emerald-500 border-2 border-emerald-700 rounded-full px-5 py-1.5 bg-emerald-300/10 cursor-pointer hover:opacity-70 transition-opacity">
              Create Task Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreateTask;
