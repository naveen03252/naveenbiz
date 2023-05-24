CREATE DEFINER=`root`@`localhost` TRIGGER `user_table_BEFORE_UPDATE` BEFORE UPDATE ON `user_table` FOR EACH ROW BEGIN
if new.email in (select email from user_table) then 
    signal sqlstate '50001' set message_text='already exists';
    end if;
END