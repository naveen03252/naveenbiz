CREATE DEFINER=`root`@`localhost` FUNCTION `func_test`(mark1 int,mark2 int,mark3 int) RETURNS varchar(20) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
	declare result varchar(20);
    if mark1+mark2+mark3>=270 then
		set result='excellent';
	elseif (mark1+mark2+mark3>=210 and mark1+mark2+mark3<270) then
		set result='good';
	elseif (mark1+mark2+mark3>=150 and mark1+mark2+mark3<210) then
		set result='average';
	else set result='fail';
    end if;
RETURN result;
END