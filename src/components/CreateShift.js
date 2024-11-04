import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';


const CreateShift = () => {
    const [pickedDate, setPickedDate] = useState(new Date());
    const [employeeList, setEmployeeList] = useState([]);
    const [employee, setEmployee] = useState({});
    const [startShiftHH, setStartShiftHH] = useState("");
    const [startShiftMM, setStartShiftMM] = useState("");
    const [endShiftHH, setEndShiftHH] = useState("");
    const [endShiftMM, setEndShiftMM] = useState("");


    useEffect(() => {
        fetch("http://localhost:8080/users")
        .then((res) => {
            return res.json();
        }).then((data) => {
            setEmployeeList(data);
        });
    }, [])

    return(
        <div className='mx-auto m-3 col text-start' style={{width: 500}}>
            <h1 className='my-3'>Create Shift</h1>
            <label htmlFor='employeeSelect'>Select Employee</label>
            <div className='input-group mb-5' id='employeeSelect'>
                <button type='button' className='btn btn-secondary dropdown-toggle' data-bs-toggle="dropdown" data-bs-auto-close='true' aria-expanded='false'>
                    Select Employee
                </button>
                <ul className='dropdown-menu'>
                    {employeeList.map((employee, i) => {
                        return(
                            <li key={employee + "" + i} className='dropdown-item' onClick={() => setEmployee(employee)}>{employee.fname}</li>
                        )
                    })}
                </ul>
                <input type="text" className='form-control' placeholder='Employee' value={employee?.fname ? employee.fname : "Select Employee"} readOnly />
            </div>
            <label htmlFor='dateSelect'>Select Date</label>
            <br/>
            <DatePicker id="dateSelect" selected={pickedDate} 
                onChange={(date) => {
                    setPickedDate(date);
                    console.log("Selected Date: ", date);
                }
            }/>
            <div className='row'>
            <label htmlFor='startTime'>Start</label>
                <div className='input-group'>
                    <input type='number' id='startTime' placeholder='HH' min="1" max="12" onChange={(c) => setStartShiftHH(c)} />
                    <input type='number' placeholder='MM' min="0" max="45" step="15" onChange={(c) => setStartShiftMM(c)} />
                </div>
                
            </div>

        </div>
    )
}

export default CreateShift;