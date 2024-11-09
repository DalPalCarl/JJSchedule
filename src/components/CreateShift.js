import { useState, useEffect } from 'react';
import { formatISO } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import './Components.css';


const CreateShift = () => {
    const [pickedDate, setPickedDate] = useState(new Date());
    const [employeeList, setEmployeeList] = useState([]);
    const [employee, setEmployee] = useState({});
    const [startShift, setStartShift] = useState("");
    const [endShift, setEndShift] = useState("");
    // const [startShiftHH, setStartShiftHH] = useState(-1);
    // const [startShiftMM, setStartShiftMM] = useState(-1);
    // const [endShiftHH, setEndShiftHH] = useState(-1);
    // const [endShiftMM, setEndShiftMM] = useState(-1);
    const [shiftRole, setShiftRole] = useState();
    const { scheduler_server_link } = UserAuth();

    const navigate = useNavigate();


    useEffect(() => {
        getUsers();
    }, [])

    async function getUsers() {
        await fetch(scheduler_server_link + "/users")
        .then((res) => {
            return res.json();
        }).then((data) => {
            setEmployeeList(data);
        });
    }

    async function handleSubmitShift(body) {

        const response = await fetch(scheduler_server_link + "/shifts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then(
            navigate("/JJSchedule")
        );

    }

    const submitCreateShift = () => {
        if(employee?.id && startShift !== "" && endShift !== "" && shiftRole){
            const body = {
                "employeeId": employee.id,
                "start_time": startShift,
                "end_time": endShift,
                "shiftDate": formatISO(pickedDate, { representation: 'date'}),
                "shiftRole": shiftRole
            }
            
            handleSubmitShift(body);
        }
        else{
            console.log("Missing some info!");
        }
    }

    const clearCreateShift = () => {
        setEmployee({});
        setStartShift("");
        setEndShift("");
        setPickedDate(new Date());
        setShiftRole();
    }

    return(
        <div className='mx-auto m-3 text-start font-serif-reg' style={{width: '20rem'}}>
            <h1 className='my-3'>Create Shift</h1>
            <label htmlFor='employeeSelect'>Select Employee</label>
            <div className='input-group mb-3 row' id='employeeSelect'>
                <button type='button' className='btn btn-secondary dropdown-toggle' data-bs-toggle="dropdown" data-bs-auto-close='true' aria-expanded='false'>
                    {employee?.fname ? employee.id + " - " + employee.fname : "Select Employee"}
                </button>
                <ul className='dropdown-menu'>
                    {employeeList.map((employee, i) => {
                        return(
                            <li key={employee + "" + i} className='dropdown-item dd-li' onClick={() => setEmployee(employee)}>{employee.id + " - " + employee.fname}</li>
                        )
                    })}
                </ul>
            </div>
            <label htmlFor='dateSelect'>Select Date</label>
            <br/>
            <DatePicker id="dateSelect" className="form-control" selected={pickedDate} 
                onChange={(date) => {
                    setPickedDate(date);
                    console.log("Selected Date: ", date);
                }
            }/>
            <div className='my-3 row' id='startEndTimes'>
                <div className='col'>
                    <label htmlFor='startTime' className='me-2'>Start</label>
                    <input type='text' id='startTime' className='form-control' placeholder='Start Time' onChange={(c) => setStartShift(c.target.value)} />
                </div>
                <div className='col'>
                    <label htmlFor='endTime' className='me-2'>End</label>
                    <input type='text' id='endTime' className='form-control' placeholder='End Time' onChange={(c) => setEndShift(c.target.value)} />
                </div>
            </div>
            {/* <div className='my-3 row'>
                <div className='col'>
                    <label htmlFor='startTime'>Start</label>
                    <div className='input-group'>
                        <input type='number' id='startTime' placeholder='HH' min="1" max="12" onChange={(c) => setStartShiftHH(c)} />
                        <input type='number' placeholder='MM' min="0" max="45" step="15" onChange={(c) => setStartShiftMM(c)} />
                    </div>
                </div>
                <div className='col'>
                    <label htmlFor='endTime'>End</label>
                    <div className='input-group'>
                        <input type='number' id='endTime' placeholder='HH' min="1" max="12" onChange={(c) => setEndShiftHH(c)} />
                        <input type='number' placeholder='MM' min="0" max="45" step="15" onChange={(c) => setEndShiftMM(c)} />
                    </div>
                </div>
            </div> */}
            <div className='input-group row my-3'>
                <button type='button' className='btn btn-primary dropdown-toggle' style={{zIndex: 0}} data-bs-toggle='dropdown' data-bs-auto-close='true' aria-expanded='false'>
                    {shiftRole ? shiftRole : "Select Role"}
                </button>
                <ul className='dropdown-menu'>
                    <li className='dropdown-item dd-li' onClick={() => setShiftRole("In-Shop")}>In-Shop</li>
                    <li className='dropdown-item dd-li' onClick={() => setShiftRole("Driver")}>Driver</li>
                </ul>
            </div>
            <div className='btn-group'>
                <button type="button" className='btn btn-secondary' onClick={() => clearCreateShift()}>Clear</button>
                <button type="button" className='btn btn-primary' onClick={() => submitCreateShift()}>Submit</button>
            </div>
        </div>
    )
}

export default CreateShift;