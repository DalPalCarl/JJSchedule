-- @block
CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(255),
    lname VARCHAR(255),
    phone VARCHAR(255),
    position VARCHAR(255)
);

-- @block
INSERT INTO Users (fname, lname, phone, position)
VALUES (
    'Dallas',
    'Carlson',
    '5076764513',
    'PIC'
);

-- @block
SELECT * FROM Users;

-- @block
DROP TABLE Users;