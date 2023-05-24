CREATE DEFINER=`root`@`localhost` FUNCTION `function_marks`(
marks int(5)
) RETURNS varchar(20) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
  declare result varchar(20);
   IF marks> 90 THEN
		SET result = 'outstanding';
	ELSEIF (marks>70 and marks<90) then
		SET result ='excellient';
	ELSEIF (marks>35 and marks<70) then
		SET result ='good';
    END IF;
	-- return the customer level
	RETURN (result);
END