import { addDays, getDayOfYear, getDate, previousSunday, toDate } from 'date-fns';
import { useEffect, useState } from 'react';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Home = () => {
    const date = new Date();
    const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    //const resultDate = previousSunday(new Date(date.getFullYear(), date.getMonth(), 27)).toString().split(" ");

    const [displayMonth, setDisplayMonth] = useState(0);
    const [weekArray, setWeekArray] = useState([0,0,0,0,0,0,0]);

    useEffect(() => {
        setWeekArray(generateWeek(currentDate));
        setDisplayMonth(date.getMonth());
    }, [])

    return(
        <div className="table-responsive mx-5">
            <div className='btn-group m-2 justify-content-start'>
                <button type='button' className='btn btn-primary'>Prev</button>
                <button type='button' className='btn btn-primary'>Next</button>
            </div>
            <h1>{monthNames[displayMonth]}</h1>
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
                        <th scope="col">{weekArray[0]}</th>
                        <th scope="col">{weekArray[1]}</th>
                        <th scope="col">{weekArray[2]}</th>
                        <th scope="col">{weekArray[3]}</th>
                        <th scope="col">{weekArray[4]}</th>
                        <th scope="col">{weekArray[5]}</th>
                        <th scope="col">{weekArray[6]}</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

function generateWeek(dateGiven){
    if(dateGiven.getDay() === 0){
        return getWeekDates(toDate(dateGiven));
    }
    else{
        return getWeekDates(previousSunday(dateGiven));
    }
}

function getWeekDates(dateStr) {
    const dateArr = dateStr.toString().split(" ");
    const dateStrMonth = monthNames.indexOf(dateArr[1]);
    const dateStrDate = parseInt(dateArr[2]);
    const dateStrYear = parseInt(dateArr[3]);
    const isDec = dateStrMonth === 11;

    const daysInMonth = getDate(new Date(isDec ? dateStrYear + 1 : dateStrYear, isDec ? 0 : dateStrMonth + 1, 0));
    let genWeek = [];
    for(let i = 0; i < 7; i++){
        genWeek = [...genWeek, (dateStrDate + i) % daysInMonth];
    }
    return genWeek;
}

export default Home;