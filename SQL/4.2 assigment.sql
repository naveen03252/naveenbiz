create schema schools;
CREATE TABLE department (
  dept_id INT  PRIMARY KEY,
  dept_name VARCHAR(20) 
);

CREATE TABLE students (
  student_id INT  PRIMARY KEY,
  student_name VARCHAR(20) ,
  department_id INT NOT NULL,
  m1 INT,
  drawing INT,
  englsh INT,
  CONSTRAINT fk_department_id
    FOREIGN KEY (department_id)
    REFERENCES department(dept_id)
);

select * from department;
select * from students;
select func_test(m1,drawing,englsh),student_name from students;

create user fetch1@localhost identified by 'abc135';
grant insert,update,delete,create on *.* to fetch1@localhost;
flush privileges;

create user fetch2@localhost identified by 'abc246';
grant select on *.* to fetch1@localhost;
flush privileges;


create table registration(
reg_id int auto_increment primary key,
gender varchar(20),
age int,
reg_date date,
timestamp TIMESTAMP DEFAULT NOW()
);
select * from registration;

insert into registration(gender,age,reg_date) values("male",80,'2000-11-12');
insert into registration(gender,age,reg_date) values("male",48,'2000-12-21');







 

