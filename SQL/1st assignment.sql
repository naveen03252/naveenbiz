create table tbl_order(
id int auto_increment primary key,
quantity int,
orderdate date,
shipdate date,
productname varchar(30),
deliverydate date,
price int
);

insert into tbl_order(quantity,orderdate,shipdate,productname,deliverydate,price) values (1,'2023-01-27','2023-01-31','Shirt','2023-02-10',1500),(3,'2023-01-02','2023-01-11','Laptop','2023-02-11',40000),(6,'2023-01-12','2023-01-18','Mobile','2023-02-12',25000),(5,'2023-01-25','2023-01-30','Smart Watch','2023-02-13',9000),(4,'2023-02-10','2023-02-16','Shoes','2023-02-14',2000),(2,'2023-02-28','2023-03-15','Bag','2023-02-15',1500);

select * from tbl_order;

create table tbl_customer(
customerid int primary key,
orderid int,
foreign key(orderid) references tbl_order(id),
name varchar(30),
phonenumber int,
address varchar(40)
);

select * from tbl_customer;

insert into tbl_customer(customerid,orderid,name,phonenumber,address) values (123,1,'prem',9844,'mumbai 10'),(456,2,'sai',1234,'ap 9'),(789,3,'krish',4129,'ts 8'),(369,4,'aakash',6598,'Tn 7'),(533,5,'ajith',1487,'Ke 6'),(753,6,'moha',1597,'mp 5'),(357,2,'pra',4532,'Rj 1'),(429,1,'khill',4569,'up 2');

select * from tbl_customer;

update tbl_order set quantity=10 where id = 1;

select c.name from tbl_order o join tbl_customer c on c.orderid=o.id and o.productname = 'Laptop' ;

select c.name from tbl_order o join tbl_customer c on c.orderid=o.id and o.productname = 'Laptop' ;

select sum(price) as total from tbl_order;

select count(name) as total from tbl_customer;

alter table tbl_customer modify phonenumber varchar(40);

alter table tbl_customer rename column phonenumber to contactnumber;

alter table tbl_customer add dob date;
select * from tbl_customer;

alter table tbl_customer drop column dob;

select * from tbl_customer;

select count(orderid) from tbl_customer group by productname;

select c.name,o.productname from tbl_order o join tbl_customer c on c.orderid=o.id and (o.productname = 'Laptop' or o.productname = 'Mobile' );

select count(c.customerid),o.productname from tbl_customer c join tbl_order o on c.orderid = o.id group by o.productname;

select * from tbl_customer limit 4;

select * from tbl_order limit 2;


select * from tbl_customer;

select * from tbl_customer where lastname is null;
select * from tbl_customer where lastname is not null;
select * from tbl_customer where name like 'p%';
select * from tbl_customer where name like '%p';
select * from tbl_customer where name like '%h';
select * from tbl_customer where name like '%p%';
select * from tbl_customer where name like '_r%';
select * from tbl_customer where name like 'p_%';
select * from tbl_customer where name like 'p__%';
select * from tbl_customer where name like 'p%m';

select * from tbl_order where productname in('Shirt','Laptop','Bag');

create user user1@localhost identified by 'abc123';
create user user2@localhost identified by 'abc456';
create user user3@localhost identified by 'abc789';

select user from mysql.user;

grant all privileges on *.* to user1@localhost;
flush privileges;

grant read_only on  *.* to user2@localhost;
flush privileges;

grant create,insert,update on  *.* to user3@localhost;
flush privileges;


















