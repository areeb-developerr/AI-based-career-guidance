import React from "react";

const Certifications = ({ certifications, setCertifications }) => {
  return (
    <div className="max-w-lg p-6 bg-gray-900 rounded-lg shadow-md mt-10 flex flex-col gap-2 justify-center">
      <h1 className="font-bold text-3xl text-center">Certifications</h1>
      <div className="w-full mx-auto flex flex-col">
        <form className="flex flex-col items-center">
          <label className="text-lg">
            Do you have any certifications related to your field of interest or
            else?
          </label>
          <input
            className="text-black mt-2 rounded-lg px-3 py-1 w-80"
            name="initialSubjects"
            value={certifications}
            onChange={(e) => setCertifications(e.target.value)}
            placeholder="seperate with commas"
          />
        </form>
      </div>
    </div>
  );
};

export default Certifications;
