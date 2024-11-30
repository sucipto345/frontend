import { Link } from "react-router-dom";

const Template = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex justify-between w-full py-4">
        <Link to="/" className="text-lg cursor-pointer pl-12">
          ← Back to Home
        </Link>
        <Link to="/portal" className="text-lg cursor-pointer pr-12">
          Back to Portal →
        </Link>
      </div>
      {/* Content Halaman Design */}
      <div className="p-4 mt-16">
        <h1 className="text-2xl font-bold ">Template Page</h1>
        {/* Isi halaman lainnya */}
      </div>
    </div>
  );
};

export default Template;
