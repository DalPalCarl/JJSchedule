

const Home = () => {
    const wArray = getCurrentWeek();

    return(
        <div className="table-responsive">
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
            </table>
        </div>
    );
}

function getCurrentWeek() {
    const weekDay = +new Date().getDay();
    const monthDay = +new Date().getDate();
    let from = monthDay - weekDay;
    let to = monthDay + (7-weekDay);
    let weekArray = [];
    for(let j = from; j < to; j++){
        weekArray = [...weekArray, j];
    }
    return weekArray;
}

export default Home;