export default function Details({ address, city, updateFields }) {
  return (
    <div className="flex flex-col ">
      <h2>Details</h2>
      <div className="flex-1 w-full mx-2">
        <div className="h-6 mt-3 text-xs font-bold leading-8 text-gray-500 uppercase">
          Address
        </div>
        <div className="flex p-1 my-2 bg-white border border-gray-200 rounded">
          <input
            required
            autoFocus
            value={address}
            onChange={(e) => updateFields({ address: e.target.value })}
            name="address"
            placeholder="Address"
            className="w-full p-1 px-2 text-gray-800 outline-none appearance-none"
          />
        </div>
      </div>
      <div className="flex-1 w-full mx-2">
        <div className="h-6 mt-3 text-xs font-bold leading-8 text-gray-500 uppercase">
          City
        </div>
        <div className="flex p-1 my-2 bg-white border border-gray-200 rounded">
          <input
            required
            value={city}
            onChange={(e) => updateFields({ city: e.target.value })}
            name="city"
            placeholder="City"
            type="text"
            className="w-full p-1 px-2 text-gray-800 outline-none appearance-none"
          />
        </div>
      </div>
    </div>
  );
}
