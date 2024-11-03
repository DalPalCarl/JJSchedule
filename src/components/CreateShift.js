import { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';


const CreateShift = () => {
    const [pickedDate, setPickedDate] = useState(new Date());
    const [employeeList, setEmployeeList] = useState([]);
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/users")
        .then((res) => {
            return res.json();
        }).then((data) => {
            setEmployeeList(data);
        });
    }, [])

    return(
        <div className='text-start mx-auto m-3' style={{width: 400}}>
            <h1>Create Shift</h1>
            <div className='input-group'>
                <button type='button' className='btn btn-secondary dropdown-toggle' data-bs-toggle="dropdown" data-bs-auto-close='true' aria-expanded='false'>
                    Select Employee
                </button>
                <ul className='dropdown-menu'>
                    {employeeList.map((employee) => {
                        return(
                            <li className='dropdown-item' onClick={() => setEmployee(employee)}>{employee.fname}</li>
                        )
                    })}
                </ul>
                <input type="text" className='form-control' placeholder='Employee' value={employee?.fname ? employee.fname : "Select Employee"} readOnly />
            </div>
            <DatePicker selected={pickedDate} 
                onChange={(date) => {
                    setPickedDate(date);
                    console.log("Selected Date: ", date);
                }
            }/>
        </div>
    )
}

export default CreateShift;