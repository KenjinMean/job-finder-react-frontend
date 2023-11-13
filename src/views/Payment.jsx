export default function Payment({ creditcard, exp, updateFields }) {
  return (
    <div className="flex flex-col ">
      <h2>Payment</h2>
      <div className="flex-1 w-full mx-2">
        <div className="h-6 mt-3 text-xs font-bold leading-8 text-gray-500 uppercase">
          Credit Card
        </div>
        <div className="flex p-1 my-2 bg-white border border-gray-200 rounded">
          <input
            required
            value={creditcard}
            onChange={(e) => updateFields({ creditcard: e.target.value })}
            autoFocus
            name="card"
            placeholder="Credit Card#"
            className="w-full p-1 px-2 text-gray-800 outline-none appearance-none"
          />
        </div>
      </div>
      <div className="flex-1 w-full mx-2">
        <div className="h-6 mt-3 text-xs font-bold leading-8 text-gray-500 uppercase">
          Exp
        </div>
        <div className="flex p-1 my-2 bg-white border border-gray-200 rounded">
          <input
            required
            value={exp}
            onChange={(e) => updateFields({ exp: e.target.value })}
            name="exp"
            placeholder="YY/MM/DD"
            type="text"
            className="w-full p-1 px-2 text-gray-800 outline-none appearance-none"
          />
        </div>
      </div>
    </div>
  );
}
