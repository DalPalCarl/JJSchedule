import EmployeeShift from "./EmployeeShift";
import { useState, useEffect } from 'react';


const DayShifts = () => {
    const [shifts, setShifts] = useState([]);

    useEffect(() => {
        //fetch("https://jjschedule-db-0c49dee0b796.herokuapp.com/shifts")
        fetch("http://localhost:8080/shifts")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setShifts(data);
                console.log(data);
            });
    }, []);

    return(
        <div className="w-10 text-start">
            <h4>In-Shop</h4>
                {shifts.map((shift) => {
                    return (
                    <EmployeeShift name={shift.employeeId} start={shift.start_time} end={shift.end_time} />
                    );
                })}
            <h4>Drivers</h4>
        </div>
    );
}

export default DayShifts;