import SwitchRadio from "../components/switch";
import DateRangePicker from "../components/datepicker";
import ActionButton from "../components/button";
export default function MentorFlight() {
  return (
    <form className="p-6 md:p-16" id="part3">
      <p className="text-center text-3xl mb-10 font-extrabold">Mentor Flight Generator</p>
      <div className ="flex-col justify-center items-center  p-4">
        <p className="text-center text-xl pb-4 font-bold">Mission Date</p>
        <DateRangePicker />
      </div>
      <div className="flex-col justify-center items-center p-4">
        <p className="text-center text-xl pb-4 font-bold">Flight Duration</p>
        <div className="text-center"><input type="text" className="rounded-xl"/></div>
      </div>
      <div className="flex justify-center items-center p-4">
        <div>
          <SwitchRadio title="Experience" />
          <SwitchRadio title="Food" />
          <SwitchRadio title="Approaches" />
          <SwitchRadio title="New Airport" />
          <SwitchRadio title="Holds" />
          <SwitchRadio title="Instrument Hours" />
          <SwitchRadio title="Oxygen" />
          <SwitchRadio title="200+ Mile X-Country" />
          <SwitchRadio title="AirSpace" />
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <ActionButton type="submit" />
        <ActionButton type="reset" />
      </div>
    </form>
  );
}
