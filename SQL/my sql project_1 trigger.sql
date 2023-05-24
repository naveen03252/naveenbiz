CREATE DEFINER=`root`@`localhost` TRIGGER `det_BEFORE_INSERT` BEFORE INSERT ON `sign_in` FOR EACH ROW BEGIN
	if new.email in (select email from sign_in) then 
    signal sqlstate '50001' set message_text='already exists';
    end if;
    if new.email=null or new.email="" or new.passwd=null or new.passwd="" then 
    signal sqlstate '50001' set message_text="values can't be null";
    end if;
END