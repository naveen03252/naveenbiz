CREATE TABLE tbl_order1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quantity INT,
    orderdate DATE,
    shipdate DATE,
    productname VARCHAR(30),
    deliverydate DATE,
    price INT,
    INDEX (productname,price)
);

insert into tbl_order1(quantity,orderdate,shipdate,productname,deliverydate,price) values (1,'2023-01-27','2023-01-31','Shirt','2023-02-10',1500),(3,'2023-01-02','2023-01-11','Laptop','2023-02-11',40000),(6,'2023-01-12','2023-01-18','Mobile','2023-02-12',25000),(5,'2023-01-25','2023-01-30','Smart Watch','2023-02-13',9000),(4,'2023-02-10','2023-02-16','Shoes','2023-02-14',2000),(2,'2023-02-28','2023-03-15','Bag','2023-02-15',1500);
SELECT 
    *
FROM
    tbl_order1;

CREATE TABLE tbl_customer1 (
    customerid INT PRIMARY KEY,
    orderid INT,
    FOREIGN KEY (orderid)
        REFERENCES tbl_order (id),
    name VARCHAR(30),
    phonenumber INT,
    address VARCHAR(40),
    INDEX (name , orderid)
);
insert into tbl_customer1(customerid,orderid,name,phonenumber,address) values (123,1,'prem',9844,'mumbai 10'),(456,2,'sai',1234,'ap 9'),(789,3,'krish',4129,'ts 8'),(369,4,'aakash',6598,'Tn 7'),(533,5,'ajith',1487,'Ke 6'),(753,6,'moha',1597,'mp 5'),(357,2,'pra',4532,'Rj 1'),(429,1,'khill',4569,'up 2');
select * from tbl_customer1;

update tbl_order1 set quantity=10 where id = 1;
explain update tbl_order1 set quantity=10 where id = 1;

select c.name,o.productname from tbl_order1 o join tbl_customer1 c on c.orderid=o.id and o.productname = 'Laptop' ;
explain select c.name,o.productname from tbl_order1 o join tbl_customer1 c on c.orderid=o.id and o.productname = 'Laptop' ;

select c.name,o.productname from tbl_order1 o join tbl_customer1 c on c.orderid=o.id where o.productname = 'Laptop' or o.productname = 'Mobile';
explain select c.name,o.productname from tbl_order1 o join tbl_customer1 c on c.orderid=o.id where o.productname = 'Laptop' or o.productname = 'Mobile';

select sum(price) as total from tbl_order1;
explain select sum(price) as total from tbl_order1;

select count(name) as total from tbl_customer;
explain select count(name) as total from tbl_customer;

alter table tbl_customer1 modify phonenumber varchar(40);
