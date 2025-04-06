import { useState } from "react";

function Userform() {
  // State using an object
  const [student, setDet] = useState({
    name: "",
    age: "",
    dob: "",
  });

  // Event handler for input changes
  const userDet = (e) => {
    const { name, value } = e.target;
    setDet((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Enter Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          onChange={userDet}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          onChange={userDet}
        />
        <input
          type="date"
          name="dob"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          onChange={userDet}
        />

        <button className="w-full bg-blue-500 p-2 mt-3 rounded hover:bg-blue-600">
          Submit
        </button>
      </div>

      {/* Display Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 mt-5">
        <h2 className="text-2xl font-bold mb-4">User Details</h2>
        <p className="text-lg">
          Name: <span className="font-semibold">{student.name}</span>
        </p>
        <p className="text-lg">
          Age: <span className="font-semibold">{student.age}</span>
        </p>
        <p className="text-lg">
          DOB: <span className="font-semibold">{student.dob}</span>
        </p>
      </div>
    </div>
  );
}

export default Userform;
