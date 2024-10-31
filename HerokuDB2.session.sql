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
    start_time INT,
    end_time INT,
    shiftDate DATE,
    shiftRole VARCHAR(255),
    FOREIGN KEY (employeeId) REFERENCES Users(id)
)

-- @block
INSERT INTO Users (id, fname, lname)
VALUES (
    665,
    'Dallas',
    'Carlson'
);

-- @block
SELECT * FROM Users;

-- @block
DROP TABLE Shifts;