import DatePicker from "react-datepicker";
import { useState } from "react";
export default function MentorFlight() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex items-center justify-center">
      <div className="datepicker relative form-floating mb-3 xl:w-96">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <label for="floatingInput" className="text-gray-700">
          Select a date
        </label>
      </div>
    </div>
  );
}
