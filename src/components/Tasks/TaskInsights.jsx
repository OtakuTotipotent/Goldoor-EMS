export default function TaskInsights() {
  <div className="grid grid-cols-2 md:flex m-5 bg-gray-950/50 gap-2 p-2 mt-10 rounded-xl">
    <div className="flex-1 bg-gray-900 py-2 rounded-lg text-center text-orange-400/80 cursor-default hover:bg-gray-900/70 transition-colors">
      <h2 className="text-2xl font-bold">0</h2>
      <h3 className="font-semibold py-2">Pending</h3>
    </div>
    <div className="flex-1 bg-gray-900 py-2 rounded-lg text-center text-fuchsia-400/80 cursor-default hover:bg-gray-900/70 transition-colors">
      <h2 className="text-2xl font-bold">5</h2>
      <h3 className="font-semibold py-2">Completed</h3>
    </div>
    <div className="flex-1 bg-gray-900 py-2 rounded-lg text-center text-blue-400/80 cursor-default hover:bg-gray-900/70 transition-colors">
      <h2 className="text-2xl font-bold">3</h2>
      <h3 className="font-semibold py-2">Accepted</h3>
    </div>
    <div className="flex-1 bg-gray-900 py-2 rounded-lg text-center text-red-400/80 cursor-default hover:bg-gray-900/70 transition-colors">
      <h2 className="text-2xl font-bold">2</h2>
      <h3 className="font-semibold py-2">Rejected</h3>
    </div>
  </div>;
}
