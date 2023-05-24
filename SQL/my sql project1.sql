create table sign_in(
first_name varchar(20),
last_name varchar(20),
email varchar(40) primary key,
passwd varchar(20)	
);

INSERT INTO sign_in (first_name, last_name, email, passwd) 
VALUES 
    ('Jane', 'Doe', 'janedoe@example.com', 'mypassword'),
    ('Bob', 'Smith', 'bobsmith@example.com', 'password123'),
    ('Alice', 'Johnson', 'alicejohnson@example.com', 'passw0rd!'),
    ('David', 'Lee', 'davidlee@example.com', 'secret123');

insert into sign_in(first_name,last_name,email,passwd) values ("navee",'chi','nav,chi@mail.comkkvhj','pass');
select * from sign_in;
select count(email) from sign_in;

delimiter $$
create procedure valid(in uemail varchar(30),in upasswd varchar(30))
begin
if uemail in (select email from sign_in) then
	if upasswd in (select passwd from sign_in where email=uemail) then
    select "logged in successfull";
    else select "password incorrect";
    end if;
    else select "username incorrect";
    end if;
end $$
    
    drop procedure valid;
call valid("alicejohnson@example.com","passw0rd!");

alter table sign_in add id int;


    
