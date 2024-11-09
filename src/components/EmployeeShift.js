import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

const EmployeeShift = ({ID, name, start, end}) => {
    const { user, scheduler_server_link } = UserAuth();
    const [isDeleted, setIsDeleted] = useState(false);

    async function deleteShift(){
        const response = await fetch(scheduler_server_link + `/shifts/${ID}`, {
            method: 'DELETE'
        }).then(
            setIsDeleted(true)
        );
    }

    return (
        <div className="flex flex-col my-4" style={isDeleted ? {display: 'none'} : {}}>
            <hr className='border border-primary border-1' />
            <div className='flex d-flex justify-content-between'>
                <p className='fs-4'>{name}</p>
                {user?.manager === true ? <a href='#' onClick={() => deleteShift()}><IoMdClose/></a> : null }
            </div>
            
            <div className="flex d-flex w-full gap-2">
                <input className="form-control fw-bold fs-5" type="text" name="start" value={start} disabled readOnly />
                <p className="align-middle">-</p>
                <input className="form-control fw-bold fs-5" type="text" name="end" value={end} disabled readOnly />
            </div>
        </div>
    );
}

export default EmployeeShift;