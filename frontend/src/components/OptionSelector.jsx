const OptionSelector = ({ type, options, selected, setSelected }) => {
  function HandleChange(event){
    
  }
  return (
    <div className="ml-4 mt-2 flex flex-col gap-1 font-semibold">
      {options.map((option) => (
        <div id={option} className="flex gap-1">
          <input
            type={type}
            value={option}
            checked={
              type === "checkbox"
                ? selected.includes(option)
                : selected === option
            }
            onChange={HandleChange}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default OptionSelector;
