delimiter $$
create procedure sub_pro(in urefuser_id int,in uemail varchar(40),in usubscription varchar(40))
begin 
if uemail in (select email from user_table) then
update user_table set subscription = usubscription where email = uemail;
else 
insert into user_table(refuser_id,email,subscription) values(urefuser_id,uemail,usubscription);
end if;
end $$

call sub_pro(8,"bswyvd.hai@.com","yes");