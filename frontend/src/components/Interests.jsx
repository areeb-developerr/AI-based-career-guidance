const allInterests = [
  "High income",
  "Creativity",
  "Helping others",
  "Flexibility",
];
import InterestsSelector from "./InterestsSelector";
import OptionSelector from "./OptionSelector";

const Interests = ({
  jobPreferences,
  setJobPreferences,
  selectedInterests,
  setSelectedInterests,
}) => {
  return (
    <div>
      <div className="max-w-lg p-6 bg-gray-900 rounded-lg shadow-md mt-10 flex flex-col gap-2 justify-center">
        <h1 className="font-bold text-3xl text-center">Interests</h1>
        <InterestsSelector
          selectedInterests={selectedInterests}
          setSelectedInterests={setSelectedInterests}
        />
        <div>
          <label className="text-lg mb-3">Do you prefer a job with :</label>
          <OptionSelector
            selected={jobPreferences}
            setSelected={setJobPreferences}
            type="checkbox"
            options={allInterests}
          />
        </div>
      </div>
    </div>
  );
};

export default Interests;
