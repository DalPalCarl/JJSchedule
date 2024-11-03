import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';

const CreateShift = () => {
    const [pickedDate, setPickedDate] = useState(new Date());

    return(
        <div className='text-start mx-auto m-3' style={{width: 400}}>
            <h1>Create Shift</h1>
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