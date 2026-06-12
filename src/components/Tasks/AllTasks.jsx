const AllTasks = () => {
  return (
    <div className="p-5 md:w-8/12 md:m-auto mt-8 mx-8 md:mt-15 px-10 md:px-0">
      <h2 className="text-emerald-500 p-2">All Tasks</h2>
      <div className="border-y border-emerald-500 rounded-sm py-5 px-1">
        <div className="flex flex-col gap-1.5 max-h-96 overflow-auto">
          <div className="bg-emerald-500/20 rounded-lg p-4 flex justify-between gap-4 cursor-default hover:bg-emerald-500/30 transition-colors text-gray-300">
            <h2>@username</h2>
            <h3>"Task Title is here"</h3>
            <h5>Pending</h5>
          </div>
          <div className="bg-emerald-500/20 rounded-lg p-4 flex justify-between gap-4 cursor-default hover:bg-emerald-500/30 transition-colors text-gray-300">
            <h2>@username</h2>
            <h3>"Task Title is here"</h3>
            <h5>Pending</h5>
          </div>
          <div className="bg-emerald-500/20 rounded-lg p-4 flex justify-between gap-4 cursor-default hover:bg-emerald-500/30 transition-colors text-gray-300">
            <h2>@username</h2>
            <h3>"Task Title is here"</h3>
            <h5>Pending</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTasks