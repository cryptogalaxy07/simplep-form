import Datepicker from "flowbite-datepicker/Datepicker";
import { useState } from "react";
export default function DateRangePicker() {
  return (
      <div className="grid sm:flex items-center justify-center">
          <input
            name="start"
            type="date"
            className=" md:w-48 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-6"
          />
        <span className="mx-4 text-gray-500">to</span>
    
          <input
            name="end"
            type="date"
            className=" md:w-48 bg-gray-50 border text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-6"
          />
      </div>
  );
}
