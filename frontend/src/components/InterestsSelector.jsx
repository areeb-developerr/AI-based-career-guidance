const allInterests = [
  "Programming",
  "Design",
  "Business",
  "Medicine",
  "AI",
  "Engineering",
  "Teaching",
  "Gaming",
];

const InterestsSelector = ({ selectedInterests, setSelectedInterests }) => {
  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <div className="w-full mx-auto flex flex-col">
      <label className="text-lg mb-3">Select your interests :</label>

      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {allInterests.map((interest) => (
          <button
            key={interest}
            onClick={() => toggleInterest(interest)}
            className={`px-3 py-1 rounded-full border transition-all text-sm ${
              selectedInterests.includes(interest)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-gray-800 border-gray-300"
            }`}
          >
            {interest}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InterestsSelector;
