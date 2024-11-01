import { format } from "date-fns";
import EmployeeShift from "./EmployeeShift";
import { useState, useEffect } from 'react';


const DayShifts = ({day}) => {
    const [shifts, setShifts] = useState([]);
    const [inShopShifts, setInShopShifts] = useState([]);
    const [driverShifts, setDriverShifts] = useState([]);

    useEffect(() => {
        //fetch("https://jjschedule-db-0c49dee0b796.herokuapp.com/shifts")
        const date = format(day, "yyyy/MM/dd");
        fetch("http://localhost:8080/shifts/" + date)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setShifts(data);
        });

        filterShifts();

    }, []);

    function filterShifts() {
        shifts.forEach((shift) => {
            if(shift.shiftRole === 'In-Shop'){
                setInShopShifts([...inShopShifts, shift]);
            }
            else{
                setDriverShifts([...driverShifts, shift]);
            }
        })
    }

    return(
        <div className="w-10 text-start">
            <h4>In-Shop</h4>
                {shifts.map((shift, i) => {
                    return (
                    <EmployeeShift key={i} name={shift.employeeId} start={shift.start_time} end={shift.end_time} />
                    );
                })}
            <h4>Driver</h4>
                {shifts.map((shift, i) => {
                    return (
                    <EmployeeShift key={i} name={shift.employeeId} start={shift.start_time} end={shift.end_time} />
                    );
                })}
        </div>
    );
}

export default DayShifts;