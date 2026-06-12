const AcceptTask = () => {
  return (
    <div className="md:h-full h-48 basis-md shrink-0 bg-gray-950 hover:bg-black transition-colors rounded-xl p-4 grid gap-4 items-start place-content-start">
      <div className="flex justify-between items-center">
        <span className="bg-gray-800 text-red-400 px-5 py-1 text-sm leading-tight rounded-full cursor-default">
          High
        </span>
        <span className="text-gray-500 text-sm cursor-default">
          Jun, 02, 2026
        </span>
      </div>
      <div className="flex flex-col gap-1 h-full overflow-hidden cursor-default">
        <h2 className="font-semibold text-lg text-emerald-500">
          A Full-stack website order
        </h2>
        <p className="text-sm italic text-gray-400 leading-normal">
          A full-stack website project order refers to the structured roadmap
          and sequence of execution required to build a web application from
          scratch. Because a full-stack site contains a user interface
          (frontend), data logic (backend), and storage (database), executing
          these pieces in the right order prevents bugs and minimizes rewritten
          code.
        </p>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <button>Mark as Completed</button>
        <button>Mark as Failed</button>
      </div>
    </div>
  );
};
export default AcceptTask;
