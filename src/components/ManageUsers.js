import { useState, useEffect } from 'react';
import './Components.css';
import { useNavigate } from 'react-router-dom';

const ManageUsers = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const [employee, setEmployee] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        getUsers();
    }, [])

    async function getUsers() {
        await fetch("http://localhost:8080/users")
        .then((res) => {
            return res.json();
        }).then((data) => {
            setEmployeeList(data);
        });
    }

    async function submitCreateUser(e){
        e.preventDefault();

        const body = {
            "id": e.target.userid.value,
            "fname": e.target.userFname.value,
            "lname": e.target.userLname.value
        }

        const response = await fetch("http://localhost:8080/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        navigate("/");
    }

    async function deleteUser(){
        const response = await fetch(`http://localhost:8080/users/${employee.id}`, {
            method: 'DELETE'
        });
        navigate("/");

    }

    return(
        <div className='mx-auto text-start font-serif-reg' style={{width: '20rem'}}>
            <h1 className='mt-3'>Create User</h1>
            <br/>
            <form className='col' onSubmit={submitCreateUser}>
                <div className='my-1 justify-content-around'>
                    <label htmlFor='userid' className='form-label'>User/Employee ID</label>
                    <input type='text' className='form-control' placeholder='ID' name='userid' id='userid' required/>
                </div>
                <div className='my-1'>
                    <label htmlFor='userFname' className='form-label'>First Name</label>
                    <input type='text' className='form-control' placeholder='First' name='userFname' id='userFname' required/>
                </div>
                <div className='my-1'>
                    <label htmlFor='userLname' className='form-label'>Last Name</label>
                    <input type='text' className='form-control' placeholder='Last' name='userLname' id='userLname' required/>
                </div>
                <button type='submit' className='btn btn-primary my-3 mx-0'>Submit</button>
            </form>



            <h1 className='my-3'>Delete User</h1>
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
            <button type='button' className={employee?.id ? 'btn btn-danger' : 'btn btn-danger disabled'} onClick={() => deleteUser()}>Delete User</button>

        </div>
        
    )
}

export default ManageUsers;