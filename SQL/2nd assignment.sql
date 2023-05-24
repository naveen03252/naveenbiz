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