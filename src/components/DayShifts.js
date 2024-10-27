import EmployeeShift from "./EmployeeShift";

const DayShifts = () => {

    return(
        <div className="w-10 text-start">
            <h4>In-Shop</h4>
            <EmployeeShift name="Dallas" start="1" end="10" />
            <h4>Drivers</h4>
        </div>
    );
}

export default DayShifts;