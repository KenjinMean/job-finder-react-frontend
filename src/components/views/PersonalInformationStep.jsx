import { Link } from "react-router-dom";

export default function PersonalInformationStep({ email, updateFields }) {
  return (
    <>
      <input
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        className="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="email"
        placeholder="Email"
      />
      <input
        required
        className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="password"
        placeholder="Password"
      />
      <input
        required
        className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
        type="password"
        placeholder="Repeat Password"
      />
    </>
  );
}
