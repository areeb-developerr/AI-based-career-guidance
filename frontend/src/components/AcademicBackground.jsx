const AcademicBackground = ({ form, setForm }) => {
  const HandleInputChange = (e) => {
    if (e.target.name === "initialSubjects") {
      const arr = e.target.value.split(",");
      const newArr = arr.map((array) => ({ name: array, marks: 0 }));
      setForm((prev) => ({ ...prev, subjects: newArr }));
    }
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <form className="max-w-lg p-6 bg-gray-900 rounded-lg shadow-md mt-10 flex flex-col gap-8 items-center">
      <h1 className="font-bold text-3xl">Academic Background</h1>
      <div className="flex flex-col items-center">
        <label className="text-lg">What is your current education level?</label>
        <select
          className="text-black mt-2 rounded-lg px-3 py-1"
          name="degree"
          value={form.degree}
          onChange={HandleInputChange}
        >
          <option value="none">Select your education level</option>
          <option value="highschool">High School</option>
          <option value="matriculation">Matricuation</option>
          <option value="associate">Associate's Degree</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
        </select>
      </div>
      <div className="flex flex-col items-center">
        <label className="text-lg">
          What subjects you have studied in your last degree?
        </label>
        <input
          className="text-black mt-2 rounded-lg px-3 py-1 w-80"
          name="initialSubjects"
          value={form.initialSubjects}
          onChange={HandleInputChange}
          placeholder="seperate with commas"
        />
      </div>
      <div className="flex flex-col items-center">
        <label className="text-lg">
          Enter the marks of each subject below:
        </label>
        <ul>
          {form.subjects.map((subject) => (
            <li
              key={subject.name}
              className="flex items-center justify-end gap-2 mt-2"
            >
              <p className="text-lg font-semibold items-center justify-center">
                {subject.name.toUpperCase()}
              </p>
              <input
                className="text-black mt-2 rounded-lg px-3 py-1 w-80"
                name="subjectMarks"
                value={subject.marks}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    subjects: prev.subjects.map((item) =>
                      item.name === subject.name
                        ? { ...item, marks: Number(e.target.value) }
                        : item
                    ),
                  }))
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default AcademicBackground;
