create table students(
id int(10) auto_increment primary key,
stname varchar(20),
marks int
);
select * from students;
insert into students(stname,marks) values('naveen',98),('mohan',78),('praneeth',56);

select function_marks(marks),stname from students;
select function_marks(98);
select * from students;
