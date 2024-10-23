import { addDays, getDayOfYear, getMonth, getWeek } from 'date-fns';
import { useState } from 'react';

const Home = () => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const wArray = [0,1,2,3,4,5,6];
    const date = new Date();
    const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const [displayMonth, setDisplayMonth] = useState("");

    return(
        <div className="table-responsive mx-5">
            <div className='btn-group m-2 justify-content-start'>
                <button type='button' className='btn btn-primary'>Prev</button>
                <button type='button' className='btn btn-primary'>Next</button>
            </div>
            <h1></h1>
            <table className="table table-striped-columns">
                <thead>
                    <tr>
                        <th scope="col">Sun</th>
                        <th scope="col">Mon</th>
                        <th scope="col">Tue</th>
                        <th scope="col">Wed</th>
                        <th scope="col">Thu</th>
                        <th scope="col">Fri</th>
                        <th scope="col">Sat</th>
                    </tr>
                    <tr className="fs-5">
                        <th scope="col">{wArray[0]}</th>
                        <th scope="col">{wArray[1]}</th>
                        <th scope="col">{wArray[2]}</th>
                        <th scope="col">{wArray[3]}</th>
                        <th scope="col">{wArray[4]}</th>
                        <th scope="col">{wArray[5]}</th>
                        <th scope="col">{wArray[6]}</th>
                    </tr>
                </thead>
                <p>Current Year: {date.getFullYear()}</p>
                <p>Current Month: {monthNames[date.getMonth()]}</p>
                <p>Current Day: {date.getDate()}</p>
                <p>Current Week: {getWeek(currentDate)}</p>
                <p>Current Day of year: {getDayOfYear(currentDate)}</p>
                <p>Next Week Date: {addDays(currentDate, 10).toString()}</p>
            </table>
        </div>
    );
}

function getWeekDates(week) {

}

function getMonthLabel(week) {

}

export default Home;