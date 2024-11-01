

const EmployeeShift = ({name, start, end}) => {
    return (
        <div className="flex flex-col my-4">
            <p>{name}</p>
            <div className="flex d-flex w-full gap-2">
                <input className="form-control" type="text" name="start" value={start} disabled readOnly />
                <p className="align-middle">-</p>
                <input className="form-control" type="text" name="end" value={end} disabled readOnly />
            </div>
        </div>
    );
}

export default EmployeeShift;