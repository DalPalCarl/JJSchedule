import { addDays, getDate, previousSunday, subDays, nextSaturday, isToday } from 'date-fns';
import { useEffect, useState } from 'react';
import DayShifts from './DayShifts.js';
import './Components.css';


const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Home = () => {
    const date = new Date();
    const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    //const resultDate = previousSunday(new Date(date.getFullYear(), date.getMonth(), 27)).toString().split(" ");

    const [displayMonth, setDisplayMonth] = useState(monthNames[currentDate.getMonth()]);
    const [weekArray, setWeekArray] = useState([]);
    const [newDate, setNewDate] = useState(new Date());

    useEffect(() => {
        setWeekArray(generateWeek(currentDate));
        setDisplayMonth(getDisplayMonth(currentDate));
        setNewDate(currentDate);
    }, [])

    const handleNextWeek = () => {
        const nextWeek = addDays(newDate, 7);
        setNewDate(nextWeek);

        setWeekArray(generateWeek(nextWeek));
        setDisplayMonth(getDisplayMonth(nextWeek));
    }

    const handlePrevWeek = () => {
        const prevWeek = subDays(newDate, 7);
        setNewDate(prevWeek);

        setWeekArray(generateWeek(prevWeek));
        setDisplayMonth(getDisplayMonth(prevWeek));
    }

    return(
        <div className="mx-2 md:mx-5 font-serif-reg">
            <div className='btn-group m-2 justify-content-start'>
                <button type='button' className='btn btn-primary' onClick={() => {handlePrevWeek()}}>Prev</button>
                <button type='button' className='btn btn-primary' onClick={() => {handleNextWeek()}}>Next</button>
            </div>
            <h1>{displayMonth}</h1>
            <div className="overflow-scroll">
                <table className="table table-striped-columns my-0">
                    <thead>
                        <tr>
                            <th scope="col" key={0}>Sun</th>
                            <th scope="col" key={1}>Mon</th>
                            <th scope="col" key={2}>Tue</th>
                            <th scope="col" key={3}>Wed</th>
                            <th scope="col" key={4}>Thu</th>
                            <th scope="col" key={5}>Fri</th>
                            <th scope="col" key={6}>Sat</th>
                        </tr>
                        <tr className="fs-5">
                            {weekArray.map((day, i) => {
                                return(
                                    <th key={i} scope="col" className={isToday(day) ? "bg-info" : ""}>{getDate(day)}</th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {weekArray.map((day) => {
                            return(
                                <td key={day} className='w-200'>
                                    <DayShifts day={day}/>
                                </td>
                            );
                        })}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function generateWeek(dateGiven){
    if(dateGiven.getDay() === 0){
        return getWeekDates(dateGiven);
    }
    else{
        return getWeekDates(previousSunday(dateGiven));
    }
}

function getWeekDates(d) {
    let genWeek = [];
    for(let i = 0; i < 7; i++){
        genWeek = [...genWeek, addDays(d, i)];
    }
    return genWeek;

}

function getDisplayMonth(d) {
    let sun = d;
    if(d.getDay() !== 0){
        sun = previousSunday(d);
    }
    let sat = nextSaturday(sun);

    if(sun.getMonth() !== sat.getMonth()){
        return (monthNames[sun.getMonth()] + " - " + monthNames[sat.getMonth()]);
    }
    return monthNames[sun.getMonth()];
}

export default Home;