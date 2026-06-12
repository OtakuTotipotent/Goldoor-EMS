const FailedTask = ({ data }) => {
  return (
    <div className="md:h-full h-48 basis-md shrink-0 bg-gray-950/50 hover:bg-black transition rounded-xl p-4 grid gap-4 items-start place-content-start">
      <div className="flex justify-between items-center">
        <span className="bg-gray-800 text-red-400 px-5 py-1 text-sm leading-tight rounded-full cursor-default">
          {data.priority}
        </span>
        <span className="text-gray-500 text-sm cursor-default">
          {data.date}
        </span>
      </div>
      <div className="flex flex-col gap-1 h-full overflow-hidden cursor-default">
        <h2 className="font-semibold text-lg text-emerald-500">{data.title}</h2>
        <p className="text-sm italic text-gray-400 leading-normal">
          {data.description}
        </p>
        <span className="text-sm bg-emerald-600 text-gray-900 font-semibold w-fit px-6 py-0.5 rounded-full my-4">
          {data.category}
        </span>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <button className="border border-gray-500 px-2 py-1 rounded-md text-gray-400 cursor-pointer hover:text-gray-300 transition">
          Failed
        </button>
        <button className="border border-gray-500 px-2 py-1 rounded-md text-gray-400 cursor-pointer hover:text-gray-300 transition">
          Retry
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
