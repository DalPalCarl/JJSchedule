import { addDays, getDate, previousSunday, subDays, nextSaturday, isToday } from 'date-fns';
import { useEffect, useState } from 'react';
import DayShifts from './DayShifts.js';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Home = () => {
    const date = new Date();
    const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    //const resultDate = previousSunday(new Date(date.getFullYear(), date.getMonth(), 27)).toString().split(" ");

    const [displayMonth, setDisplayMonth] = useState(monthNames[currentDate.getMonth()]);
    const [weekArray, setWeekArray] = useState([0,0,0,0,0,0,0]);
    const [newDate, setNewDate] = useState(new Date());

    useEffect(() => {
        setWeekArray(generateWeek(currentDate));
        setDisplayMonth(monthNames[currentDate.getMonth()]);
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
        <div className="table-responsive mx-5">
            <div className='btn-group m-2 justify-content-start'>
                <button type='button' className='btn btn-primary' onClick={() => {handlePrevWeek()}}>Prev</button>
                <button type='button' className='btn btn-primary' onClick={() => {handleNextWeek()}}>Next</button>
            </div>
            <h1>{displayMonth}</h1>
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
                        <th scope="col" className={isToday(getDate(weekArray[0])) ? "bg-info" : ""}>{getDate(weekArray[0])}</th>
                        <th scope="col" className={isToday(getDate(weekArray[1])) ? "bg-info" : ""}>{getDate(weekArray[1])}</th>
                        <th scope="col" className={isToday(getDate(weekArray[2])) ? "bg-info" : ""}>{getDate(weekArray[2])}</th>
                        <th scope="col" className={isToday(getDate(weekArray[3])) ? "bg-info" : ""}>{getDate(weekArray[3])}</th>
                        <th scope="col" className={isToday(getDate(weekArray[4])) ? "bg-info" : ""}>{getDate(weekArray[4])}</th>
                        <th scope="col" className={isToday(getDate(weekArray[5])) ? "bg-info" : ""}>{getDate(weekArray[5])}</th>
                        <th scope="col" className={isToday(getDate(weekArray[6])) ? "bg-info" : ""}>{getDate(weekArray[6])}</th>
                    </tr>
                </thead>
                <tbody>
                    {weekArray.map(function(day, i) {
                        return(
                            <th key={i}>
                                <DayShifts />
                            </th>
                        )
                    })}
                </tbody>
            </table>
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