-- USE ecommerce_db;

-- INSERT INTO category 
-- -- columns should match the values below
-- (id,category_name)
-- VALUES 
-- ("1","Camping"),
-- ("2","LED Items"),
-- ("3","Hydration Packs"),
-- ("4","Hiking Shoes");

-- INSERT INTO product
-- -- columns should match the values below
-- (id,product_name,price,stock,category_id)
-- VALUES 
-- ("10","Noah's Ark solar roof tent","300", "10","1"),
-- ("20","Mikes LED shoes","150", "12","2"),
-- ("30","Basic Hydrate","85", "8","3"),
-- ("40","Colombina's Hiking shoe","175", "13","4");

-- INSERT INTO tag
-- -- columns should match the values below
-- (id,tag_name)
-- VALUES
-- ("100","Alpha"),
-- ("200","Beta"),
-- ("300","Gamma"),
-- ("400","Delta");

-- INSERT INTO productTag
-- -- columns should match the values below
-- (id,product_id,tag_id)
-- VALUES
-- ("1000","10","100"),
-- ("2000","20","200"),
-- ("3000","30","300"),
-- ("4000","40","400");

-- SELECT * FROM category
-- SELECT * FROM product
-- SELECT * FROM tag
SELECT * FROM product_tag