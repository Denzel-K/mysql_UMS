CREATE TABLE `EmployeeManagement`.`Employees` ( `id` INT NOT NULL AUTO_INCREMENT , `first_name` VARCHAR(45) NOT NULL , `last_name` VARCHAR(45) NOT NULL , `email` VARCHAR(45) NOT NULL , `phone` VARCHAR(45) NOT NULL , `comments` VARCHAR(100) NOT NULL , `role` VARCHAR(20) NOT NULL , PRIMARY KEY (`id`));

ALTER TABLE employees ADD COLUMN status VARCHAR(20) DEFAULT 'active';