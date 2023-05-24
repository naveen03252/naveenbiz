select * from products where product_brand = 'Dell' or 
discount= 10 or rating = 4.5 or 
category = 'Clothing' or (product_price between 40000 and 70000) or colour = 'Black';
 
 
 delimiter $$
 create procedure shop_left(in uproduct_brand varchar(40),in udiscount int, in urating int,in ucategory varchar(40),in uproduct_price int,in ucolour varchar(40))
 begin 
	if ucategory is null or ucategory = '' then 
    select "category cant be empty";
    else 
    select * from products where product_brand = uproduct_brand or 
	discount= udiscount or rating = urating or 
	category = ucategory or product_price = uproduct_price or colour = ucolour;
    end if;
    end $$

drop procedure shop_left;

call shop_left('Dell',10,4.5,null,50000,'Black');