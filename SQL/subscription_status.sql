SELECT * FROM hekto.user_table;

alter table user_table add subscription_status varchar(20);
alter table user_table drop column subscription_status;
alter table user_table modify column user_id int;

insert into user_table(user_id,email,subscription_status) values(4,"nav.ch@gmail.com","yes");

delimiter $$
create procedure sub_pro(in uuser_id int,in uemail varchar(40),in usubscription_status varchar(40))
begin 
if uemail in (select email from user_table) then
update user_table set subscription_status = usubscription_status where email = uemail;
else 
insert into user_table(user_id,email,subscription_status) values(uuser_id,uemail,usubscription_status);
end if;
end $$

call sub_pro(5,"pava.gmail@.com","yes");




