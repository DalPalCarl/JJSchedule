

const EmployeeShift = ({name, start, end}) => {
    return (
        <div className="flex flex-col">
            <p>{name}</p>
            <div className="flex d-flex w-full">
                <input className="form-control" type="text" value={start} disabled readonly />
                <input className="form-control" type="text" value={end} disabled readonly />
            </div>
        </div>
    );
}

export default EmployeeShift;