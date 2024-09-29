drop database lightbulb;


CREATE DATABASE lightbulb;


USE lightbulb;

CREATE TABLE User (
 Uid int NOT NULL AUTO_INCREMENT,
 PRIMARY KEY (Uid),
 UNIQUE(Uid),
 LastName varchar(255) NOT NULL,
 FirstName varchar(255) NOT NULL,
 UserName varchar(255) NOT NULL, 
 UNIQUE(UserName),
 Password varchar(255) NOT NULL,
 Student int DEFAULT 0,
 Teacher int DEFAULT 0
 );

CREATE TABLE Teacher(
	Tid int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (Tid),
    UNIQUE(Tid),
    Uid int,
    FOREIGN KEY (Uid) REFERENCES User(Uid)
);

CREATE TABLE Student(
	Sid int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (Sid),
    UNIQUE (Sid),
    Uid int,
    FOREIGN KEY (Uid) REFERENCES User(Uid)
);

CREATE TABLE Board (
	Bid int NOT NULL AUTO_INCREMENT,
    Tid int,
    PRIMARY KEY(Bid),
    UNIQUE (Bid),
	FOREIGN KEY (Tid) REFERENCES Teacher(Tid)
);

CREATE TABLE Post(
	Pid int NOT NULL AUTO_INCREMENT,
    Uid int,
    PRIMARY KEY (Pid),
    UNIQUE(Pid),
	FOREIGN KEY (Uid) REFERENCES User(Uid),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    checked BOOLEAN,
    UPVOTES int

);

CREATE TABLE Enrollment (
	Eid int NOT NULL AUTO_INCREMENT,
    UNIQUE (Eid),
    Uid int,
    FOREIGN KEY (Uid) REFERENCES User(Uid)
);

CREATE TABLE Replies (
	Reid int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(Reid),
    UNIQUE(Reid),
    Pid int,
    Uid int,
    FOREIGN KEY (Pid) REFERENCES Post(Pid),
    FOREIGN KEY (Uid) REFERENCES User(Uid),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    content TEXT
    
);

CREATE TABLE Admin(
Aid int NOT NULL AUTO_INCREMENT,
PRIMARY KEY(Aid),
UNIQUE(Aid),
Uid int,
Bid int,
FOREIGN KEY (Uid) REFERENCES User(Uid),
FOREIGN KEY (Bid) REFERENCES Board(Bid)
);

SELECT * FROM User;

SELECT * FROM Teacher;

SELECT * FROM Student;