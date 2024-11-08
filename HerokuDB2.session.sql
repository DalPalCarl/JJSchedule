-- @block
CREATE TABLE Users (
    id INT PRIMARY KEY,
    fname VARCHAR(255),
    lname VARCHAR(255)
);

-- @block
CREATE TABLE Shifts (
    shiftId INT PRIMARY KEY AUTO_INCREMENT,
    employeeId INT,
    start_time VARCHAR(5),
    end_time VARCHAR(5),
    shiftDate VARCHAR(12),
    shiftRole VARCHAR(10),
    FOREIGN KEY (employeeId) REFERENCES Users(id)
)

-- @block
INSERT INTO Users (id, fname, lname)
VALUES (
    66,
    'Gabe',
    'Licano'
);

-- @block
INSERT INTO Shifts (employeeId, start_time, end_time, shiftDate, shiftRole)
VALUES (
    66,
    '4',
    'CL',
    '2024-11-02',
    'In-Shop'
);

-- @block
SELECT * FROM Users;

-- @block
DROP TABLE Shifts;

-- @block
DELETE FROM Users WHERE 1 = 1;