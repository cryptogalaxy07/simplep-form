import { useState } from "react";

export default function SwitchRadio(props) {
    const [isChecked, setIsChecked] = useState(false);
  const hanldeState = () =>{
    setIsChecked(!isChecked);
  }
  return (
    <div className="flex items-center p-2">
      <label
        for={props.title}
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          onClick={hanldeState}
          type="checkbox"
          id={props.title}
          className="sr-only peer"
          checked={isChecked}
          
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-5 text-lg font-medium text-gray-900 dark:text-gray-300">
          {props.title}
        </span>
      </label>
    </div>
  );
}
