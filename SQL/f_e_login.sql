create schema f_e_login;
create table login(
id int auto_increment primary key,
username varchar(40) unique,
passwd varchar(40)
);

select * from login;

delimiter $$
create procedure login_pro(in uusername varchar(40),in upasswd varchar(40))
begin
 IF EXISTS (SELECT * FROM login WHERE username = uusername AND passwd= upasswd) THEN
        SELECT 'Login successfull';
    ELSE
        SELECT 'Login Unsuccessfull';
    END IF;
end $$
drop procedure login_pro;
call login_pro("naveen03252","naveen123");