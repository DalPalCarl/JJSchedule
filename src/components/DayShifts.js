import { format } from "date-fns";
import EmployeeShift from "./EmployeeShift";
import { useState, useEffect, useRef } from 'react';
import { UserAuth } from "../context/AuthContext";


const DayShifts = ({day}) => {
    const [shifts, setShifts] = useState([]);
    const { scheduler_server_link } = UserAuth();
    
    useEffect(() => {
        //fetch("https://jjschedule-db-0c49dee0b796.herokuapp.com/shifts")
        const date = format(day, "yyyy/MM/dd");
        fetch(scheduler_server_link + "/shifts/" + date)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setShifts(data);
        });

    }, []);

    return(
        <div className="w-10 text-start">
            <h4 className="text-bg-primary p-1">In-Shop</h4>
                {shifts.map((shift, i) => {
                    if(shift.shiftRole === "In-Shop"){
                        return (
                            <EmployeeShift key={i} ID={shift.shiftId} name={shift.fname} start={shift.start_time} end={shift.end_time} />
                        );
                    }
                    return;
                })}
            <h4 className="text-bg-primary p-1">Driver</h4>
                {shifts.map((shift, i) => {
                    if(shift.shiftRole === "Driver"){
                        return (
                            <EmployeeShift key={i} ID={shift.shiftId} name={shift.fname} start={shift.start_time} end={shift.end_time} />
                        );
                    }
                    return;
                })}
        </div>
    );
}

export default DayShifts;