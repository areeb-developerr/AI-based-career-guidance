import { useState } from "react";
import AcademicBackground from "../components/AcademicBackground";
import Interests from "../components/Interests";
import Certifications from "../components/Certifications";
const Guidance = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [jobPreferences, setJobPreferences] = useState([]);
  const [certifications, setCertifications] = useState("");
  const [form, setForm] = useState({
    degree: "",
    initialSubjects: "",
    subjects: [
      {
        name: "",
        marks: 0,
      },
    ],
  });
  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 min-h-screen">
      <div className="flex flex-col items-center text-slate-50">
        <h1 className="font-bold text-5xl m-5">Career Guidance</h1>
        <p className="text-center text-lg max-w-2xl m-2">
          Fill all the fields according to the best of your knowledge so that
          you can get the best guide
        </p>
        {questionNo === 0 && (
          <AcademicBackground form={form} setForm={setForm} />
        )}
        {questionNo === 1 && (
          <Interests
            selectedInterests={selectedInterests}
            setSelectedInterests={setSelectedInterests}
            jobPreferences={jobPreferences}
            setJobPreferences={setJobPreferences}
          />
        )}
        {questionNo === 2 && (
          <Certifications
            certifications={certifications}
            setCertifications={setCertifications}
          />
        )}
        <div className="flex items-center justify-center mt-6 gap-36">
          {questionNo > 0 && (
            <button
              onClick={() => {
                setQuestionNo(questionNo - 1);
              }}
              className="bg-blue-700 px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              {" "}
              Prev
            </button>
          )}
          <button
            onClick={() => {
              setQuestionNo(questionNo + 1);
            }}
            className="bg-blue-700 px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            {" "}
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guidance;
