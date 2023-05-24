create table studentinfo(
st_id int auto_increment primary key,
st_name varchar(20),
dep_id int,
m1 int,
drawing int,
eglish int
);

	select * from studentinfo;

insert into studentinfo(st_name,dep_id,m1,drawing,eglish) values
("John Doe",1,90,85,95),
("Jane Smith",2,80,75,85),
("Bob Johnson",3,95,90,100),
("Sarah Lee",1,85,80,90),
("Tom Brown",2,75,70,80),
("Brown roy",4,70,60,90),
("shiva",4,78,79,40);

alter table studentinfo add dept_name varchar(20);

delimiter $$
create procedure pro1()
begin

select * from studentinfo;
end $$

call pro1();


delimiter $$
create procedure pro2(in id int)
begin

select * from studentinfo where st_id = id;
end $$

call pro2(2);

delimiter $$
create procedure pro3(out total int)
begin

select count(st_id) from studentinfo where dept_name = 'CS';
end $$

call pro3(@n);

delimiter $$
create procedure pro4(in id int,in dt varchar(20))
begin

select * from studentinfo where st_id = id and dept_name = dt;
end $$

call pro4(5,'CS');

delimiter $$
create procedure pro5(in operation varchar(20),in uid int, in uname varchar(20))
begin
if operation = 'create'
then 
create table st_table(id int,name varchar(20));
elseif operation = 'insert'
then 
insert into st_table(id,name) values(uid,uname);
elseif operation = 'update'
then 
update st_table set name=uname where id=uid;
elseif operation = 'select'
then 
select * from st_table;
end if;
end $$

call pro5('create',null,null);
call pro5('insert',1,'naveen');
call pro5('select',null,null);
call pro5('update',2,'pranav');
SET SQL_SAFE_UPDATES = 0;







